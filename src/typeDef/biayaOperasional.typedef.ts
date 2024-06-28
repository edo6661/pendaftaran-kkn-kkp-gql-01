export const biayaOperasionalTypedef = `#graphql
  type BiayaOperasional {
    id: ID!
    proyek: Proyek!
    biayaTransportasi: Int!
    biayaProyek: Int!
    biayaDll: Int!
    tanggalBiaya: String!
    mahasiswa: Mahasiswa!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    biayaOperasionals: [BiayaOperasional!]!
    getBiayaOperasional(id: ID!): BiayaOperasional
  }

  type Mutation {
    createBiayaOperasional(
      proyekId: ID!,
      biayaTransportasi: Int!,
      biayaProyek: Int!,
      biayaDll: Int!,
      mahasiswaId: ID!
    ): BiayaOperasional

    updateBiayaOperasional(
      id: ID!,
      biayaTransportasi: Int,
      biayaProyek: Int,
      biayaDll: Int,
      mahasiswaId: ID
    ): BiayaOperasional

    deleteBiayaOperasional(id: ID!): BiayaOperasional
  }
`;
