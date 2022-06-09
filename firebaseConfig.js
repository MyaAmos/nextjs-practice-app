// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnUHAq2eGPaAnzvE8vzp9X6dcEr8XYagg",
  authDomain: "nextjs-practice-app-e2003.firebaseapp.com",
  projectId: "nextjs-practice-app-e2003",
  storageBucket: "nextjs-practice-app-e2003.appspot.com",
  messagingSenderId: "703104679896",
  appId: "1:703104679896:web:528968a4dce3184a633cad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);