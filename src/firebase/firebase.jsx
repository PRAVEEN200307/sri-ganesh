// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSj5nogyQT80930mDQTBkxiwTNwlCAsSY",
  authDomain: "sri-ganesh-enginnering.firebaseapp.com",
  projectId: "sri-ganesh-enginnering",
  storageBucket: "sri-ganesh-enginnering.appspot.com",
  messagingSenderId: "152578688966",
  appId: "1:152578688966:web:a3e4afd606ac6fbfa054c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);