// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection } from 'firebase/firestore';
// Your web app's Firebase configuration
export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDSGtabiGcHzy1PKrbZaO5qteYu7HIxf6g",
  authDomain: "data-entry-apps.firebaseapp.com",
  databaseURL: "https://data-entry-apps-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "data-entry-apps",
  storageBucket: "data-entry-apps.appspot.com",
  messagingSenderId: "690530941218",
  appId: "1:690530941218:web:5d6716d40529b036ddcd7b"
})

// Initialize Firebase
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todoRef = collection(db, 'todos')
