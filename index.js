const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const mediaRoutes = require("./routes/mediaRoutes");
const adminRoutes=require("./routes/adminRoutes")
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/chintu/media", mediaRoutes);
app.use("/api/auth", authRoutes);
app.use("/admin",adminRoutes)

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    // console.log("MongoDB connected successfully", process.env.MONGO_URI);
    console.log("MongoDB connected successfully");

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port", process.env.PORT || 5000);
    });
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
