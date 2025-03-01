
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "user name is required"],
        trim: true,
        minLength: 2,
        maxLength: 50
    },

    email: {
        type: String,
        required: [true, "User Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'please fill a valid email format']
    },

    password: {
        type: String,
        required: [true, "user password is required"],
        minLength: 6,
    },

    role: {
        type: String,
        required: [true, "role is of user is required"],
        enum: ["admin", "user"],
        default: "user"
    }

}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;