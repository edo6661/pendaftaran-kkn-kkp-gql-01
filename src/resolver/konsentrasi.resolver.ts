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
      { name, programStudiId }: { name: string; programStudiId?: string }
    ) => {
      return await db.konsentrasi.create({
        data: {
          name,
          ...(programStudiId && { programStudiId }),
        },
      });
    },
    updateKonsentrasi: async (
      _parent: any,
      {
        id,
        name,
        programStudiId,
      }: { id: string; name?: string; programStudiId?: string }
    ) => {
      return await db.konsentrasi.update({
        where: { id },
        data: {
          name,
          ...(programStudiId && { programStudiId }),
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
