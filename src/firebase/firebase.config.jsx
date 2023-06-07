/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB-MEmcLsWGZVpJy7T6emLy8HammKDQ3Bs",
    authDomain: "homerental-73204.firebaseapp.com",
    projectId: "homerental-73204",
    storageBucket: "homerental-73204.appspot.com",
    messagingSenderId: "49519431282",
    appId: "1:49519431282:web:e4f5c2f73d8d18b3e8bceb",
    measurementId: "G-8HBYTFMTPC",

    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    // measurementId: process.env.REACT_APP_measurementId,


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// const analytics = getAnalytics(app);