// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGkFLTqgcXmZe0UNpDZ3lo6ZVqUxHyMes",
  authDomain: "chat-app-rei.firebaseapp.com",
  projectId: "chat-app-rei",
  storageBucket: "chat-app-rei.appspot.com",
  messagingSenderId: "584592379635",
  appId: "1:584592379635:web:cf959d095659b94e56b186",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
