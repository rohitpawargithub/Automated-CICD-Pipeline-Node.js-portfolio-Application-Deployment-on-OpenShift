const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Health check endpoint
app.get("/healthz", (req, res) => {
    res.status(200).json({
        status: "ok",
        service: "portfolio-cicd"
    });
});

// Serve index.html for the root URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio server running on port ${PORT}`);
});