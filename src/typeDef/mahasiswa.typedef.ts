export const mahasiswaTypedef = `#graphql
  type Mahasiswa {
    id: ID!
    nim: String!
    fullname: String!
    semester: Int!
    role: RoleMahasiswa

    proyekId: ID
    prodiId: ID
    kelasId: ID
    angkatanId: ID
    kelompokId: ID
    konsentrasiId: ID
    userId: ID!
    
    user: User
    kelompok: Kelompok
    kelas: Kelas
    angkatan: Angkatan
    prodi: ProgramStudi
    konsentrasi: Konsentrasi
    proyek: Proyek
    laporans: [Laporan!]
    biayaOperasionals: [BiayaOperasional!]
    persyaratan: Persyaratan
    pendaftaran: Pendaftaran
    createdAt: String!
    updatedAt: String!
  }
  enum RoleMahasiswa {
    KETUA
    ANGGOTA
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
      prodiId: ID,
      konsentrasiId: ID,
      kelasId: ID,
      kelompokId: ID,
      proyekId: ID,
      angkatanId: ID,
      role: RoleMahasiswa
    ): Mahasiswa

    updateMahasiswa(
      id: ID!,
      userId: ID!,
      nim: String,
      fullname: String,
      semester: Int,
      prodiId: ID,
      konsentrasiId: ID,
      kelasId: ID,
      kelompokId: ID,
      proyekId: ID,
      angkatanId: ID,
      role: RoleMahasiswa
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
