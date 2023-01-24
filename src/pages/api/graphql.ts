import micro_cors from "micro-cors";
import { ApolloServer } from "apollo-server-micro";
import { unstable_getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import { authOptions } from "./auth/[...nextauth]";
import { TmdbAPI } from "@/graphql/datasources/tmdp-api";

const cors = micro_cors({
  origin: "https://studio.apollographql.com",
  allowMethods: ["GET", "POST"],
  allowHeaders: [
    "Access-Control-Allow-Credentials",
    "true",
    "Content-Type",
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Headers",
  ],
});

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  const session = await unstable_getServerSession(
    req as NextApiRequest,
    res as NextApiResponse,
    authOptions
  );

  const server = new ApolloServer({
    resolvers,
    typeDefs,
    dataSources: () => {
      return {
        TmdbAPI: new TmdbAPI(),
      };
    },
    context: async (req: NextApiRequest, res: NextApiResponse) => ({
      req,
      res,
      user: session?.user,
    }),
  });

  const startServer = server.start();
  await startServer;

  await server.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
