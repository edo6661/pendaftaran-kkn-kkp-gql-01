export const pendaftaranTypedef = `#graphql
  type Pendaftaran {
    id: ID!
    mahasiswa: Mahasiswa!
    tanggalPendaftaran: String!
    buktiPembayaran: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    pendaftarans: [Pendaftaran!]!
    getPendaftaran(id: ID!): Pendaftaran
  }

  type Mutation {
    createPendaftaran(
      mahasiswaId: ID!,
      buktiPembayaran: String
    ): Pendaftaran

    updatePendaftaran(
      id: ID!,
      buktiPembayaran: String
    ): Pendaftaran

    deletePendaftaran(id: ID!): Pendaftaran
  }
`;
