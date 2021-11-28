import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF515vNBoYWtQE7ZlYTKNJLta93A92-Rs",
  authDomain: "twitter-clone-dde74.firebaseapp.com",
  projectId: "twitter-clone-dde74",
  storageBucket: "twitter-clone-dde74.appspot.com",
  messagingSenderId: "491420394296",
  appId: "1:491420394296:web:b333a579fccff6459097cd",
  measurementId: "G-G27GBQRJGB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
