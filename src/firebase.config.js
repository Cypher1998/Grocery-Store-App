// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwyIxwVB1NtIJbSMgr9PGwtuqcl0HwU7M',
  authDomain: 'grocery-app-store-57f4d.firebaseapp.com',
  projectId: 'grocery-app-store-57f4d',
  storageBucket: 'grocery-app-store-57f4d.appspot.com',
  messagingSenderId: '916840553509',
  appId: '1:916840553509:web:9eeef478eb09689b17f3cc',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
