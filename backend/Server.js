import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import menuRoutes from "./routes/menu.routes.js";
import orderRoutes from "./routes/order.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(helmet());

// CORS setup
const allowedOrigins = [
  "http://localhost:5175",       // local frontend
  process.env.FRONTEND_URL       // deployed frontend
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow Postman or server-side requests
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  }
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Cafeteria API is running ☕");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
