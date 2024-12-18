// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;
const MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: API_KEY,
   authDomain: AUTH_DOMAIN,
   projectId: PROJECT_ID,
   storageBucket: STORAGE_BUCKET,
   messagingSenderId: MESSAGING_SENDER_ID,
   appId: APP_ID,
   measurementId: MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
