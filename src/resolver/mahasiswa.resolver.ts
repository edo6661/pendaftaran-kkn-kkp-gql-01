// resolvers/mahasiswa.ts

import { includeMahasiswa } from "@/config/mahasiswa.config";
import { db } from "@/lib/db";
import { IContext } from "@/types/express";
import { CreateMahasiswaArgs, UpdateMahasiswaArgs } from "@/types/mahasiswa";

export const mahasiswaResolver = {
  Query: {
    mahasiswas: async (_parent: any, _args: any, _context: IContext) => {
      // if (!_context.req.user)
      //   throw new Error("Unauthorized: failed to get mahasiswas");
      return await db.mahasiswa.findMany({ include: includeMahasiswa });
    },
    mahasiswa: async (_parent: any, { id }: { id: string }) => {
      return await db.mahasiswa.findUnique({
        where: { id },
        include: includeMahasiswa,
      });
    },
  },
  Mutation: {
    createMahasiswa: async (
      _parent: any,
      args: CreateMahasiswaArgs,
      context: IContext
    ) => {
      if (!context.req.user)
        throw new Error("Unauthorized: failed to create mahasiswa");
      return await db.mahasiswa.create({
        data: { ...args },
      });
    },
    updateMahasiswa: async (_parent: any, args: UpdateMahasiswaArgs) => {
      const { id, ...data } = args;
      return await db.mahasiswa.update({
        where: { id },
        data,
        include: includeMahasiswa,
      });
    },
    deleteMahasiswa: async (_parent: any, { id }: { id: string }) => {
      return await db.mahasiswa.delete({
        where: { id },
      });
    },
  },
};
