
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCcfmMkarPKiMz00kxj3o9w0-MR_dOv7rk",
  authDomain: "basetask-d1640.firebaseapp.com",
  projectId: "basetask-d1640",
  storageBucket: "basetask-d1640.firebasestorage.app",
  messagingSenderId: "8078857463",
  appId: "1:8078857463:web:42bde0a08605197c972ff2"
};

const app = initializeApp(firebaseConfig);

// Initialisation des services Firebase
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();