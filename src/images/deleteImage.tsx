import React from 'react';
import Button from 'react-bootstrap/Button';
import { storage } from '../Firebase/firebase';
import { ref, deleteObject } from 'firebase/storage';

interface DeleteImageProps {
  imagePath: string;
  onDeleteSuccess: () => void;
}

const DeleteImage: React.FC<DeleteImageProps> = ({ imagePath, onDeleteSuccess }) => {

  const imageRef = ref(storage, imagePath);

  // console.log(imagePath);
  
  const handleDeleteImage = async () => {
    try {
      await deleteObject(imageRef);
      console.log('Image deleted successfully.');
      onDeleteSuccess(); 
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <Button variant='outline-danger' onClick={handleDeleteImage}>Delete</Button>
  );
};

export default DeleteImage;
