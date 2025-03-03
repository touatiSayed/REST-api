const connectDB = require("./config/db");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

connectDB();

// Middleware
app.use(express.json()); // Allows parsing of JSON in request bodies
app.use(cors()); // Enables CORS for all requests

// Import Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Sample route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
