const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.getHomeData);
router.get("/about", mainController.getAboutData);
router.get("/list-sepatu", mainController.getListSepatuData);
 
module.exports = router;
