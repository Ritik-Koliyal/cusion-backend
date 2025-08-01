const express = require("express");
const mongoose = require("mongoose");
const foodRoutes = require("./routes/foodRoute.js");
const path = require("path");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Static folder for uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// DB connection
mongoose
  .connect(
    "mongodb+srv://koliyalritik50:WegV7L0VXx9oNlN2@cluster0.isndsu5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// Routes
app.use("/api", foodRoutes);

// Start server
app.listen(2200, () => {
  console.log("Server running on port 2200");
});
