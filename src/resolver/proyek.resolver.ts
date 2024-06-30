// resolvers/proyek.ts

import { db } from "@/lib/db";

export const proyekResolver = {
  Query: {
    proyeks: async () => {
      return await db.proyek.findMany({
        include: {
          pembimbing: true,
          mahasiswa: true,
          laporan: true,
          biayaOperasional: true,
        },
      });
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
      }: {
        name: string;
        photo: string;
        description: string;
        batasOrang: number;
      }
    ) => {
      return await db.proyek.create({
        data: {
          name,
          photo,
          description,
          batasOrang,
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
      }: {
        id: string;
        name?: string;
        photo?: string;
        description?: string;
        batasOrang?: number;
      }
    ) => {
      return await db.proyek.update({
        where: { id },
        data: {
          name,
          photo,
          description,
          batasOrang,
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
