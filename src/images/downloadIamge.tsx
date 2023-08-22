import { getDownloadURL, listAll, ref, getMetadata } from 'firebase/storage';
import { storage } from '../Firebase/firebase';

export const fetchImageURLs = async (folder: string) => {
  const imageListRef = ref(storage, folder);
  const images: { name: string, url: string }[] = [];

  try {
    const res = await listAll(imageListRef);

    await Promise.all(
      res.items.map(async (item) => {
        const url = await getDownloadURL(item);
        const metadata = await getMetadata(item);
        const name = metadata.name;        
        images.push({ name, url });
      })
    );
  } catch (error) {
    console.error("Error fetching images:", error);
  }



  return images;
};
