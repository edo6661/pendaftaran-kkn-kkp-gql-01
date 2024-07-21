// resolvers/angkatan.ts

import { db } from "@/lib/db";
import { IContext } from "@/types/express";

export const angkatanResolver = {
  Query: {
    angkatans: async () => {
      return await db.angkatan.findMany({
        include: {
          mahasiswa: true,
        },
      });
    },
    angkatan: async (_parent: any, { id }: { id: string }) => {
      return await db.angkatan.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    createAngkatan: async (
      _parent: any,
      { tahun }: { tahun: number },
      _context: IContext
    ) => {
      return await db.angkatan.create({
        data: {
          tahun,
        },
      });
    },
    updateAngkatan: async (
      _parent: any,
      { id, tahun }: { id: string; tahun?: number },
      _context: IContext
    ) => {
      return await db.angkatan.update({
        where: { id },
        data: {
          tahun,
        },
      });
    },
    deleteAngkatan: async (_parent: any, { id }: { id: string }) => {
      return await db.angkatan.delete({
        where: { id },
      });
    },
  },
};
