import firebase from "firebase/compat"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC2Fytb9Yd-N5fqfDZHvi3rFU7rIUFTVJo",
  authDomain: "grocery-store-9261e.firebaseapp.com",
  projectId: "grocery-store-9261e",
  storageBucket: "grocery-store-9261e.appspot.com",
  messagingSenderId: "765252332306",
  appId: "1:765252332306:web:e7670376be60a65ff9e1cb"
};

// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// variable to handle signing in
const auth = firebase.auth();

export { auth, firebase };