import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "portfolio-builder-8e9e5.firebaseapp.com",
  projectId: "portfolio-builder-8e9e5",
  storageBucket: "portfolio-builder-8e9e5.appspot.com",
  messagingSenderId: "83025793436",
  appId: "1:83025793436:web:eec978ad4155dcc634f859",
  measurementId: "G-TJRG2DGE6Z"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


