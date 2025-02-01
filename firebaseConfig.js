// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkHqhVZIYLvnEyWy393RA855e6VyU3v0s",
  authDomain: "todo-list-ac596.firebaseapp.com",
  projectId: "todo-list-ac596",
  storageBucket: "todo-list-ac596.firebasestorage.app",
  messagingSenderId: "855772513667",
  appId: "1:855772513667:web:9096bad6c6756e4a8322b6",
  measurementId: "G-19FW5Q8H2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);