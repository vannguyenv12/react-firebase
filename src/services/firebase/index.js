// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDggdHkh2LoquzZkAV9dL7cVvs5rYtEIi8",
  authDomain: "react-firebase-68b3d.firebaseapp.com",
  projectId: "react-firebase-68b3d",
  storageBucket: "react-firebase-68b3d.appspot.com",
  messagingSenderId: "672440938936",
  appId: "1:672440938936:web:ee72f364baf70b9abc5f4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
