import { jwtVerify, createRemoteJWKSet } from "jose";
const JWKS = createRemoteJWKSet(new URL("http://localhost:3000/api/auth/jwks"));

export const verify = async (req, res, next) => {
  const header = req.headers.authorization;

  const token = header?.split(" ")[1];

  console.log(token);

  console.log(header);

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
