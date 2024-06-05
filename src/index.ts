// import dotenv from "dotenv";
// dotenv.config();
// if (dotenv.config().error) {
//   throw dotenv.config().error;
// }
import express from "express";
import cors from "cors";
import { PORT } from "./constant/port";
import { createHandler } from "graphql-http/lib/use/express";
import schema, { root } from "./schema/schema";
const ruru = require("ruru/server");
const { ruruHTML } = ruru;
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.type("html");
  res.end(
    ruruHTML({
      endpoint: "/graphql",
    })
  );
});
app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue: root,
  })
);

app.listen(PORT, () => {
  console.log(
    "Server is running on http://localhost:" +
      PORT +
      " NODE_ENV " +
      "development"
  );
});
