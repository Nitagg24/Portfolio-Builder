// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "portfolio-builder-8e9e5.firebaseapp.com",
  projectId: "portfolio-builder-8e9e5",
  storageBucket: "portfolio-builder-8e9e5.appspot.com",
  messagingSenderId: "83025793436",
  appId: "1:83025793436:web:eec978ad4155dcc634f859",
  measurementId: "G-TJRG2DGE6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);


