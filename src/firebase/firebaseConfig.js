import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSHB5IU68mq9GjgMT5ycvEHK5NWXHR29w",
  authDomain: "e-commerce-db1d8.firebaseapp.com",
  projectId: "e-commerce-db1d8",
  storageBucket: "e-commerce-db1d8.appspot.com",
  messagingSenderId: "1024526183954",
  appId: "1:1024526183954:web:bd125fac9011fa1bee32cb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
