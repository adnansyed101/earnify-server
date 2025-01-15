import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/user.route.js";
import jobRouter from "./routes/job.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello From Earnify");
});

app.use("/user", userRouter);
app.use("/job", jobRouter);

app.listen(PORT, () => console.log("Server running on " + PORT));
