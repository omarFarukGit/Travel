import express from "express";
import "dotenv/config";
import cors from "cors";

import connectDB from "./config/db.js";
import { destinationRouter } from "./routes/destinationRoute.js";

const app = express();
const port = 6001 || process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server running...");
});

app.use("/api/destination", destinationRouter);

app.listen(port, async () => {
  await connectDB();
  console.log(`Example app listening on port ${port}`);
});
