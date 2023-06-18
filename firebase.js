// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7pMClOwbC7ebZ24BPnj8mbQnqilwyDq4",
  authDomain: "sayit-33865.firebaseapp.com",
  projectId: "sayit-33865",
  storageBucket: "sayit-33865.appspot.com",
  messagingSenderId: "1015011998722",
  appId: "1:1015011998722:web:a811178b3cc265165a3b1b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
