export const proyekTypedef = `#graphql
  type Proyek {
    id: ID!
    name: String!
    photo: String
    description: String
    batasOrang: Int!
    verified: Boolean!
    lokasi: String!
    tanggalMulai: String!
    tanggalSelesai: String!

    bolehDimulai: Boolean!
    telahSelesai: Boolean!
    kelompok: [Kelompok]
    pembimbing: [Dosen]
    mahasiswa: [Mahasiswa]
    laporans: [Laporan]
    biayaOperasionals: [BiayaOperasional]
    createdAt: String!
    updatedAt: String!
  }
  

  type Query {
    proyeks: [Proyek!]!
    getProyek(id: ID!): Proyek
  }

  type Mutation {
    createProyek(
      name: String!,
      photo: String,
      description: String
      batasOrang: Int!
    ): Proyek

    updateProyek(
      id: ID!,
      name: String,
      photo: String,
      description: String,
      batasOrang: Int
    ): Proyek

    deleteProyek(id: ID!): Proyek
  }
`;
