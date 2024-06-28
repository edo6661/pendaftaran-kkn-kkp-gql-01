const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

// Function to generate hashed password
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

async function main() {
  const numberOfUsers = 3;
  const promises = [];

  for (let i = 0; i < numberOfUsers; i++) {
    const username = `dosen${i}`;
    const email = `dosen${i}@example.com`;
    const hashedPassword = await hashPassword("test123");

    promises.push(
      prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          profilePhoto:
            "https://i.pinimg.com/564x/fc/68/c7/fc68c7853d0b5ecd72df224a7fe57071.jpg",
          role: "DOSEN", // Set default role if applicable
          // Add other fields as needed
        },
      })
    );
  }

  // Execute all create operations in parallel
  const newUsers = await Promise.all(promises);
  console.log("Created new Users:", newUsers);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
