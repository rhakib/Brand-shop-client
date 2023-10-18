// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVgu-ZSdYj5OEVhnI7NUVIC8w-0lW7dxE",
    authDomain: "brandshop-client.firebaseapp.com",
    projectId: "brandshop-client",
    storageBucket: "brandshop-client.appspot.com",
    messagingSenderId: "674915313278",
    appId: "1:674915313278:web:486891b1ae30924c245a2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
