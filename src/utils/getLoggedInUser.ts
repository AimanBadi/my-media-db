import { NextApiRequest, NextApiResponse } from "next";
import { AuthOptions } from "next-auth";
import { unstable_getServerSession } from "next-auth/next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
  authOptions: AuthOptions
) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  console.log("here", session);
};
