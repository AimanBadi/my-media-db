import { GraphQLScalarType, Kind } from "graphql";
import { PrismaClient } from "@prisma/client";
import { argsToArgsConfig } from "graphql/type/definition";

const prisma = new PrismaClient();

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return new Date(value as string); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value as number); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

export const resolvers = {
  Date: dateScalar,
  Query: {
    hello: () => "world",
    //@ts-ignore
    getPopularMovies: (_, __, { dataSources }) => {
      return dataSources.TmdbAPI.getPopularMovies();
    },
    // @ts-ignore
    getPopularTV: (_, __, { dataSources }) => {
      return dataSources.TmdbAPI.getPopularTV();
    },
    //@ts-ignore
    getMovie: (_, { id }, { dataSources }) => {
      return dataSources.TmdbAPI.getMovie(id);
    },
    //@ts-ignore
    getTV: (_, { id }, { dataSources }) => {
      return dataSources.TmdbAPI.getTV(id);
    },
  },
  Mutation: {
    createNote: async (
      _: any,
      {
        mediaId,
        content,
      }: { userId: string; mediaId: string; content: string },
      { user }
    ) => {
      if (!user) {
        return {
          code: 401,
          success: false,
          message: "Please log in to save your personel notes",
        };
      }

      try {
        const author = await prisma.user.findUnique({
          where: { email: user.email },
        });

        const note = await prisma.notes.create({
          data: {
            mediaId,
            title: "this is a test",
            content,
            user: {
              connect: {
                id: author?.id,
              },
            },
          },
        });
        return {
          code: 200,
          success: true,
          message: `Note for ${mediaId} created successfully by ${user.email}`,
          note,
        };
      } catch (err: any) {
        console.log("here", err.message);
        return {
          code: err.extension.response.status,
          success: false,
          message: err.extension.response.body,
          note: null,
        };
      }
    },
  },
};
