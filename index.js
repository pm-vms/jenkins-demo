// Load environment variables
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3002;

// Health Check API
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
