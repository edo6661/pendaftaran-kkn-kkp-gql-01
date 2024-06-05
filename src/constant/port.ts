export const PORT = process.env.PORT || 3500;
if (PORT) {
  throw new Error("PORT is not defined");
}
