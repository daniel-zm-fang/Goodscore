import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD5Q72dVi-5b8IYbnlLPFwMpjCS1DOqpJY",
  authDomain: "auth-dev-507e5.firebaseapp.com",
  projectId: "auth-dev-507e5",
  storageBucket: "auth-dev-507e5.appspot.com",
  messagingSenderId: "184300948450",
  appId: "1:184300948450:web:4d772c10e719b1ad8ec7bb",
});

export const auth = app.auth();
export default app;
