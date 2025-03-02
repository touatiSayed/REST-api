require("dotenv").config();
const express = require("express");

const app = express();

// Middleware
app.use(express.json()); // Allows parsing of JSON in request bodies
app.use(require("cors")()); // Enables CORS for all requests

// Sample route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
