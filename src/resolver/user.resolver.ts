import { db } from "@/lib/db";

export const userResolver = {
  Query: {
    users: async () => {
      return await db.user.findMany();
    },
    user: async (_parent: any, { id }: { id: string }) => {
      return await db.user.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {},
};
