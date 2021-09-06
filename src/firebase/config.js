import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firebase from "firebase"
// import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {};
firebase.initializeApp(firebaseConfig);
// export const db = getFirestore();
// export const auth = firebase.auth();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
