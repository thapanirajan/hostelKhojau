
import { Router } from "express";

import { signin, signout, signup } from "../controller/auth.controller.js";
// import { protectRoute } from "../middlewares/auth.middleware.js";

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/signin", signin);
authRoutes.post("/signout", signout);

// authRoutes.put("/update-profile", protectRoute, updateProfile);

export default authRoutes;