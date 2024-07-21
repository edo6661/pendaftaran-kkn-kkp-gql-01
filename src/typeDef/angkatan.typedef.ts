export const angkatanTypedef = `#graphql
  type Angkatan {
    id: ID!
    tahun: Int!
    mahasiswa: [Mahasiswa]
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    angkatans: [Angkatan!]!
    angkatan(id: ID!): Angkatan
  }

  type Mutation {
    createAngkatan(tahun: Int!): Angkatan
    updateAngkatan(id: ID!, tahun: Int): Angkatan
    deleteAngkatan(id: ID!): Angkatan
  }
`;
