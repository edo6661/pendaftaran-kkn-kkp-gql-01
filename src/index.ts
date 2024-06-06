import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { mergedTypedef } from "./typeDef/mergedTypedef";
import { mergedResolvers } from "./resolver/mergedResolvers";
import { PORT } from "./constant/port";

interface IContext {
  token?: string;
}

const app = express();
app.use(cors());
app.use(cookieParser());

const server = new ApolloServer<IContext>({
  typeDefs: mergedTypedef,
  resolvers: mergedResolvers,
});

(async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: {
      port: PORT,
    },
    context: async ({ req }) => ({ token: req.headers.token }),
  });
  console.log(`🚀 Server ready at ${url}`);
})();
