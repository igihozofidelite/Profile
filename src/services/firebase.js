import { getApp, getApps, initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC66spnPoAlaqxKpdUjnqqNty-9vQ1AEME",
  authDomain: "profile-d83b8.firebaseapp.com",
  projectId: "profile-d83b8",
  storageBucket: "profile-d83b8.firebasestorage.app",
  messagingSenderId: "34762133757",
  appId: "1:34762133757:web:7fd78a00cd09cc0bba2e94"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);

export function sendContactMessage({ name, email, message }) {
  return addDoc(collection(db, "contactMessages"), {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    createdAt: serverTimestamp(),
  });
}