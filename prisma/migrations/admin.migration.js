const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Data Admin dengan ID User yang sudah ada
  const adminData = [
    {
      userId: "cly75855k000288m0ywk1uz0q",
      fullname: "Admin Satu",
    },
    {
      userId: "cly7584tt000088m08a6i6a2g",
      fullname: "Admin Dua",
    },
    {
      userId: "cly7584yw000188m03etonsxw",
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
