import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDHR-mfyJFvI2-xk02wOZLjHEl6LHJax0",
  authDomain: "portfolio-e0e3f.firebaseapp.com",
  projectId: "portfolio-e0e3f",
  storageBucket: "portfolio-e0e3f.appspot.com",
  messagingSenderId: "852258426737",
  appId: "1:852258426737:web:d964d5116b2391307630d0",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
