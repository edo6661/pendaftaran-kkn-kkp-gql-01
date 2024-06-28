// resolvers/programStudi.ts

import { db } from "@/lib/db";
import { IContext } from "@/types/express";

export const programStudiResolver = {
  Query: {
    programStudis: async () => {
      return await db.programStudi.findMany();
    },
    programStudi: async (_parent: any, { id }: { id: string }) => {
      return await db.programStudi.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    createProgramStudi: async (
      _parent: any,
      { name, fakultasId }: { name: string; fakultasId: string },
      _context: IContext
    ) => {
      return await db.programStudi.create({
        data: {
          name,
          fakultasId,
        },
      });
    },
    updateProgramStudi: async (
      _parent: any,
      {
        id,
        name,
        fakultasId,
      }: { id: string; name?: string; fakultasId?: string }
    ) => {
      return await db.programStudi.update({
        where: { id },
        data: {
          name,
          fakultasId,
        },
      });
    },
    deleteProgramStudi: async (_parent: any, { id }: { id: string }) => {
      return await db.programStudi.delete({
        where: { id },
      });
    },
  },
};
