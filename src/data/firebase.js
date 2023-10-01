// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJcElk1IqXzrSV1NRqauzQ_vfGG5PntL8",
  authDomain: "portfolio-advanced.firebaseapp.com",
  projectId: "portfolio-advanced",
  storageBucket: "portfolio-advanced.appspot.com",
  messagingSenderId: "933475845475",
  appId: "1:933475845475:web:067978809bd1e0a5207f56",
  measurementId: "G-1NC434P6W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };