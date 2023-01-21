import { ApolloServer } from "apollo-server-micro";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import { NextApiRequest, NextApiResponse } from "next";
import Cors from "micro-cors";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { TmdbAPI } from "@/graphql/datasources/tmdp-api";

const cors = Cors();

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  const session = await unstable_getServerSession(req, res, authOptions);

  const server = new ApolloServer({
    resolvers,
    typeDefs,
    dataSources: () => {
      return {
        TmdbAPI: new TmdbAPI(),
      };
    },
    context: async (req, res) => ({ req, res, user: session?.user }),
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
