import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXVwLJCQbpcJQnPVY28DZC-Dsu6ncop28",
  authDomain: "tsixla-90c06.firebaseapp.com",
  projectId: "tsixla-90c06",
  storageBucket: "tsixla-90c06.firebasestorage.app",
  messagingSenderId: "722076999264",
  appId: "1:722076999264:web:d8ec39d078a4e60350ad05"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
