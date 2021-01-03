import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBlKZ7Jf7tazYnxHHkmLsGB4TD7mLX1JIE",
  authDomain: "goodscore-dev.firebaseapp.com",
  projectId: "goodscore-dev",
  storageBucket: "goodscore-dev.appspot.com",
  messagingSenderId: "202095644827",
  appId: "1:202095644827:web:132f453986bc3de694763e",
});

export const auth = app.auth();
export default app;