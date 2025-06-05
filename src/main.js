// server.js

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS for requests from frontend
app.use(express.json()); // Parse JSON bodies

// Sample message or data for cart
app.get("/cart", (req, res) => {
  res.json({ message: "🛒 Your cart is ready! and ready to serve the traffc" });
});

// Optional: add product list or user session endpoints here
// e.g., app.get("/api/products", ...)

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
