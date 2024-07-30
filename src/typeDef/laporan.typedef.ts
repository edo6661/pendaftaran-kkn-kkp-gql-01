export const laporanTypedef = `#graphql
  type Laporan {
    id: ID!
    photo: String
    file: String
    proyekId: ID!
    proyek: Proyek
    mahasiswaId: ID!
    mahasiswa: Mahasiswa
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    laporans: [Laporan!]!
    getLaporan(id: ID!): Laporan
    getLaporanByProyekId(proyekId: ID!): [Laporan!]!
    
  }

  type Mutation {
    createLaporan(
      photo: String,
      file: String,
      proyekId: ID!,
      mahasiswaId: ID!,
    ): Laporan

    updateLaporan(
      id: ID!,
      photo: String,
      file: String,
      proyekId: ID,
      mahasiswaId: ID
    ): Laporan

    deleteLaporan(id: ID!): Laporan
  }
`;
