// resolvers/proyek.ts

import { db } from "@/lib/db";

export const proyekResolver = {
  Query: {
    proyeks: async () => {
      const proyeks = await db.proyek.findMany({
        include: {
          pembimbing: true,
          mahasiswa: true,
          laporan: true,
          biayaOperasional: true,
        },
      });

      return proyeks;
    },
    getProyek: async (_parent: any, { id }: { id: string }) => {
      return await db.proyek.findUnique({
        where: { id },
        include: {
          pembimbing: true,
          mahasiswa: true,
          laporan: true,
          biayaOperasional: true,
        },
      });
    },
  },
  Mutation: {
    createProyek: async (
      _parent: any,
      {
        name,
        photo,
        description,
        batasOrang,
        verified,
        bolehDimulai,
        lokasi,
        tanggalMulai,
        tanggalSelesai,
        telahSelesai,
      }: {
        name: string;
        photo: string;
        description: string;
        batasOrang: number;
        verified?: boolean;
        lokasi?: string;
        tanggalMulai?: string;
        tanggalSelesai?: string;
        bolehDimulai?: boolean;
        telahSelesai?: boolean;
      }
    ) => {
      return await db.proyek.create({
        data: {
          name,
          photo,
          description,
          batasOrang,
          ...(verified && { verified }),
          ...(bolehDimulai && { bolehDimulai }),
          ...(lokasi && { lokasi }),
          ...(tanggalMulai && { tanggalMulai }),
          ...(tanggalSelesai && { tanggalSelesai }),
          ...(telahSelesai && { telahSelesai }),
        },
        include: {
          pembimbing: true,
          mahasiswa: true,
          laporan: true,
          biayaOperasional: true,
        },
      });
    },
    updateProyek: async (
      _parent: any,
      {
        id,
        name,
        photo,
        description,
        batasOrang,
        verified,
        bolehDimulai,
        lokasi,
        tanggalMulai,
        tanggalSelesai,
        telahSelesai,
      }: {
        id: string;
        name?: string;
        photo?: string;
        description?: string;
        batasOrang?: number;
        verified?: boolean;
        lokasi?: string;
        tanggalMulai?: string;
        tanggalSelesai?: string;
        bolehDimulai?: boolean;
        telahSelesai?: boolean;
      }
    ) => {
      return await db.proyek.update({
        where: { id },
        data: {
          name,
          photo,
          description,
          batasOrang,
          ...(verified && { verified }),
          ...(bolehDimulai && { bolehDimulai }),
          ...(lokasi && { lokasi }),
          ...(tanggalMulai && { tanggalMulai }),
          ...(tanggalSelesai && { tanggalSelesai }),
          ...(telahSelesai && { telahSelesai }),
        },
        include: {
          pembimbing: true,
          mahasiswa: true,
          laporan: true,
          biayaOperasional: true,
        },
      });
    },
    deleteProyek: async (_parent: any, { id }: { id: string }) => {
      return await db.proyek.delete({
        where: { id },
        include: {
          pembimbing: true,
          mahasiswa: true,
          laporan: true,
          biayaOperasional: true,
        },
      });
    },
  },
};
