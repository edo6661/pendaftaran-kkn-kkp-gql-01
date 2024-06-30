import { Role } from "@prisma/client";

export interface SignInInput {
  username: string;
  password: string;
}

export interface SignUpInput {
  username: string;
  email?: string;
  password: string;
  role: Role;
}
