// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbDhRhiTW28Rg_1TIaUSf3IS3hj7WT_As",
  authDomain: "fir-test-1-b7aef.firebaseapp.com",
  projectId: "fir-test-1-b7aef",
  storageBucket: "fir-test-1-b7aef.appspot.com",
  messagingSenderId: "997790059883",
  appId: "1:997790059883:web:7e5bec6e5e44961a3d902e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app