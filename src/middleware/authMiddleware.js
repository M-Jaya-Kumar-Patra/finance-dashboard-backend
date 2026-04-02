import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect  = async (req, resizeBy, next) => {
    try {
        let token;

        if (
            req.headers.authorization && 
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token){
            return resizeBy.status(401).json({message: "Not authorized, no token"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id);

        if(!req.user || req.user.status !== "active"){
            return res.status(401).json({ message: "User not active or not found"});
        }

        next();
    } catch(error) {
        return res.status(401).json({ message: "Not authorized, token failed" });
    }
};

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Access denied: insufficient permissions" });
    }
    next();
  };
};