export const mahasiswaTypedef = `#graphql
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
    laporan: [Laporan!]!
    biayaOperasional: [BiayaOperasional!]!
    persyaratan: Persyaratan
    pendaftaran: Pendaftaran
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    mahasiswas: [Mahasiswa!]!
    mahasiswa(id: ID!): Mahasiswa
  }
  type Mutation {
    createMahasiswa(
      userId: ID!,
      nim: String!,
      fullname: String!,
      semester: Int!,
      prodiId: ID!,
      konsentrasiId: ID!,
      proyekId: ID
    ): Mahasiswa

    updateMahasiswa(
      id: ID!,
      nim: String,
      fullname: String,
      semester: Int,
      prodiId: ID,
      konsentrasiId: ID,
      proyekId: ID
    ): Mahasiswa

    deleteMahasiswa(id: ID!): Mahasiswa
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
  type Konsentrasi {
    id: ID!
    name: String!
    programStudi: ProgramStudi!
    mahasiswa: [Mahasiswa!]
    createdAt: String!
    updatedAt: String!
  }

  type Proyek {
    id: ID!
    name: String!
    photo: String
    pembimbing: Dosen
    description: String!
    mahasiswa: Mahasiswa
    laporans: [Laporan!]
    biayaOperasional: [BiayaOperasional!]
    createdAt: String!
    updatedAt: String!
    }

  type Laporan {
    id: ID!
    photo: String!
    file: String!
    proyek: Proyek!
    mahasiswa: Mahasiswa!
    createdAt: String!
    updatedAt: String!
  }

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

  type Pendaftaran {
    id: ID!
    mahasiswa: Mahasiswa!
    tanggalPendaftaran: String!
    buktiPembayaran: String!
    createdAt: String!
    updatedAt: String!
  }

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
`;
