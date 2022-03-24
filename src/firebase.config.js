// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_TOKEN}`,
  authDomain: 'grocery-app-store-57f4d.firebaseapp.com',
  projectId: 'grocery-app-store-57f4d',
  storageBucket: 'grocery-app-store-57f4d.appspot.com',
  messagingSenderId: '916840553509',
  appId: '1:916840553509:web:9eeef478eb09689b17f3cc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore();
