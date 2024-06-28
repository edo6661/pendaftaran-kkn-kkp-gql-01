import { db } from "@/lib/db";

export const fakultasResolver = {
  Query: {
    fakultas: async () => {
      return await db.fakultas.findMany();
    },
    getFakultas: async (_parent: any, { id }: { id: string }) => {
      return await db.fakultas.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    createFakultas: async (_parent: any, { name }: { name: string }) => {
      return await db.fakultas.create({
        data: { name },
      });
    },
    updateFakultas: async (
      _parent: any,
      { id, name }: { id: string; name: string }
    ) => {
      return await db.fakultas.update({
        where: { id },
        data: { name },
      });
    },
    deleteFakultas: async (_parent: any, { id }: { id: string }) => {
      return await db.fakultas.delete({
        where: { id },
      });
    },
  },
};
