// resolvers/mahasiswa.ts

import { includeMahasiswa } from "@/config/mahasiswa.config";
import { db } from "@/lib/db";
import { IContext } from "@/types/express";
import { CreateMahasiswaArgs, UpdateMahasiswaArgs } from "@/types/mahasiswa";

export const mahasiswaResolver = {
  Query: {
    mahasiswas: async (_parent: any, _args: any, _context: IContext) => {
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
    createMahasiswa: async (_parent: any, args: CreateMahasiswaArgs) => {
      // if (!context.req.user)
      // throw new Error("Unauthorized: failed to create mahasiswa");
      try {
        // Pastikan userId yang diterima benar-benar ada
        const existingUser = await db.user.findUnique({
          where: { id: args.userId },
        });

        if (!existingUser) {
          throw new Error("User not found");
        }

        // Pastikan prodiId yang diterima benar-benar ada
        const existingProdi = await db.programStudi.findUnique({
          where: { id: args.prodiId },
        });

        if (!existingProdi) {
          throw new Error("Program Studi not found");
        }

        // Pastikan konsentrasiId yang diterima benar-benar ada
        const existingKonsentrasi = await db.konsentrasi.findUnique({
          where: { id: args.konsentrasiId },
        });

        if (!existingKonsentrasi) {
          throw new Error("Konsentrasi not found");
        }

        // Sekarang kita bisa membuat mahasiswa baru
        const newMahasiswa = await db.mahasiswa.create({
          data: {
            userId: args.userId,
            nim: args.nim,
            fullname: args.fullname,
            semester: args.semester,
            prodiId: args.prodiId,
            konsentrasiId: args.konsentrasiId,
            proyekId: args.proyekId,
          },
        });

        return newMahasiswa;
      } catch (err) {
        console.error("Error occurred:", err);
        throw new Error("Failed to create Mahasiswa");
      }
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
