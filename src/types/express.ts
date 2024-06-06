import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";
import { PassportSubscriptionContext, PassportContext } from "graphql-passport";
import { User } from "@prisma/client";

export interface IContext
  extends PassportContext<User, { req: ExpressRequest; res: ExpressResponse }> {
  req: ExpressRequest;
  res: ExpressResponse;
}

export interface IProjectSubscriptionContext
  extends PassportSubscriptionContext<User, ExpressRequest> {}
