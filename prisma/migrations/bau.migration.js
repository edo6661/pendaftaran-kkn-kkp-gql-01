const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function generateRandomName(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

async function main() {
  const numberOfRecords = 10;
  const promises = [];

  for (let i = 0; i < numberOfRecords; i++) {
    const randomName = generateRandomName(10);
    promises.push(
      prisma.bau.create({
        data: {
          name: randomName,
        },
      })
    );
  }

  // Execute all create operations in parallel
  const newBaus = await Promise.all(promises);
  console.log("Created new Baus:", newBaus);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
