import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (token) {
      let user: any;

      try {
        const { id } = jwt.verify(token, "Hello");
        user = await prisma.user.findUnique({ where: { id } });

        if (!user) {
          throw new Error("User not found");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not autorized" });
        return;
      }
      return handler(req, res, user);
    }
    res.status(401);
    res.json({ error: "Not autorized" });
  };
};
