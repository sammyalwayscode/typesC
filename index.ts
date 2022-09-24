import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRouter from "./router/studentRouter";
const port: number = 2003;
const app = express();
const URL: string = "mongodb://localhost/newClassDB";

mongoose
  .connect(URL)
  .then((): void => {
    console.log("Database Connected");
  })
  .catch((err): void => console.log(err.message));

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use("/api/student", studentRouter);

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({ message: "TypeScript Test API" });
});

app.listen(port, (): void => {
  console.log(`Listening to PORT ${port}`);
});
