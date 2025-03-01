
import { Router } from "express";

const hostelRoutes = Router();

import { createHostel, getHostels, getHostelById, updateHostel } from "../controller/hostel.controller.js";

hostelRoutes.post("/create", createHostel);
hostelRoutes.get("/", getHostels);
hostelRoutes.get("/:hostelId", getHostelById);
hostelRoutes.put("/:hostelId/update", updateHostel);

export default hostelRoutes;
