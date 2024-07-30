import { db } from "@/lib/db";

export const laporanResolver = {
  Query: {
    laporans: async () => {
      return await db.laporan.findMany();
    },
    getLaporan: async (_parent: any, { id }: { id: string }) => {
      return await db.laporan.findUnique({
        where: { id },
        include: {
          proyek: true,
          mahasiswa: true,
        },
      });
    },
    getLaporanByProyekId: async (
      _parent: any,
      { proyekId }: { proyekId: string }
    ) => {
      return await db.laporan.findMany({
        where: { proyekId },
        include: {
          proyek: true,
          mahasiswa: true,
        },
      });
    },
  },
  Mutation: {
    createLaporan: async (
      _parent: any,
      {
        photo,
        file,
        proyekId,
        mahasiswaId,
      }: {
        photo: string;
        file: string;
        proyekId: string;
        mahasiswaId: string;
      }
    ) => {
      return await db.laporan.create({
        data: {
          photo,
          file,
          proyekId,
          mahasiswaId,
        },
        include: {
          proyek: true,
          mahasiswa: true,
        },
      });
    },
    updateLaporan: async (
      _parent: any,
      {
        id,
        photo,
        file,
        proyekId,
        mahasiswaId,
      }: {
        id: string;
        photo?: string;
        file?: string;
        proyekId?: string;
        mahasiswaId?: string;
      }
    ) => {
      return await db.laporan.update({
        where: { id },
        data: {
          photo,
          file,
          proyekId,
          mahasiswaId,
        },
        include: {
          proyek: true,
          mahasiswa: true,
        },
      });
    },
    deleteLaporan: async (_parent: any, { id }: { id: string }) => {
      return await db.laporan.delete({
        where: { id },
        include: {
          proyek: true,
          mahasiswa: true,
        },
      });
    },
  },
};
