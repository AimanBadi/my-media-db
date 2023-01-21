import { GraphQLScalarType, Kind } from "graphql";
import { PrismaClient } from "@prisma/client";
import { argsToArgsConfig } from "graphql/type/definition";

const prisma = new PrismaClient();

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return (value as Date).getTime(); // Convert outgoing Date to integer for JSON
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
    getPopular: (_, __, { dataSources }) => {
      return dataSources.TmdbAPI.getPopular();
    },
  },
  Mutation: {
    createNote: async (
      _: any,
      {
        userId,
        mediaId,
        content,
      }: { userId: string; mediaId: string; content: string }
    ) => {
      // const note = await prisma.notes.create()
      return {
        code: 200,
        success: true,
        message: `This is a test message, data is: ${userId} ${mediaId} ${content}`,
      };
    },
  },
};
