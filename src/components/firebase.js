// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
	apiKey: "AIzaSyBpJCrDGXcPRjmJhN-Wn6_MjQD_lSNdjGQ",
	authDomain: "e-commerce-first-2f0bc.firebaseapp.com",
	projectId: "e-commerce-first-2f0bc",
	storageBucket: "e-commerce-first-2f0bc.appspot.com",
	messagingSenderId: "476532915677",
	appId: "1:476532915677:web:e04c8dd2331bb3bf720a34",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;