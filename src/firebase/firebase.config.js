// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNnjs-X1GXD1gOmO67ijjXZRYk5N5-bJM",
  authDomain: "ema-john-with-firebase-a-917bb.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-917bb",
  storageBucket: "ema-john-with-firebase-a-917bb.appspot.com",
  messagingSenderId: "602226806664",
  appId: "1:602226806664:web:0beadbf4633520814bf43d",
  measurementId: "G-17VTJZRRFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;