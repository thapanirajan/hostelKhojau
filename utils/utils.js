
import jwt from "jsonwebtoken";

import { JWT_SECRET_KEY } from "../config/env.js"

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, JWT_SECRET_KEY, {
        expiresIn: "7d"
    })
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // milliseconds
        httpOnly: true, // prvents XSS attacks cross-site scripting attacks
    })
    return token;
}