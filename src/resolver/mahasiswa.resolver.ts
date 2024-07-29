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
      try {
        const nimExist = await db.mahasiswa.findFirst({
          where: { nim: args.nim },
        });
        if (nimExist) {
          throw new Error("NIM already exists");
        }
        const existingUser = await db.user.findUnique({
          where: { id: args.userId },
        });
        if (!existingUser) {
          throw new Error("User not found");
        }

        if (args.prodiId) {
          const existingProdi = await db.programStudi.findUnique({
            where: { id: args.prodiId },
          });
          if (!existingProdi) {
            throw new Error("Program Studi not found");
          }
        }
        if (args.konsentrasiId) {
          const existingKonsentrasi = await db.konsentrasi.findUnique({
            where: { id: args.konsentrasiId },
          });
          if (!existingKonsentrasi) {
            throw new Error("Konsentrasi not found");
          }
        }

        if (args.proyekId) {
          const existingProyek = await db.proyek.findUnique({
            where: { id: args.proyekId },
          });
          if (!existingProyek) {
            throw new Error("Proyek not found");
          }
        }

        const newMahasiswa = await db.mahasiswa.create({
          data: {
            userId: args.userId,
            nim: args.nim,
            fullname: args.fullname,
            semester: args.semester,
            prodiId: args.prodiId,
            konsentrasiId: args.konsentrasiId,
            proyekId: args.proyekId || null,
            kelasId: args.kelasId || null,
            angkatanId: args.angkatanId || null,
            kelompokId: args.kelompokId || null,
            role: args.role,
          },
          include: includeMahasiswa,
        });

        return newMahasiswa;
      } catch (err) {
        console.error("Error occurred during createMahasiswa:", err);
        throw err;
      }
    },
    updateMahasiswa: async (_parent: any, args: UpdateMahasiswaArgs) => {
      const { id, ...data } = args;
      try {
        if (args.prodiId) {
          const existingProdi = await db.programStudi.findUnique({
            where: { id: args.prodiId },
          });
          if (!existingProdi) {
            throw new Error("Program Studi not found");
          }
        }

        if (args.konsentrasiId) {
          const existingKonsentrasi = await db.konsentrasi.findUnique({
            where: { id: args.konsentrasiId },
          });
          if (!existingKonsentrasi) {
            throw new Error("Konsentrasi not found");
          }
        }
        if (args.proyekId) {
          const existingProyek = await db.proyek.findUnique({
            where: { id: args.proyekId },
          });
          if (!existingProyek) {
            throw new Error("Proyek not found");
          }
        }
        return await db.mahasiswa.update({
          where: { id },
          data,
          include: includeMahasiswa,
        });
      } catch (err) {
        console.error("Error occurred during updateMahasiswa:", err);
        throw err;
      }
    },
    deleteMahasiswa: async (_parent: any, { id }: { id: string }) => {
      return await db.mahasiswa.delete({
        where: { id },
      });
    },
  },
};
