

import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name is required"]
    },

    location: {
        type: String,
        required: [true,"location is required"]
    },
    description: {
        type: String,
        required: [true,"description is required"]
    },
    images: [
        { type: String },
    ], // Array of image URLs

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true,"owner is required"]
    },
    amenities: [
        { type: String }
    ], // e.g., WiFi, Laundry, Parking

    contact: {
        phone: { type: String, required: true },
        email: { type: String, required: true }
    }

}, { timestamps: true });


const Hostel = mongoose.model("Hostel",hostelSchema);
export default Hostel;
