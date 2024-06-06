import { db } from "@/lib/db";
import { IContext } from "@/types/express";

export const bauResolver = {
  Query: {
    baus: async () => {
      return await db.bau.findMany();
    },
    bau: async (_parent: any, { id }: { id: string }) => {
      return await db.bau.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    createBau: async (
      _parent: any,
      { name }: { name: string },
      context: IContext
    ) => {
      if (!context.req.user)
        throw new Error("Unauthorized failed to create bau");
      return await db.bau.create({
        data: {
          name,
        },
      });
    },
    updateBau: async (
      _parent: any,
      { id, name }: { id: string; name: string }
    ) => {
      return await db.bau.update({
        where: { id },
        data: {
          name,
        },
      });
    },
    deleteBau: async (_parent: any, { id }: { id: string }) => {
      return await db.bau.delete({
        where: { id },
      });
    },
  },
};
