
import jwt from "jsonwebtoken"

import User from "../models/user.model.js"

import { JWT_SECRET_KEY } from "../config/env.js"

export const protectRoute = (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ message: "Uauthorized access" })
        }

        // decode the token
        const decode_token = jwt.verify(token, JWT_SECRET_KEY)

        if (!decode_token) {
            res.status(401).json({ message: "Invalid token" })
        }

        const user = User.findById(decode_token.userId).select("-password");

        if (!user) {
            res.status(404).send({ message: "User not found" })
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ message: "Internal error" })
    }
}