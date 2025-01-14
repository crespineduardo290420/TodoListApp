// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5lCeJ4cvrE_OoPgIp4XMjkPhbjTsyRVE",
  authDomain: "todolistapp-e6425.firebaseapp.com",
  projectId: "todolistapp-e6425",
  storageBucket: "todolistapp-e6425.firebasestorage.app",
  messagingSenderId: "520797123207",
  appId: "1:520797123207:web:4a6c0c5dbed86df2687e22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);