import { UserWithoutPassword } from "@/types/auth";
import jwt from "jsonwebtoken";

export const generateToken = (user: UserWithoutPassword) =>
  jwt.sign(
    {
      ...user,
    },
    process.env.JWT_TOKEN_SECRET!
  );
export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.JWT_TOKEN_SECRET!);
