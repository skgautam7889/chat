// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA5uEodspAHvuSvaQeK7W2c0IXTs-n29gQ",
    authDomain: "react-chat-application-ac463.firebaseapp.com",
    databaseURL: "https://react-chat-application-ac463-default-rtdb.firebaseio.com",
    projectId: "react-chat-application-ac463",
    storageBucket: "react-chat-application-ac463.appspot.com",
    messagingSenderId: "95902826428",
    appId: "1:95902826428:web:73b77333bfeed80be1f5b9",
    measurementId: "G-G219NH7W82"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;