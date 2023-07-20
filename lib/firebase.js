import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCcjyjGotvHUyf3QaJwxyw6x_eiHvmiqQ",
  authDomain: "maldonado-ecommerce.firebaseapp.com",
  projectId: "maldonado-ecommerce",
  storageBucket: "maldonado-ecommerce.appspot.com",
  messagingSenderId: "457307748045",
  appId: "1:457307748045:web:0d4dbed971720e27499b84",
  measurementId: "G-M5VXR45DQQ",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
