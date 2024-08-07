export const programStudiTypedef = `#graphql
  type ProgramStudi {
    id: ID!
    name: String!
    fakultas: Fakultas!
    fakultasId: ID!
    konsentrasi: [Konsentrasi!]!
    mahasiswa: [Mahasiswa!]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    programStudis: [ProgramStudi!]!
    programStudi(id: ID!): ProgramStudi
  }

  type Mutation {
    createProgramStudi(
      name: String!,
      fakultasId: ID!
    ): ProgramStudi

    updateProgramStudi(
      id: ID!,
      name: String,
      fakultasId: ID
    ): ProgramStudi

    deleteProgramStudi(id: ID!): ProgramStudi
  }
  
  type Fakultas {
    id: ID!
    name: String!
    programStudi: [ProgramStudi!]
    createdAt: String!
    updatedAt: String!
  }

  type Konsentrasi {
    id: ID!
    name: String!
    programStudi: ProgramStudi!
    mahasiswa: [Mahasiswa!]
    createdAt: String!
    updatedAt: String!
  }
`;
