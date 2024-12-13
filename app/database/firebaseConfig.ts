import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } from '@env';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiw0ALnCkNMVaXiq81Oy3IdJSaRRn8qrQ",
    authDomain: "breakingtheice-1c8ab.firebaseapp.com",
    databaseURL: "https://breakingtheice-1c8ab-default-rtdb.firebaseio.com",
    projectId: "breakingtheice-1c8ab",
    storageBucket: "breakingtheice-1c8ab.firebasestorage.app",
    messagingSenderId: "589202550620",
    appId: "1:589202550620:web:e4fd2e07cfa5e4f0fb1b99",
    measurementId: "G-ZSYKHPEW6V"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Conditionally initialize Firebase Analytics
let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };