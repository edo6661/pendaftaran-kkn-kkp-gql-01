export const kelasTypedef = `#graphql
  type Kelas {
    id: ID!
    name: String!
    mahasiswa: [Mahasiswa!]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    kelass: [Kelas!]!
    kelas(id: ID!): Kelas
  }

  type Mutation {
    createKelas(name: String!): Kelas
    updateKelas(id: ID!, name: String): Kelas
    deleteKelas(id: ID!): Kelas
  }
`;
