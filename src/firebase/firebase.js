// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2xD2_89Tu42LNHGLc21w00qCD29y_X4c",
  authDomain: "ace-acedemic-evaluator.firebaseapp.com",
  projectId: "ace-acedemic-evaluator",
  storageBucket: "ace-acedemic-evaluator.appspot.com",
  messagingSenderId: "546501088728",
  appId: "1:546501088728:web:a017e9963e9f176fd9cead",
};

// Initialize Firebase
let app;

if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };
