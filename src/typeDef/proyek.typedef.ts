export const proyekTypedef = `#graphql
  type Proyek {
    id: ID!
    name: String!
    photo: String
    pembimbing: Dosen
    description: String
    mahasiswa: [Mahasiswa]
    laporan: [Laporan!]!
    biayaOperasional: [BiayaOperasional!]!
    bolehDimulai: Boolean!
    telahSelesai: Boolean!
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
