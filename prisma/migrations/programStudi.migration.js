const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Data Program Studi dengan ID Fakultas yang sudah ada
  const programStudiData = [
    {
      name: "Teknik Informatika",
      fakultasId: "clxyluny600011ypl8zcrzqdn",
    },
    {
      name: "Teknik Sipil",
      fakultasId: "clxyluny600011ypl8zcrzqdn",
    },
    {
      name: "Kedokteran Umum",
      fakultasId: "clxyluny800031yplw6o5b30b",
    },
    {
      name: "Ekonomi Pembangunan",
      fakultasId: "clxylunso00001ypls4gboxfb",
    },
    // Tambahkan program studi lainnya sesuai kebutuhan
  ];

  // Operasi create untuk Program Studi
  const createProgramStudiPromises = programStudiData.map((programStudi) =>
    prisma.programStudi.create({
      data: programStudi,
    })
  );

  // Eksekusi semua operasi create secara paralel
  const newProgramStudi = await Promise.all(createProgramStudiPromises);

  console.log("Created new Program Studi:", newProgramStudi);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
