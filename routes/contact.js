const express = require("express");
const router = express.Router();
const db = require("../db");

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const sql = `INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)`;
    await db.execute(sql, [name, email, phone, message]);

    res.status(200).json({ message: "Message saved successfully" });
  } catch (error) {
    console.error("DB Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/contact/messages
router.get("/messages", async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT id, name, email, phone, message, submitted_at FROM contact_messages ORDER BY submitted_at DESC"
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error("DB Error:", error);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
});

module.exports = router;
