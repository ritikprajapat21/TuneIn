import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./router/auth";
import connectDB from "./dbConnect";

connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
