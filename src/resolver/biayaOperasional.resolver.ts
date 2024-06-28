// resolvers/biayaOperasional.ts

import { db } from "@/lib/db";

export const biayaOperasionalResolver = {
  Query: {
    biayaOperasionals: async () => {
      return await db.biayaOperasional.findMany();
    },
    getBiayaOperasional: async (_parent: any, { id }: { id: string }) => {
      return await db.biayaOperasional.findUnique({
        where: { id },
        include: {
          proyek: true,
          mahasiswa: true,
        },
      });
    },
  },
  Mutation: {
    createBiayaOperasional: async (
      _parent: any,
      {
        proyekId,
        biayaTransportasi,
        biayaProyek,
        biayaDll,
        mahasiswaId,
      }: {
        proyekId: string;
        biayaTransportasi: number;
        biayaProyek: number;
        biayaDll: number;
        mahasiswaId: string;
      }
    ) => {
      return await db.biayaOperasional.create({
        data: {
          proyekId,
          biayaTransportasi,
          biayaProyek,
          biayaDll,
          mahasiswaId,
        },
        include: {
          proyek: true,
          mahasiswa: true,
        },
      });
    },
    updateBiayaOperasional: async (
      _parent: any,
      {
        id,
        biayaTransportasi,
        biayaProyek,
        biayaDll,
        mahasiswaId,
      }: {
        id: string;
        biayaTransportasi?: number;
        biayaProyek?: number;
        biayaDll?: number;
        mahasiswaId?: string;
      }
    ) => {
      return await db.biayaOperasional.update({
        where: { id },
        data: {
          biayaTransportasi,
          biayaProyek,
          biayaDll,
          mahasiswaId,
        },
        include: {
          proyek: true,
          mahasiswa: true,
        },
      });
    },
    deleteBiayaOperasional: async (_parent: any, { id }: { id: string }) => {
      return await db.biayaOperasional.delete({
        where: { id },
        include: {
          proyek: true,
          mahasiswa: true,
        },
      });
    },
  },
};
