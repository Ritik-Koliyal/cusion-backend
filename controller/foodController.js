// controllers/foodController.js
const Food = require("../model/food.model.js");

const createFood = async (req, res) => {
  try {
    const { name, desc, price, rating, time, serves, category } = req.body;

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // Check all required fields
    if (
      !name ||
      !desc ||
      !price ||
      !rating ||
      !time ||
      !serves ||
      !category ||
      !req.file
    ) {
      return res
        .status(400)
        .json({ message: "All fields and image are required" });
    }

    const newFood = new Food({
      name,
      desc,
      price,
      rating,
      time,
      serves,
      image: req.file.filename, // store filename
      category,
    });

    const saved = await newFood.save();
    res.status(201).json({ message: "Food created", data: saved });
  } catch (err) {
    console.error("Error creating food:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllFood = async (req, res) => {
  try {
    const foods = await Food.find(); // fetch all
    res.status(200).json({ data: foods });
  } catch (err) {
    console.error("Error fetching food:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createFood, getAllFood };
