// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth }  from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-fIsIDCNK5KNt_u-H77KKvTmFM5eK-bM",
  authDomain: "subway-36d2d.firebaseapp.com",
  databaseURL: "https://subway-36d2d.firebaseio.com",
  projectId: "subway-36d2d",
  storageBucket: "subway-36d2d.appspot.com",
  messagingSenderId: "1016509212993",
  appId: "1:1016509212993:web:34a3009ac5e1085e0399c0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp )