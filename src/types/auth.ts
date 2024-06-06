import { User } from "@prisma/client";

export interface IAuth {
  username: string;
  password: string;
}

export interface UserWithoutPassword extends Omit<User, "password"> {}

declare module "express-serve-static-core" {
  interface Request {
    user?: UserWithoutPassword;
  }
}

export interface IGetUserAuthInfoRequest extends Request {
  user: UserWithoutPassword;
}
