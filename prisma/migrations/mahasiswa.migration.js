const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Data Mahasiswa dengan ID User, Konsentrasi, dan Program Studi yang sudah ada
  const mahasiswaData = [
    {
      userId: "clxym0pb900013hyuhns4ffrk",
      nim: "1234567890",
      fullname: "Mahasiswa Satu",
      semester: 3,
      prodiId: "clxylxtzc0005wxzr1ffk44jf", // Teknik Informatika
      konsentrasiId: "clxym05n90007xp80fspnrrec", // Sistem Informasi
    },
    {
      userId: "clxym0p5s00003hyuorw0cw11",
      nim: "0987654321",
      fullname: "Mahasiswa Dua",
      semester: 5,
      prodiId: "clxylxu5b0007wxzr72spf7ht", // Ekonomi Pembangunan
      konsentrasiId: "clxym05nc000bxp80noa3dksi", // Manajemen
    },
    {
      userId: "clxylq4ml000010h184il2voj",
      nim: "1357924680",
      fullname: "Mahasiswa Tiga",
      semester: 2,
      prodiId: "clxym0pbi00023hyu4ib6z874", // Teknik Informatika
      konsentrasiId: "clxym05hp0001xp80hm6v6076", // Teknologi Informasi
    },
    // Tambahkan mahasiswa lainnya sesuai kebutuhan
  ];

  // Operasi create untuk Mahasiswa
  const createMahasiswaPromises = mahasiswaData.map((mahasiswa) =>
    prisma.mahasiswa.create({
      data: mahasiswa,
    })
  );

  // Eksekusi semua operasi create secara paralel
  const newMahasiswa = await Promise.all(createMahasiswaPromises);

  console.log("Created new Mahasiswa:", newMahasiswa);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
