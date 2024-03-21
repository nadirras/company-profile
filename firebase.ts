// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhs7r76_xmaIbDV5dLvJqHsNEWk8jWCRE",
  authDomain: "company-profile-db9fc.firebaseapp.com",
  projectId: "company-profile-db9fc",
  storageBucket: "company-profile-db9fc.appspot.com",
  messagingSenderId: "1021112281511",
  appId: "1:1021112281511:web:a2e1cdeccdf631f203ee82",
  measurementId: "G-2JJTQTQ609",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
