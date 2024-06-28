// resolvers/persyaratan.ts

import { db } from "@/lib/db";

export const persyaratanResolver = {
  Query: {
    persyaratans: async () => {
      return await db.persyaratan.findMany();
    },
    getPersyaratan: async (_parent: any, { id }: { id: string }) => {
      return await db.persyaratan.findUnique({
        where: { id },
        include: {
          mahasiswa: true,
        },
      });
    },
  },
  Mutation: {
    createPersyaratan: async (
      _parent: any,
      {
        keteranganSehat,
        keteranganPembayaran,
        keteranganOrangTua,
        keteranganKelakuanBaik,
        mahasiswaId,
      }: {
        keteranganSehat: boolean;
        keteranganPembayaran: boolean;
        keteranganOrangTua: boolean;
        keteranganKelakuanBaik: boolean;
        mahasiswaId: string;
      }
    ) => {
      return await db.persyaratan.create({
        data: {
          keteranganSehat,
          keteranganPembayaran,
          keteranganOrangTua,
          keteranganKelakuanBaik,
          mahasiswaId,
        },
        include: {
          mahasiswa: true,
        },
      });
    },
    updatePersyaratan: async (
      _parent: any,
      {
        id,
        keteranganSehat,
        keteranganPembayaran,
        keteranganOrangTua,
        keteranganKelakuanBaik,
        mahasiswaId,
      }: {
        id: string;
        keteranganSehat?: boolean;
        keteranganPembayaran?: boolean;
        keteranganOrangTua?: boolean;
        keteranganKelakuanBaik?: boolean;
        mahasiswaId?: string;
      }
    ) => {
      return await db.persyaratan.update({
        where: { id },
        data: {
          keteranganSehat,
          keteranganPembayaran,
          keteranganOrangTua,
          keteranganKelakuanBaik,
          mahasiswaId,
        },
        include: {
          mahasiswa: true,
        },
      });
    },
    deletePersyaratan: async (_parent: any, { id }: { id: string }) => {
      return await db.persyaratan.delete({
        where: { id },
        include: {
          mahasiswa: true,
        },
      });
    },
  },
};
