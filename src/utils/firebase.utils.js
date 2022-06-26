// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore, //creat db
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD-U1az3D6zYt3wNMZfRd5lDTgyfMIRcA",
  authDomain: "dbmovie-23016.firebaseapp.com",
  projectId: "dbmovie-23016",
  storageBucket: "dbmovie-23016.appspot.com",
  messagingSenderId: "981496301675",
  appId: "1:981496301675:web:1e152b4cc118197b05092e",
};

// Initialize Firebase
const firebaseAppapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: "select_account",
// });

export const auth = getAuth();
export const signInWithGoolePopup = async () => {
  signInWithPopup(auth, provider);
};

const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.user.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth.user;
    console.log(displayName, email);
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
    console.log(displayName, email, createdAt);
  }

  return userDocRef;
};
// createUserDocumentFromAuth

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  console.log(email, password);
  return await signInWithEmailAndPassword(auth, email, password);
};
