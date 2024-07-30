// resolvers/proyek.ts

import { db } from "@/lib/db";
import { parseDate } from "@/utils";
import { TypeProyek } from "@prisma/client";

export const proyekResolver = {
  Query: {
    proyeks: async () => {
      const proyeks = await db.proyek.findMany({
        include: {
          pembimbing: true,
          mahasiswa: true,
          laporan: true,
          biayaOperasional: true,
          kelompok: {
            include: {
              mahasiswa: true,
            },
          },
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
          kelompok: {
            include: {
              mahasiswa: true,
            },
          },
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
        type,
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
        type?: TypeProyek;
      }
    ) => {
      const tanggalMulaiDate = parseDate(tanggalMulai);
      const tanggalSelesaiDate = parseDate(tanggalSelesai);

      return await db.proyek.create({
        data: {
          name,
          photo,
          description,
          batasOrang,
          type,
          ...(verified && { verified }),
          ...(bolehDimulai && { bolehDimulai }),
          ...(lokasi && { lokasi }),
          ...(tanggalMulaiDate && { tanggalMulai: tanggalMulaiDate }),
          ...(tanggalSelesaiDate && { tanggalSelesai: tanggalSelesaiDate }),
          ...(telahSelesai && { telahSelesai }),
        },
        include: {
          pembimbing: true,
          mahasiswa: true,
          laporan: true,
          biayaOperasional: true,
          kelompok: true,
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
        type,
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
        type?: TypeProyek;
      }
    ) => {
      const tanggalMulaiDate = tanggalMulai ? new Date(tanggalMulai) : null;
      const tanggalSelesaiDate = tanggalSelesai
        ? new Date(tanggalSelesai)
        : null;

      return await db.proyek.update({
        where: { id },
        data: {
          name,
          photo,
          description,
          batasOrang,
          type,
          verified,
          bolehDimulai,
          telahSelesai,
          ...(lokasi && { lokasi }),
          ...(tanggalMulaiDate && { tanggalMulai: tanggalMulaiDate }),
          ...(tanggalSelesaiDate && { tanggalSelesai: tanggalSelesaiDate }),
        },
        include: {
          pembimbing: true,
          mahasiswa: true,
          laporan: true,
          biayaOperasional: true,
          kelompok: true,
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
          kelompok: true,
        },
      });
    },
  },
};
