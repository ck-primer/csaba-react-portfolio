import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCIfBLugmq8g9FG2BivKFmoAC9OriGT2ik",
  authDomain: "nextfire-f9bc0.firebaseapp.com",
  projectId: "nextfire-f9bc0",
  storageBucket: "nextfire-f9bc0.appspot.com",
  messagingSenderId: "723826338164",
  appId: "1:723826338164:web:28956cf5f39e65ec3c2421",
  measurementId: "G-J9CW7VWPHR"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();