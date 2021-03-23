import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJuLqTPNJs2yCUINJ-EXX2B6LvXVoA0hQ",
  authDomain: "ecommerce-7751e.firebaseapp.com",
  projectId: "ecommerce-7751e",
  storageBucket: "ecommerce-7751e.appspot.com",
  messagingSenderId: "840318844931",
  appId: "1:840318844931:web:082dc834af90b502b14e36",
  measurementId: "G-2EYRHNK3ZL",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
