import express from "express";
import "dotenv/config";
import cors from "cors";
import { jwtVerify, createRemoteJWKSet } from "jose";

import connectDB from "./config/db.js";
import { destinationRouter } from "./routes/destinationRoute.js";

const app = express();
const port = 6001 || process.env.PORT;

app.use(express.json());
app.use(cors());

const JWKS = createRemoteJWKSet(new URL("http://localhost:3000/api/auth/jwks"));

export const verify = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ message: "unatuorized" });
    console.log(header);
    const token = header.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "unatuorized" });
    }
  }

  try {
    const { payload } = await jwtVerify(token, JWKS);
    console.log(payload);
    next();
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

app.use("/api/destination", destinationRouter);

app.listen(port, async () => {
  await connectDB();
  console.log(`Example app listening on port ${port}`);
});
