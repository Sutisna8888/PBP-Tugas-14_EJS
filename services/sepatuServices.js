const prisma = require("../prisma/client");
async function getAllSepatu() {
  try {
    return await prisma.sepatu.findMany();
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllSepatu };
