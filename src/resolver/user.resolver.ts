import { db } from "@/lib/db";
import { comparePassword } from "@/lib/hash";
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
      try {
        return await db.user.findUnique({
          where: { id },
        });
      } catch (error) {
        console.error(error);
        throw new Error("Failed to get user");
      }
    },
    authUser: async (_parent: any, _args: any, context: IContext) => {
      try {
        if (!context || !context.isAuthenticated()) {
          throw new Error("User not authenticated");
        }
        return context.getUser();
      } catch (err) {
        console.error(err);
        throw new Error("Failed to get authenticated user");
      }
    },
  },
  Mutation: {
    signIn: async (
      _parent: any,
      { signInInput }: { signInInput: SignInInput },
      context: IContext
    ) => {
      const { username, password } = signInInput;
      const existingUser = await db.user.findFirst({
        where: { username },
      });
      if (!existingUser) throw new Error("User not found");
      const matchPassword = await comparePassword(
        password,
        existingUser.password
      );
      if (!matchPassword) throw new Error("Password is invalid");

      const { user, info } = await context.authenticate("graphql-local", {
        // @ts-ignore
        username,
        password,
      });
      await context.login(user!);
      console.log("INFO FROM RESOLVER", info);
      console.log("USER FROM RESOLVER", user);
      return user;
    },
    signOut: async (_parent: any, _args: any, context: IContext) => {
      if (!context) throw new Error("No context found, failed to logout");

      try {
        await context.logout();
        context.req.session.destroy((err) => {
          if (err) throw err;
        });
        context.res.clearCookie("connect.sid");

        return { message: "Logged out successfully" };
      } catch (err) {
        console.error("Error in logout:", err);
      }
    },
  },
};
