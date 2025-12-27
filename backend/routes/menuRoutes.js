import express from "express";
import Menu from "../models/Menu.js";

const router = express.Router();

/* GET MENU */
router.get("/", async (req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch menu" });
  }
});

export default router;
