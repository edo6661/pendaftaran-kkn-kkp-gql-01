export const persyaratanTypedef = `#graphql
  type Persyaratan {
    id: ID!
    keteranganSehat: Boolean!
    keteranganPembayaran: Boolean!
    keteranganOrangTua: Boolean!
    keteranganKelakuanBaik: Boolean!
    mahasiswa: Mahasiswa!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    persyaratans: [Persyaratan!]!
    getPersyaratan(id: ID!): Persyaratan
  }

  type Mutation {
    createPersyaratan(
      keteranganSehat: Boolean!,
      keteranganPembayaran: Boolean!,
      keteranganOrangTua: Boolean!,
      keteranganKelakuanBaik: Boolean!,
      mahasiswaId: ID!
    ): Persyaratan

    updatePersyaratan(
      id: ID!,
      keteranganSehat: Boolean,
      keteranganPembayaran: Boolean,
      keteranganOrangTua: Boolean,
      keteranganKelakuanBaik: Boolean,
      mahasiswaId: ID
    ): Persyaratan

    deletePersyaratan(id: ID!): Persyaratan
  }
`;
