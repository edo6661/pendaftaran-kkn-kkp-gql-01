// includes.ts

export const includeMahasiswa = {
  user: true,
  prodi: true,
  konsentrasi: true,
  proyek: true,
  laporans: true,
  biayaOperasionals: true,
  persyaratan: true,
  pendaftaran: true,
  kelompok: {
    include: {
      mahasiswa: true,
    },
  },
  angkatan: true,
  kelas: true,
};
