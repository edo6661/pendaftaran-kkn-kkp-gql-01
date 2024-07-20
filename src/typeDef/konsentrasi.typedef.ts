export const konsentrasiTypedef = `#graphql
  type Konsentrasi {
    id: ID!
    name: String!
    programStudi: ProgramStudi!
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
    ): Konsentrasi

    updateKonsentrasi(
      id: ID!,
      name: String,
    ): Konsentrasi

    deleteKonsentrasi(id: ID!): Konsentrasi
  }
  type Mahasiswa {
    id: ID!
    user: User!
    userId: ID!
    nim: String!
    fullname: String!
    semester: Int!
    prodi: ProgramStudi!
    konsentrasi: Konsentrasi!
    proyek: Proyek
    laporans: [Laporan!]!
    biayaOperasionals: [BiayaOperasional!]!
    persyaratan: Persyaratan
    pendaftaran: Pendaftaran
    createdAt: String!
    updatedAt: String!
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
