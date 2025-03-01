

import Hostel from "../models/hostel.model.js";


// create hostel
export const createHostel = async (req, res) => {
    try {
        // const { ...hostelData } = req.body;
        // const owner = req.user._id;
        // console.log(owner);

        // const newHostel = new Hostel({ ...hostelData, owner });
        // await newHostel.save();
        // res.status(201).json({ message: "Hostel created successfully" });

        // req.body ==> form ko data eg: name, email, phone number 
        console.log(req.body);  // Debugging


    } catch (error) {
        res.status(500).json({ message: "Error creating hostel", error: error.message });
    }
}



// get all hostels
export const getHostels = async (req, res) => {
    try {
        const hostels = await Hostel.find().populate("owner", "name email");
        console.log(hostels);  // Debugging
        res.status(200).json(hostels);
    } catch (error) {
        res.status(500).json({ message: "Error getting hostels", error: error.message });
    }
}


// get hostel by id
export const getHostelById = async (req, res) => {
    try {
        const { hostelId } = req.params; 
        const hostel = await Hostel.findById(hostelId).populate("owner", "name email");
        res.status(200).json(hostel);
    } catch (error) {
        res.status(500).json({ message: "Error getting hostel", error: error.message });
    }
}


// update hostel
export const updateHostel = (req, res) => {
    try {
        const { hostelId } = req.params;
        const { ...hostelData } = req.body;
        Hostel.findByIdAndUpdate(hostelId, hostelData, { new: true }, (error, hostel) => {
            if (error) {
                res.status(500).json({ message: "Error updating hostel", error: error.message });
            }
            res.status(200).json({ message: "Hostel updated successfully" });
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating hostel", error: error.message });
    }
}
