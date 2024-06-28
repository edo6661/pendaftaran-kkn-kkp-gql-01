// resolvers/pendaftaran.ts

import { db } from "@/lib/db";

export const pendaftaranResolver = {
  Query: {
    pendaftarans: async () => {
      return await db.pendaftaran.findMany();
    },
    getPendaftaran: async (_parent: any, { id }: { id: string }) => {
      return await db.pendaftaran.findUnique({
        where: { id },
        include: {
          mahasiswa: true,
        },
      });
    },
  },
  Mutation: {
    createPendaftaran: async (
      _parent: any,
      {
        mahasiswaId,
        buktiPembayaran,
      }: { mahasiswaId: string; buktiPembayaran: string }
    ) => {
      return await db.pendaftaran.create({
        data: {
          mahasiswaId,
          buktiPembayaran,
        },
        include: {
          mahasiswa: true,
        },
      });
    },
    updatePendaftaran: async (
      _parent: any,
      { id, buktiPembayaran }: { id: string; buktiPembayaran?: string }
    ) => {
      return await db.pendaftaran.update({
        where: { id },
        data: {
          buktiPembayaran,
        },
        include: {
          mahasiswa: true,
        },
      });
    },
    deletePendaftaran: async (_parent: any, { id }: { id: string }) => {
      return await db.pendaftaran.delete({
        where: { id },
        include: {
          mahasiswa: true,
        },
      });
    },
  },
};
