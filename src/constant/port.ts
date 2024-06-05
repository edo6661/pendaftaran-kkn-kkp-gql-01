import dotenv from "dotenv";
dotenv.config();
if (dotenv.config().error) {
  throw dotenv.config().error;
}

export const PORT = process.env.PORT || 3500;
