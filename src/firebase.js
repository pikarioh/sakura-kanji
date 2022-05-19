// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJYQ5y6bxoPkw_UBEXq_lo2bhGpvj6iiE",
  authDomain: "sakura-kanji.firebaseapp.com",
  projectId: "sakura-kanji",
  storageBucket: "sakura-kanji.appspot.com",
  messagingSenderId: "478282359282",
  appId: "1:478282359282:web:325c4b3f9af6037ab44b6b",
  measurementId: "G-LFLVTWXTT9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;