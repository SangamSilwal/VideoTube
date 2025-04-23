import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null

        //To upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,
            {
                resource_type: "auto"    //It automatically detect the type of file 
            }
        )

        //After file has been uploaded successfully
        console.log("File is uploaded on cloudinary",response.url);
        return response;

    } catch (error) {
        //If uploading process catch some error then we have to unlink the \
        //file from the server using fs.unlink
        fs.unlink(localFilePath);
        return null;
    }
}


export {uploadOnCloudinary}