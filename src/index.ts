import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { mergedTypedef } from "./typeDef/mergedTypedef";
import { mergedResolvers } from "./resolver/mergedResolvers";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import { PORT } from "./constant/port";
interface IContext {
  token?: string;
}

export const app = express();
const httpServer = http.createServer(app);

(async function startServer() {
  const server = new ApolloServer<IContext>({
    typeDefs: mergedTypedef,
    resolvers: mergedResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  app.use(
    "/",
    cors<cors.CorsRequest>(),
    express.json(),
    cookieParser(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ req }),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000/`);
})();
