import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC9gXNHGu5TeUKHbG9MI8Fiz35OWYsYiFg",
  authDomain: "uploadingfile-328e8.firebaseapp.com",
  projectId: "uploadingfile-328e8",
  storageBucket: "uploadingfile-328e8.appspot.com",
  messagingSenderId: "645505040228",
  appId: "1:645505040228:web:646f04671b149557974471"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)