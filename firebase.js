// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbzeCBvu5Bw8D9HwAowbCWijEjjW9hTfk",
  authDomain: "sruvi-web-app.firebaseapp.com",
  projectId: "sruvi-web-app",
  storageBucket: "sruvi-web-app.appspot.com",
  messagingSenderId: "748626964289",
  appId: "1:748626964289:web:198938c049879208f7fbc0",
  measurementId: "G-0CRYRB9LCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
