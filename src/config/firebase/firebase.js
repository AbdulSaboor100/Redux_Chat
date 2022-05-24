// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuWWPHK332gs7KiplOSQVT0_QM9qQVjXY",
  authDomain: "redux-firebase-10.firebaseapp.com",
  projectId: "redux-firebase-10",
  storageBucket: "redux-firebase-10.appspot.com",
  messagingSenderId: "430219259545",
  appId: "1:430219259545:web:46ffdf2e2219107d0e5208",
  measurementId: "G-YJYV2H7259",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { createUserWithEmailAndPassword, signInWithEmailAndPassword };
