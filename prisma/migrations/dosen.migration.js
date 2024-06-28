const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Data Dosen dengan ID User yang sudah ada
  const dosenData = [
    {
      userId: "clxyl9tww000213egt7vg9j1a",
      fullname: "Dosen Satu",
      nidn: "1234567890",
    },
    {
      userId: "clxyl9trh000013egvhom6hwk",
      fullname: "Dosen Dua",
      nidn: "0987654321",
    },
    {
      userId: "clxyl9twk000113eg8ko8l306",
      fullname: "Dosen Tiga",
      nidn: "1357924680",
    },
    // Tambahkan dosen lainnya sesuai kebutuhan
  ];

  // Operasi create untuk Dosen
  const createDosenPromises = dosenData.map((dosen) =>
    prisma.dosen.create({
      data: dosen,
    })
  );

  // Eksekusi semua operasi create secara paralel
  const newDosen = await Promise.all(createDosenPromises);

  console.log("Created new Dosen:", newDosen);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
