import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";


const protect = asyncHandler(async (req, res, next) => {
  const authToken = req.headers.authorization;
  let token;
  if (authToken && authToken.startsWith("Bearer")) {
    try {
      token = authToken.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decoded.id).select("_id");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token found");
  }
});

export { protect };
