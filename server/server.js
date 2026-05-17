import express from "express";
import "dotenv/config";
import cors from "cors";

import connectDB from "./config/db.js";
import { destinationRouter } from "./routes/destinationRoute.js";

const app = express();
const port = 6001 || process.env.PORT;

app.use(express.json());
app.use(cors());

export const verify = (req, res, next) => {
  const header = req.headers.authorization;
  console.log(header);
  next();
};

app.use("/api/destination", verify, destinationRouter);

app.listen(port, async () => {
  await connectDB();
  console.log(`Example app listening on port ${port}`);
});
