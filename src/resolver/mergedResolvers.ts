import { mergeResolvers } from "@graphql-tools/merge";
import { userResolver } from "./user.resolver";
import { bauResolver } from "./bau.resolver";

export const mergedResolvers = mergeResolvers([userResolver, bauResolver]);
