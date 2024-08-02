// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaQbU7kRiwulHOIUMoD51OAlO8UKtJAqo",
  authDomain: "hspantryapp-cc135.firebaseapp.com",
  projectId: "hspantryapp-cc135",
  storageBucket: "hspantryapp-cc135.appspot.com",
  messagingSenderId: "1010577839108",
  appId: "1:1010577839108:web:fc06a8d0e2bb452bba1151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };