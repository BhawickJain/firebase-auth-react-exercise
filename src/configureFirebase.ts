// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration.
//
// Usually, you need to fastidiously guard API keys (for example, by
// setting the keys as environment variables);
// however, API keys for Firebase services are ok to include in code or checked-in config files.

// TODO ? why can you keep this api key in git?
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV2jOkCA44mabjTmFjEnlr30-km_3KRbA",
  authDomain: "c5-auth-workshop.firebaseapp.com",
  projectId: "c5-auth-workshop",
  storageBucket: "c5-auth-workshop.appspot.com",
  messagingSenderId: "950470487876",
  appId: "1:950470487876:web:524c2d136044103cb73111",
};

// Initialize Firebase as a whole
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Other auth providers include github, twitter, apple.
//These must be enabled in your firebase console.
export const googleAuthProvider = new GoogleAuthProvider();
