
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCmpmzA-lYpLEN9RjmtnwNFtGLfWvEOFJA",
  authDomain: "signup-login-auth-91663.firebaseapp.com",
  projectId: "signup-login-auth-91663",
  storageBucket: "signup-login-auth-91663.appspot.com",
  messagingSenderId: "653523495006",
  appId: "1:653523495006:web:ccfa34b93b80d37eb7eccf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;