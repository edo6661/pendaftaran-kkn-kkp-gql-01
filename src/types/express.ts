import { Request as ExpressRequest } from "express";
import { PassportSubscriptionContext, PassportContext } from "graphql-passport";
import { User } from "@prisma/client";

export interface IContext extends PassportContext<User, ExpressRequest> {}

export interface IProjectSubscriptionContext
  extends PassportSubscriptionContext<User, ExpressRequest> {}
