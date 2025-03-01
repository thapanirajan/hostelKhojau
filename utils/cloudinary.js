
import { v2 as cloudinary } from 'cloudinary';

import { fs } from 'fs';

import { CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME } from '../config/env';
import { log } from 'console';

// Configuration
cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadFileOnCloudinary = async (localFilePath) => {
    try {
        if (!localPathFile) return null;

        // upload file to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("File uploaded successfully");
        console.log(response.url);
        return response;
    }
    catch (error) {
        console.log(error);
        fs.unlinkSync(localFilePath); // remove the file from the local storage
        return null;
    }
}

export default uploadFileOnCloudinary;
