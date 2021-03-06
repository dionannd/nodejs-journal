import jwt from "jsonwebtoken";
import { JWT } from "../lib/constant";

export const generateToken = async (user) => {
  const payload = {
    id: user.user_id,
    name: user.name,
    email: user.email,
  };

  return jwt.sign(payload, JWT.secretKey, {
    expiresIn: "6h",
  });
};
