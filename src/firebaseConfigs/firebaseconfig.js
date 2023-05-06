import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCPzFzlSe1vna5rH6aEnuIpoJSpAEGyMoY",
  authDomain: "rebuy-e8d72.firebaseapp.com",
  projectId: "rebuy-e8d72",
  storageBucket: "rebuy-e8d72.appspot.com",
  messagingSenderId: "122963270605",
  appId: "1:122963270605:web:01dfa68ed03616d0dc8284"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)