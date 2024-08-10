// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-VPfFkVf6pMiSV6UHXE5VSjo9bnbAz5A",
  authDomain: "inventory-management-74155.firebaseapp.com",
  projectId: "inventory-management-74155",
  storageBucket: "inventory-management-74155.appspot.com",
  messagingSenderId: "451334049731",
  appId: "1:451334049731:web:99ffc7d66c1578ffda3776",
  measurementId: "G-DR2T6BP4WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};