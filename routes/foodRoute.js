// routes/foodRoutes.js
const express = require("express");
const { createFood, getAllFood } = require("../controller/foodController.js");
const upload = require("../middleware/upload.js");

const router = express.Router();

router.post("/food", upload.single("image"), createFood);
router.get("/food", getAllFood);

module.exports = router;
