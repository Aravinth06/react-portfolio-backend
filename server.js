const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");

const app = express();
app.use(cors());
app.use(express.json());

// Use your contact routes
app.use("/api/contact", contactRoutes);

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
