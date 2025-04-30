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
  apiKey: "AIzaSyC2mDFohgOBtOiu3dph2R9Ji6h83rr1zws",
  authDomain: "prep-wise-117c7.firebaseapp.com",
  projectId: "prep-wise-117c7",
  storageBucket: "prep-wise-117c7.firebasestorage.app",
  messagingSenderId: "580221252001",
  appId: "1:580221252001:web:e762d53c5f00a88fad1be0",
  measurementId: "G-Y42PJ50JHJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);