export const kelompokTypedef = `#graphql
  type Kelompok {
    id: ID!
    name: String!
    nilai: Int
    feedback: String
    mahasiswa: [Mahasiswa]
    proyek: Proyek
    proyekId: ID
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    kelompoks: [Kelompok!]!
    kelompok(id: ID!): Kelompok
  }

  type Mutation {
    createKelompok(name: String!, proyekId: ID): Kelompok
    updateKelompok(id: ID!, name: String, proyekId: ID): Kelompok
    deleteKelompok(id: ID!): Kelompok
  }
`;
