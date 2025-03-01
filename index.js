
import express from "express"
import { PORT } from "./config/env.js";

import authRoutes from "./routes/auth.route.js";
import hostelRoutes from "./routes/hostel.route.js";
import connectToDatabase from "./database/database.js";
import cookieParser from "cookie-parser";

const port = PORT || 5000;

const app = express();

// middlewares
// app.use(cors());
app.use(express.json());
app.use(cookieParser());


// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/hostels", hostelRoutes);
app.use("/api/hostels", hostelRoutes);
// app.use("/api/rooms", roomsRoutes);
// app.use('/api/bookings', bookingRoutes);


app.listen(port, () => {
    console.log(`server running at : http://localhost:${port}`);
    connectToDatabase()
})

