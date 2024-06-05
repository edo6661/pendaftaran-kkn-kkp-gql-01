import { buildSchema } from "graphql";

const schema = buildSchema(`#graphql
  type Query {
    hello: String,
  }
`);
export const root = {
  hello: () => {
    return "Hello World!";
  },
};
export default schema;
