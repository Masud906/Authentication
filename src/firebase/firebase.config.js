// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2xNeXL_fZiho23JpHAWXkNBjAy0trnB4",
  authDomain: "auth-react-router-647be.firebaseapp.com",
  projectId: "auth-react-router-647be",
  storageBucket: "auth-react-router-647be.appspot.com",
  messagingSenderId: "957541410213",
  appId: "1:957541410213:web:abe52862258f366376b44c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;