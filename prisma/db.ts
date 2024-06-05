import { PrismaClient } from "@prisma/client/extension";
import dotenv from "dotenv";
dotenv.config();

declare global {
  var prisma: PrismaClient | undefined;
}

const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") globalThis.prisma = db;

export default db;
