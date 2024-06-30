// resolvers/admin.ts

import { db } from "@/lib/db";
import { IContext } from "@/types/express";

export const adminResolver = {
  Query: {
    admins: async (_parent: any, _args: any, _context: IContext) => {
      if (!_context.req.user)
        throw new Error("Unauthorized: failed to get admins");
      return await db.admin.findMany({
        include: { user: true },
      });
    },
    admin: async (_parent: any, { id }: { id: string }) => {
      return await db.admin.findUnique({
        where: { id },
        include: { user: true },
      });
    },
  },
  Mutation: {
    createAdmin: async (
      _parent: any,
      { userId, fullname }: { userId: string; fullname: string },
      context: IContext
    ) => {
      if (!context.req.user)
        throw new Error("Unauthorized: failed to create admin");
      return await db.admin.create({
        data: {
          userId,
          fullname,
        },
        include: { user: true },
      });
    },
    updateAdmin: async (
      _parent: any,
      { id, fullname }: { id: string; fullname: string }
    ) => {
      return await db.admin.update({
        where: { id },
        data: {
          fullname,
        },
      });
    },
    deleteAdmin: async (_parent: any, { id }: { id: string }) => {
      return await db.admin.delete({
        where: { id },
      });
    },
  },
};
