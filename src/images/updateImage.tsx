import { storage } from "../Firebase/firebase";
import { ref, uploadBytes, deleteObject } from 'firebase/storage';

export const updateImage = (folder: string, oldImage:string, newImage: File, uniqueImageName: string, callback: () => void) => {
        if (!newImage) {
        console.log("No image to update");
        return;
    }

    const newImageRef = ref(storage, `${folder}${uniqueImageName}`);
    
    uploadBytes(newImageRef, newImage)
    .then(() => {
      console.log("New image uploaded successfully!");
      
      // Reference to the old image
      const oldImageRef = ref(storage, oldImage);
      // console.log(oldImageRef,oldImage);
      
      // Delete the old image
      deleteObject(oldImageRef)
        .then(() => {
          console.log("Old image deleted successfully!");
          if (callback) {
            callback();
          }
        })
        .catch((error) => {
          console.error("Error deleting old image:", error);
        });
    })
    .catch((error) => {
      console.error("Image upload error:", error);
    });
}


