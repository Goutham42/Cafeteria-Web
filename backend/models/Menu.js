import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    category: String,
    image: String,
    isAvailable: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Menu", menuSchema);
