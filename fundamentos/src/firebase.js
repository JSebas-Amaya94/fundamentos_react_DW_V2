import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDM8WRV5gvEb1Ncm8btInGbN5n-aVZ1WaE",
  authDomain: "agencia-acc37.firebaseapp.com",
  projectId: "agencia-acc37",
  storageBucket: "agencia-acc37.appspot.com",
  messagingSenderId: "619368255997",
  appId: "1:619368255997:web:f2433ec5b96eae69ddc994"
};

firebase.initializeApp(firebaseConfig);

export {firebase}