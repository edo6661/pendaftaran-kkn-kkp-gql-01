const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Data Dosen dengan ID User yang sudah ada
  const dosenData = [
    {
      userId: "clxym0t6n0000cn33nnnhfwrz",
      fullname: "Dosen Satu",
      nidn: "1234567890",
    },
    {
      userId: "clxym0tcm0001cn33g1lw8za9",
      fullname: "Dosen Dua",
      nidn: "0987654321",
    },
    {
      userId: "clxym0tcv0002cn33zbtpjqhn",
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
