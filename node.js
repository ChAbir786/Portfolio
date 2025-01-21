// Install necessary modules using: npm install express ejs

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    name: "John Doe",
    profession: "Video Editor",
    works: [
      { title: "Travel Montage", link: "https://example.com/travel-montage" },
      { title: "Wedding Highlights", link: "https://example.com/wedding-highlights" },
      { title: "Corporate Promo", link: "https://example.com/corporate-promo" }
    ],
    contact: {
      email: "johndoe@gmail.com",
      phone: "+1234567890",
      linkedin: "https://linkedin.com/in/johndoe",
      portfolio: "https://johndoeporfolio.com"
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});