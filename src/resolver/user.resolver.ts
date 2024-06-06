import { db } from "@/lib/db";
import { hashPassword } from "@/lib/hash";
import { IContext } from "@/types/express";
import { Role } from "@prisma/client";

interface SignUpInterface {
  username: string;
  password: string;
  email: string;
  role: Role;
  profilePhoto: string;
}
interface SignInInput {
  username: string;
  password: string;
}

export const userResolver = {
  Query: {
    users: async () => {
      return await db.user.findMany();
    },
    user: async (_parent: any, { id }: { id: string }) => {
      return await db.user.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    signIn: async (
      _parent: any,
      { signInInput }: { signInInput: SignInInput },
      context: IContext
    ) => {
      const { username, password } = signInInput;
      const hashedPassword = hashPassword(password);
      const { user, info } = await context.authenticate("graphql-local", {
        // @ts-ignore
        username,
        password: hashedPassword,
      });
      context.login(user!);
      console.log("INFO", info);
      console.log("USER", user);
      return user;
    },
    signUp: async (
      _parent: any,
      { signUpInput }: { signUpInput: SignUpInterface }
    ) => {
      const { username, password, email, role, profilePhoto } = signUpInput;
      const hashedPassword = await hashPassword(password);
      return await db.user.create({
        data: {
          username,
          password: hashedPassword,
          email,
          role,
          profilePhoto,
        },
      });
    },
  },
};
