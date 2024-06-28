const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Data Konsentrasi dengan ID Program Studi yang sudah ada
  const konsentrasiData = [
    {
      name: "Sistem Informasi",
      programStudiId: "clxylxtzc0005wxzr1ffk44jf",
    },
    {
      name: "Teknologi Informasi",
      programStudiId: "clxylxtzc0005wxzr1ffk44jf",
    },
    {
      name: "Manajemen",
      programStudiId: "clxylxu5b0007wxzr72spf7ht",
    },
    {
      name: "Keuangan",
      programStudiId: "clxylxu5b0007wxzr72spf7ht",
    },
    {
      name: "Konstruksi",
      programStudiId: "clxylxu5b0007wxzr72spf7ht",
    },
    {
      name: "Struktur",
      programStudiId: "clxylxtth0001wxzr6y5n8m5f",
    },
    {
      name: "Bedah Umum",
      programStudiId: "clxylxtyf0003wxzrwm5orwsz",
    },
    {
      name: "Anestesi",
      programStudiId: "clxylxtyf0003wxzrwm5orwsz",
    },
    // Tambahkan konsentrasi lainnya sesuai kebutuhan
  ];

  // Operasi create untuk Konsentrasi
  const createKonsentrasiPromises = konsentrasiData.map((konsentrasi) =>
    prisma.konsentrasi.create({
      data: konsentrasi,
    })
  );

  // Eksekusi semua operasi create secara paralel
  const newKonsentrasi = await Promise.all(createKonsentrasiPromises);

  console.log("Created new Konsentrasi:", newKonsentrasi);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
