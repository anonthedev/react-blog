// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc  } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC5I3_IQC0Q6Z-6azChmA20Nb85ZBuoxc",
  authDomain: "blog-f7a1a.firebaseapp.com",
  projectId: "blog-f7a1a",
  storageBucket: "blog-f7a1a.appspot.com",
  messagingSenderId: "1048596745792",
  appId: "1:1048596745792:web:e6bc9da96048f88cd219a5"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore()
const auth =  getAuth();
const provider = new GoogleAuthProvider();

// const storage =  storage();

export { auth, provider, signInWithPopup, GoogleAuthProvider, doc, getDoc, getDocs, collection };

export default db