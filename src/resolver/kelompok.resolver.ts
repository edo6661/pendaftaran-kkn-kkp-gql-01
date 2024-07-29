// resolvers/kelompok.ts

import { db } from "@/lib/db";
import { IContext } from "@/types/express";

export const kelompokResolver = {
  Query: {
    kelompoks: async () => {
      const res = await db.kelompok.findMany({
        include: {
          mahasiswa: true,
          proyek: true,
        },
      });
      return res;
    },
    kelompok: async (_parent: any, { id }: { id: string }) => {
      return await db.kelompok.findUnique({
        where: { id },
        include: {
          mahasiswa: true,
          proyek: true,
        },
      });
    },
  },
  Mutation: {
    createKelompok: async (
      _parent: any,
      {
        name,
        proyekId,
        nilai,
        feedback,
      }: { name: string; proyekId: string; nilai?: number; feedback?: string },
      _context: IContext
    ) => {
      return await db.kelompok.create({
        data: {
          name,
          proyekId,
          nilai,
          feedback,
        },
      });
    },
    updateKelompok: async (
      _parent: any,
      {
        id,
        name,
        proyekId,
        nilai,
        feedback,
      }: {
        id: string;
        name?: string;
        proyekId?: string;
        nilai?: number;
        feedback?: string;
      },
      _context: IContext
    ) => {
      return await db.kelompok.update({
        where: { id },
        data: {
          name,
          proyekId,
          nilai,
          feedback,
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
