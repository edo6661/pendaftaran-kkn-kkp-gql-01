const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Buat data Fakultas
  const fakultasData = [
    {
      name: "Fakultas Teknik",
    },
    {
      name: "Fakultas Ekonomi",
    },
    {
      name: "Fakultas Hukum",
    },
    {
      name: "Fakultas Kedokteran",
    },
    // Tambahkan fakultas lainnya sesuai kebutuhan
  ];

  // Operasi create untuk Fakultas
  const createFakultasPromises = fakultasData.map((fakultas) =>
    prisma.fakultas.create({
      data: fakultas,
    })
  );

  // Eksekusi semua operasi create secara paralel
  const newFakultas = await Promise.all(createFakultasPromises);

  console.log("Created new Fakultas:", newFakultas);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
