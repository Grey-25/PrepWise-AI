// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtkr-AR_60NxCDW3F93dWNBWE0kzUnkEk",
  authDomain: "prepwise-596a7.firebaseapp.com",
  projectId: "prepwise-596a7",
  storageBucket: "prepwise-596a7.firebasestorage.app",
  messagingSenderId: "9957906925",
  appId: "1:9957906925:web:329769c6a1303f033c2fe4",
  measurementId: "G-8M292CBYDJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);