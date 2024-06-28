const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Data Admin dengan ID User yang sudah ada
  const adminData = [
    {
      userId: "clxyl9w6k0001544nl0m8f3kl",
      fullname: "Admin Satu",
    },
    {
      userId: "clxyl9w1k0000544ng43e05vk",
      fullname: "Admin Dua",
    },
    {
      userId: "clxyl9w6u0002544ne7tyloue",
      fullname: "Admin Tiga",
    },
    // Tambahkan admin lainnya sesuai kebutuhan
  ];

  // Operasi create untuk Admin
  const createAdminPromises = adminData.map((admin) =>
    prisma.admin.create({
      data: admin,
    })
  );

  // Eksekusi semua operasi create secara paralel
  const newAdmin = await Promise.all(createAdminPromises);

  console.log("Created new Admin:", newAdmin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
