import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../Firebase/firebase';

export const fetchImageURLs = async (folder: string) => {
  const imageListRef = ref(storage, folder);
  const imageURLs: string[] = [];

  try {
    const res = await listAll(imageListRef);
    await Promise.all(
      res.items.map(async (item) => {
        const url = await getDownloadURL(item);
        imageURLs.push(url);
      })
    );
  } catch (error) {
    console.error("Error fetching image URLs:", error);
  }

  return imageURLs;
};
