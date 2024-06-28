const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Data Admin dengan ID User yang sudah ada
  const adminData = [
    {
      userId: "clxym0rce00028l3e1viwbit0",
      fullname: "Admin Satu",
    },
    {
      userId: "clxym0r6c00008l3efgwaorz9",
      fullname: "Admin Dua",
    },
    {
      userId: "clxym0rbv00018l3ekaxx3am8",
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
