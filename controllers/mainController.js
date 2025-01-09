const prisma = require("../prisma/client");

const getHomeData = (req, res) => {
  const title = "Toko Sepatu Online";
  res.render("pages/index", { title });
};
 
const getAboutData = (req, res) => {
  res.render("pages/about");
};

const getListSepatuData = async (req, res) => {
  try {
    const sepatu = await prisma.sepatu.findMany();
    res.render("pages/list-sepatu", { title: "List Sepatu", sepatu });
  } catch (error) {
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat mengambil data sepatu");
  }
};

module.exports = {
  getHomeData,
  getAboutData,
  getListSepatuData,
};
