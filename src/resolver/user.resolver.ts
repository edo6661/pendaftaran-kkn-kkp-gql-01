import { userIncludeConfig } from "@/config/user";
import { db } from "@/lib/db";
import { comparePassword, hashPassword } from "@/lib/hash";
import { IContext } from "@/types/express";
import { SignInInput, SignUpInput } from "@/types/user";

export const userResolver = {
  Query: {
    users: async () => {
      return await db.user.findMany({
        include: userIncludeConfig,
      });
    },
    user: async (_parent: any, { id }: { id: string }) => {
      try {
        return await db.user.findUnique({
          where: { id },
          include: userIncludeConfig,
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
        include: userIncludeConfig,
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
    signUp: async (
      _parent: any,
      { signUpInput }: { signUpInput: SignUpInput }
    ) => {
      const { username, email, password, role } = signUpInput;
      const existingUser = await db.user.findFirst({
        where: { username },
      });
      if (existingUser) throw new Error("Username is already taken");

      const hashedPassword = await hashPassword(password);

      return await db.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          role,
        },
      });
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
    updateUser: async (
      _parent: any,
      {
        id,
        data,
      }: {
        id: string;
        data: {
          username?: string;
          email?: string;
          password?: string;
          profilePhoto?: string;
          role?: string;
        };
      }
    ) => {
      const updatedData: any = { ...data };

      if (data.password) {
        updatedData.password = await hashPassword(data.password);
      }

      return await db.user.update({
        where: { id },
        data: updatedData,
      });
    },
    deleteUser: async (_parent: any, { id }: { id: string }) => {
      return await db.user.delete({
        where: { id },
      });
    },
  },
};
