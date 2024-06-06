import { mergeTypeDefs } from "@graphql-tools/merge";
import { userTypedef } from "./user.typedef";
import { bauTypedef } from "./bau.typedef";

export const mergedTypedef = mergeTypeDefs([userTypedef, bauTypedef]);
