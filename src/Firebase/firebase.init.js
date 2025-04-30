
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCO8RNuNIif4_EWDwILCjv_VNHVCtmofcA",
    authDomain: "simple-firebase-auth-294e8.firebaseapp.com",
    projectId: "simple-firebase-auth-294e8",
    storageBucket: "simple-firebase-auth-294e8.firebasestorage.app",
    messagingSenderId: "1034021006648",
    appId: "1:1034021006648:web:ee9572185d31613f4a65cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

