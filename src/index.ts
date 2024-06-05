import express from "express";
import cors from "cors";
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
