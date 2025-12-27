import Order from "../models/Order.js";

export const placeOrder = async (req, res) => {
  const order = await Order.create({
    user: req.user.id,
    items: req.body.items,
    totalPrice: req.body.totalPrice
  });
  res.json(order);
};
