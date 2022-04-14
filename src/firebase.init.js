// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyB1XFy-nknGz60W6-q41XQHAXYSBsuj1D0",
   authDomain: "ema-john-simple-7acf6.firebaseapp.com",
   projectId: "ema-john-simple-7acf6",
   storageBucket: "ema-john-simple-7acf6.appspot.com",
   messagingSenderId: "494843040343",
   appId: "1:494843040343:web:7e8f515785392ef1588912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;