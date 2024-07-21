// resolvers/kelompok.ts

import { db } from "@/lib/db";
import { IContext } from "@/types/express";

export const kelompokResolver = {
  Query: {
    kelompoks: async () => {
      return await db.kelompok.findMany({
        include: {
          mahasiswa: true,
          proyek: true,
        },
      });
    },
    kelompok: async (_parent: any, { id }: { id: string }) => {
      return await db.kelompok.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    createKelompok: async (
      _parent: any,
      { name, proyekId }: { name: string; proyekId: string },
      _context: IContext
    ) => {
      return await db.kelompok.create({
        data: {
          name,
          proyekId,
        },
      });
    },
    updateKelompok: async (
      _parent: any,
      { id, name, proyekId }: { id: string; name?: string; proyekId?: string },
      _context: IContext
    ) => {
      return await db.kelompok.update({
        where: { id },
        data: {
          name,
          proyekId,
        },
      });
    },
    deleteKelompok: async (_parent: any, { id }: { id: string }) => {
      return await db.kelompok.delete({
        where: { id },
      });
    },
  },
};
