import Menu from "../models/menu.model.js";

export const getMenu = async (req, res) => {
  const items = await Menu.find();
  res.json(items);
};

export const addMenu = async (req, res) => {
  const item = await Menu.create(req.body);
  res.json(item);
};
