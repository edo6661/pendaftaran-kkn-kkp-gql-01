// resolvers/dosen.ts

import { db } from "@/lib/db";

export const dosenResolver = {
  Query: {
    dosens: async () => {
      return await db.dosen.findMany({
        include: { user: true },
      });
    },
    getDosen: async (_parent: any, { id }: { id: string }) => {
      return await db.dosen.findUnique({
        where: { id },
        include: { user: true },
      });
    },
  },
  Mutation: {
    createDosen: async (
      _parent: any,
      {
        fullname,
        nidn,
        userId,
      }: // proyekId,
      {
        fullname: string;
        nidn: string;
        userId: string;
        // proyekId?: string
      }
    ) => {
      // TODO: Remove this line
      if (!fullname || !nidn || !userId)
        throw new Error("Please provide fullname, nidn, and userId");
      try {
        return await db.dosen.create({
          data: {
            fullname,
            nidn,
            userId,
            // ...(proyekId && { proyekId }),
          },
          include: { user: true },
        });
      } catch (err) {
        console.error(err);
      }
    },
    updateDosen: async (
      _parent: any,
      {
        id,
        fullname,
        nidn,
        userId,
        proyekId,
      }: {
        id: string;
        fullname?: string;
        nidn?: string;
        userId?: string;
        proyekId?: string;
      }
    ) => {
      return await db.dosen.update({
        where: { id },
        data: {
          fullname,
          nidn,
          userId,
          proyekId,
        },
        include: { user: true },
      });
    },
    deleteDosen: async (_parent: any, { id }: { id: string }) => {
      return await db.dosen.delete({
        where: { id },
        include: { user: true },
      });
    },
  },
};
