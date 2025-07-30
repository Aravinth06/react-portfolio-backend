const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// ✅ Mount routes at /api/contact
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
