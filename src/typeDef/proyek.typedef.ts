export const proyekTypedef = `#graphql
  type Proyek {
    id: ID!
    name: String!
    photo: String
    description: String
    batasOrang: Int!
    verified: Boolean!
    lokasi: String!
    tanggalMulai: Date!
    tanggalSelesai: Date!
    type: TypeProyek!
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

  enum TypeProyek {
    KKN
    KKP
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
      verified: Boolean
      bolehDimulai: Boolean
      lokasi: String
      tanggalMulai: Date
      tanggalSelesai: Date
      telahSelesai: Boolean
      type: TypeProyek

    ): Proyek

    updateProyek(
      id: ID!,
      name: String,
      photo: String,
      description: String,
      batasOrang: Int
      verified: Boolean
      bolehDimulai: Boolean
      lokasi: String
      tanggalMulai: Date
      tanggalSelesai: Date
      telahSelesai: Boolean
      type: TypeProyek

    ): Proyek

    deleteProyek(id: ID!): Proyek
  }
`;
