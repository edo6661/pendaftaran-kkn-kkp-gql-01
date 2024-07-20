import { db } from "@/lib/db";

export const konsentrasiResolver = {
  Query: {
    konsentrasis: async () => {
      return await db.konsentrasi.findMany();
    },
    getKonsentrasi: async (_parent: any, { id }: { id: string }) => {
      return await db.konsentrasi.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    createKonsentrasi: async (
      _parent: any,
      { name }: { name: string; programStudiId: string }
    ) => {
      return await db.konsentrasi.create({
        data: {
          name,
        },
      });
    },
    updateKonsentrasi: async (
      _parent: any,
      { id, name }: { id: string; name?: string; programStudiId?: string }
    ) => {
      return await db.konsentrasi.update({
        where: { id },
        data: {
          name,
        },
      });
    },
    deleteKonsentrasi: async (_parent: any, { id }: { id: string }) => {
      return await db.konsentrasi.delete({
        where: { id },
      });
    },
  },
};
