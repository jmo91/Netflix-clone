// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDBqO6eYiFCzS42hoAG_0nOy8WAdDja_vo",
  authDomain: "netflix-react-yt-dfe72.firebaseapp.com",
  projectId: "netflix-react-yt-dfe72",
  storageBucket: "netflix-react-yt-dfe72.appspot.com",
  messagingSenderId: "1092333912980",
  appId: "1:1092333912980:web:a954205425790e6f218581"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)
