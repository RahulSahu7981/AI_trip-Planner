// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import {getFirebase} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJDQN-mMJrlTIJhSBuhkvNz-nzDWPJVZQ",
  authDomain: "ai-trip-planner-44f97.firebaseapp.com",
  projectId: "ai-trip-planner-44f97",
  storageBucket: "ai-trip-planner-44f97.appspot.com",
  messagingSenderId: "165524470385",
  appId: "1:165524470385:web:10bd3d14403b18905b79d0",
  measurementId: "G-V52CBBLNT4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const analytics = getAnalytics(app);