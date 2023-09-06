import { storage } from "../Firebase/firebase";
import { ref, uploadBytes } from 'firebase/storage';

export const uploadImage = (folder: string, image: File, uniqueImageName: string, callback: () => void) => {
    if (!image) {
        console.log("No image to upload");
        return;
    }

    const imageRef = ref(storage, `${folder}${uniqueImageName}`);
    
    uploadBytes(imageRef, image)
        .then(() => {
            console.log("Image uploaded successfully!");
            if (callback) {
                callback();
            }
        })
        .catch(error => {
            console.error("Image upload error:", error);
        });
};

  

