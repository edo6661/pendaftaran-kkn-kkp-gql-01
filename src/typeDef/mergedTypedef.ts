import { readFileSync } from "fs";
import { mergeTypeDefs } from "@graphql-tools/merge";

const userTypeDef = readFileSync("./src/schema/user.schema.graphql", "utf-8");
const bauTypeDef = readFileSync("./src/schema/bau.schema.graphql", "utf-8");

export const mergedTypedef = mergeTypeDefs([userTypeDef, bauTypeDef]);
