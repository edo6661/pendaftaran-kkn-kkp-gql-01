// resolvers/kelas.ts

import { db } from "@/lib/db";
import { IContext } from "@/types/express";

export const kelasResolver = {
  Query: {
    kelass: async () => {
      return await db.kelas.findMany({
        include: {
          mahasiswa: true,
        },
      });
    },
    kelas: async (_parent: any, { id }: { id: string }) => {
      return await db.kelas.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    createKelas: async (
      _parent: any,
      { name }: { name: string },
      _context: IContext
    ) => {
      return await db.kelas.create({
        data: {
          name,
        },
      });
    },
    updateKelas: async (
      _parent: any,
      { id, name }: { id: string; name?: string },
      _context: IContext
    ) => {
      return await db.kelas.update({
        where: { id },
        data: {
          name,
        },
      });
    },
    deleteKelas: async (_parent: any, { id }: { id: string }) => {
      return await db.kelas.delete({
        where: { id },
      });
    },
  },
};
