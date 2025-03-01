
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    hostel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hostel',
        required: [true, "hostel is required"]
    },

    roomType: {
        type: String,
        required: [true, "roomType is required"]
    },

    price: {
        type: Number,
        required: [true, "price is required"]
    },

    capacity: {
        type: Number,
        required: [true, "capacity is required"]
    },

    isAvailable: {
        type: Boolean,
        default: true
    },

    images: {
        type: [String],
        required: [true, "images is required"]
    },

    features: {
        type: [String],
        required: [true, "features is required"]
    }
}, { timestamps: true });

const Room = mongoose.model("Room", roomSchema);

export default Room;