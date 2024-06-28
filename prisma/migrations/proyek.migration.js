const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Array URL gambar untuk foto proyek secara acak
const projectPhotos = [
  "https://i.pinimg.com/474x/10/ec/a0/10eca03a0653968e7d9231208eb516e6.jpg",
  "https://i.pinimg.com/236x/d6/55/10/d6551045073ecf4b603ed7e91cb1fa6e.jpg",
  "https://i.pinimg.com/236x/a3/ff/ca/a3ffca89619b37be43d1ae42d0a882b9.jpg",
  "https://i.pinimg.com/236x/e2/dd/72/e2dd7248c23b23cf2e2b28e058c5ee5f.jpg",
  // Tambahkan URL gambar lainnya sesuai kebutuhan
];

// Function untuk memilih secara acak URL gambar
function getRandomPhoto() {
  const randomIndex = Math.floor(Math.random() * projectPhotos.length);
  return projectPhotos[randomIndex];
}

async function main() {
  // Data Proyek dengan foto yang dipilih secara acak
  const projectData = [
    {
      name: "Proyek A",
      photo: getRandomPhoto(),
      batasOrang: 20,
      description: "Deskripsi Proyek A",
    },
    {
      name: "Proyek B",
      photo: getRandomPhoto(),
      batasOrang: 30,
      description: "Deskripsi Proyek B",
    },
    {
      name: "Proyek C",
      photo: getRandomPhoto(),
      batasOrang: 40,
      description: "Deskripsi Proyek C",
    },
    {
      name: "Proyek D",
      photo: getRandomPhoto(),
      batasOrang: 50,
      description: "Deskripsi Proyek C",
    },
    // Tambahkan proyek lainnya sesuai kebutuhan
  ];

  // Operasi create untuk Proyek
  const createProjectPromises = projectData.map((project) =>
    prisma.proyek.create({
      data: project,
    })
  );

  // Eksekusi semua operasi create secara paralel
  const newProjects = await Promise.all(createProjectPromises);

  console.log("Created new Projects:", newProjects);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
