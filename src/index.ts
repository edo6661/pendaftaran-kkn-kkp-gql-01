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
import passport from "passport";
import session, { MemoryStore } from "express-session";
import { buildContext } from "graphql-passport";
import { configurePassport } from "./lib/passport";

interface IContext {
  req: express.Request;
  res: express.Response;
  token?: string;
}
configurePassport();

export const app = express();
const httpServer = http.createServer(app);

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false, // save session on every request
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      httpOnly: true, // prevent client side js from reading the cookie (XSS attack)
    },
    store: new MemoryStore({
      captureRejections: true,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

//
(async function startServer() {
  const server = new ApolloServer<IContext>({
    typeDefs: mergedTypedef,
    resolvers: mergedResolvers as any,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  app.use(
    "/",
    cors<cors.CorsRequest>({
      credentials: true,
    }),
    express.json(),
    cookieParser(),
    // @ts-ignore
    expressMiddleware(server, {
      context: async ({ req, res }) => buildContext({ req, res }),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000/`);
})();
