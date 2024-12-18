"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
var firebaseConfig = {
  apiKey: "AIzaSyCkcEiSHEoHR-EChhKngYWqW6zyXW6FdCk",
  authDomain: "careerbanao-d5c64.firebaseapp.com",
  projectId: "careerbanao-d5c64",
  storageBucket: "careerbanao-d5c64.appspot.com",
  messagingSenderId: "489780863152",
  appId: "1:489780863152:web:931be39b39642e173fdb75",
  measurementId: "G-3EG4Q2G42N" // apiKey: "AIzaSyB_980hp5kxx_1gthuhaqJXK8GnkiP7Tfo",
  // authDomain: "career-banao-8d28b.firebaseapp.com",
  // projectId: "career-banao-8d28b",
  // storageBucket: "career-banao-8d28b.appspot.com",
  // messagingSenderId: "802663630186",
  // appId: "1:802663630186:web:52d340087705aa023d1113"

}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig); // Initialize Firebase Authentication and get a reference to the service

var auth = (0, _auth.getAuth)(app);
exports.auth = auth;