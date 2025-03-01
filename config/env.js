
import { config } from "dotenv";

config()

export const { PORT, DB_URI, JWT_SECRET_KEY, MONGO_COMPASS_URI, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;