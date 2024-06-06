export const bauTypedef = `#graphql
  type Bau {
    id: ID!
    name: String!
  }
  type Query {
    baus: [Bau!]
    bau(id: ID!): Bau
  }
  type Mutation {
    createBau(name: String!): Bau
    updateBau(id: ID!, name: String!): Bau
    deleteBau(id: ID!): Bau
  }
`;
