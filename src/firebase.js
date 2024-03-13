// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNk9yWL8gmZfr_s_jMA1e7Tasl8XAltUw",
  authDomain: "website-7c728.firebaseapp.com",
  projectId: "website-7c728",
  storageBucket: "website-7c728.appspot.com",
  messagingSenderId: "275245807394",
  appId: "1:275245807394:web:e13c2c393f0c5b25e4d77b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);