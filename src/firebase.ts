import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6F4Cy-MGSZ6sUX4xmehsl7mktCuu22tM",
  authDomain: "burnouttrackersimple.firebaseapp.com",
  projectId: "burnouttrackersimple",
  storageBucket: "burnouttrackersimple.firebasestorage.app",
  messagingSenderId: "1079690085368",
  appId: "1:1079690085368:web:8be282a2baae73ba4a4c0d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 