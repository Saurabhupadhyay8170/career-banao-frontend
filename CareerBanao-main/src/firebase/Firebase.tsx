import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyCkcEiSHEoHR-EChhKngYWqW6zyXW6FdCk",
  authDomain: "careerbanao-d5c64.firebaseapp.com",
  projectId: "careerbanao-d5c64",
  storageBucket: "careerbanao-d5c64.appspot.com",
  messagingSenderId: "489780863152",
  appId: "1:489780863152:web:931be39b39642e173fdb75",
  measurementId: "G-3EG4Q2G42N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};