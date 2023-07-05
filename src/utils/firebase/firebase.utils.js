// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrotQqyHx5awyYUQ1MUX9XEQTLmyplnRs",
  authDomain: "ola-clothing.firebaseapp.com",
  projectId: "ola-clothing",
  storageBucket: "ola-clothing.appspot.com",
  messagingSenderId: "659096808562",
  appId: "1:659096808562:web:90393aa2d6449841d766eb",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  console.log("userAuth", userAuth);
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("userDocRef", userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log("usersnapshot", userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the error", error.message);
    }
  }
  return userDocRef;
};
