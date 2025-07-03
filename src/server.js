const express = require("express");
const connectDB = require("./config/db");
const cartRoutes = require("./routes/cartRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("", cartRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
