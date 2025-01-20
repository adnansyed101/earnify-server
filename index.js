import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./config/db.js";
import jwtRoute from "./routes/jwt.route.js";
import userRouter from "./routes/user.route.js";
import taskRouter from "./routes/task.route.js";
import submissionRouter from "./routes/submission.route.js";
import paymentRouter from "./routes/payment.route.js";
import overviewRouter from "./routes/overview.route.js";
import withdrawalRouter from "./routes/withdrawal.route.js";
import notificationRouter from "./routes/notification.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://earnify-e4e0e.web.app",
    "https://console.firebase.google.com/u/0/project/earnify-e4e0e/overview",
  ],
  credentials: true,
  optionalSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello From Earnify");
});

app.use("/jwt", jwtRoute);
app.use("/user", userRouter);
app.use("/task", taskRouter);
app.use("/submission", submissionRouter);
app.use("/payment", paymentRouter);
app.use("/overview", overviewRouter);
app.use("/withdrawal", withdrawalRouter);
app.use("/notification", notificationRouter);

app.listen(PORT, () => console.log("Server running on " + PORT));
