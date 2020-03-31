// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAZvWr-0ErRz5sLf15P8w6Ir5mL-zTxHb0",
  authDomain: "crwn-clothing-1f36f.firebaseapp.com",
  databaseURL: "https://crwn-clothing-1f36f.firebaseio.com",
  projectId: "crwn-clothing-1f36f",
  storageBucket: "crwn-clothing-1f36f.appspot.com",
  messagingSenderId: "346632522199",
  appId: "1:346632522199:web:551b630b83c80b5ad92392"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => {
  console.log(12);
  firebase.auth().signInWithPopup(provider);
};
export default firebase;
