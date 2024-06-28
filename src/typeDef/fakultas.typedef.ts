export const fakultasTypedef = `#graphql
  type Fakultas {
    id: ID!
    name: String!
    programStudi: [ProgramStudi!]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    fakultas: [Fakultas!]!
    getFakultas(id: ID!): Fakultas
  }

  type Mutation {
    createFakultas(name: String!): Fakultas
    updateFakultas(id: ID!, name: String!): Fakultas
    deleteFakultas(id: ID!): Fakultas
  }
  type ProgramStudi {
    id: ID!
    name: String!
    fakultas: Fakultas!
    konsentrasi: [Konsentrasi!]!
    mahasiswa: [Mahasiswa!]!
    createdAt: String!
    updatedAt: String!
  }
`;
