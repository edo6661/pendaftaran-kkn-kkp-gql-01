import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} from "graphql";
import { db } from "@/lib/db";

const bauType = new GraphQLObjectType({
  name: "Bau",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

export const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    baus: {
      type: new GraphQLList(bauType),
      async resolve(_parent, _args) {
        return await db.bau.findMany();
      },
    },
    bau: {
      type: bauType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return db.bau.findUnique({
          where: { id: args.id },
        });
      },
    },
  },
});

export default new GraphQLSchema({
  query: rootQuery,
});
