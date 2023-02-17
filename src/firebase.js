// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_desBa9rbsTEUv36LnlvKn8XZZNrUL7s",
  authDomain: "dusecachatmodule.firebaseapp.com",
  projectId: "dusecachatmodule",
  storageBucket: "dusecachatmodule.appspot.com",
  messagingSenderId: "115366637774",
  appId: "1:115366637774:web:607de8458d0ecb92f7e09f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
