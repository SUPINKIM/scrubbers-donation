// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey : process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain : process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId : process.env.REACT_APP_FIERBASE_STORAGE_BUCKET,
    storageBucket : process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId : process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId : process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId : process.env.REACT_APP_FIERBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
