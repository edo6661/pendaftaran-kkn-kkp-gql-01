export const userIncludeConfig = {
  admin: true,
  mahasiswa: {
    include: {
      prodi: true,
      konsentrasi: true,
      proyek: true,
      laporans: true,
      biayaOperasionals: true,
      persyaratan: true,
      pendaftaran: true,
      kelompok: true,
      kelas: true,
      angkatan: true,
    },
  },
  dosen: {
    include: {
      proyek: true,
    },
  },
};
