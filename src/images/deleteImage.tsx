import { getStorage, ref, deleteObject } from "firebase/storage";

const storage = getStorage();

// Create a reference to the file to delete
const desertRef = ref(storage, 'img/1920x1080-px-colorful-coral-sea-underwater-water-animals-birds-hd-art-wallpaper-thumb.jpg');

// Delete the file
deleteObject(desertRef).then(() => {
    console.log("deleted");
    
}).catch((error) => {
    console.log("not delete");
    
});