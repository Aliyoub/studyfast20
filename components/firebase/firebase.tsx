// Firebase Initialization
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

// import { initializeApp } from 'firebase/app';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore,
  collection,
  doc,
  getDocs,
  Timestamp,
  FieldValue,
  setDoc,
  addDoc,
  onSnapshot,
  QuerySnapshot,
  query,
  where } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID

  // EN LOCAL
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
};


// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();




// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Utiliser getAuth avec la nouvelle API
const auth = getAuth(app);

const db = getFirestore();

export { auth, getFirestore, getStorage, collection,
  doc,
  getDocs,
  Timestamp,
  FieldValue,
  setDoc,
  addDoc,
  onSnapshot,
  QuerySnapshot,
  query,
  where, db  };