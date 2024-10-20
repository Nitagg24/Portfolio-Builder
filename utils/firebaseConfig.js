import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "portfoliobuilder-aa2ad.firebaseapp.com",
  projectId: "portfoliobuilder-aa2ad",
  storageBucket: "portfoliobuilder-aa2ad.appspot.com",
  messagingSenderId: "451043382709",
  appId: "1:451043382709:web:caeaf32ae43a12dbabf5fc",
  measurementId: "G-XMXR0HHEY2"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


