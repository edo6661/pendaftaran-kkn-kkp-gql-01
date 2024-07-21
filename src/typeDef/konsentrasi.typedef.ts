export const konsentrasiTypedef = `#graphql
  type Konsentrasi {
    id: ID!
    name: String!
    programStudi: ProgramStudi!
    programStudiId: ID
    mahasiswa: [Mahasiswa!]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    konsentrasis: [Konsentrasi!]!
    getKonsentrasi(id: ID!): Konsentrasi
  }

  type Mutation {
    createKonsentrasi(
      name: String!,
      programStudiId: ID
    ): Konsentrasi

    updateKonsentrasi(
      id: ID!,
      name: String,
      programStudiId: ID
    ): Konsentrasi

    deleteKonsentrasi(id: ID!): Konsentrasi
  }
  
  type ProgramStudi {
    id: ID!
    name: String!
    fakultas: Fakultas!
    konsentrasi: [Konsentrasi!]
    mahasiswa: [Mahasiswa!]
    createdAt: String!
    updatedAt: String!
  }
`;
