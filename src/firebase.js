import firebase from "firebase";
// for authentication

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoom_sdJ9IwySIHvunGp69ZMvTxjTH2AA",
  authDomain: "nykaa-clone.firebaseapp.com",
  databaseURL: "https://nykaa-clone.firebaseio.com",
  projectId: "nykaa-clone",
  storageBucket: "nykaa-clone.appspot.com",
  messagingSenderId: "458010162521",
  appId: "1:458010162521:web:e24007c01edb384d10c848",
  measurementId: "G-FSKH89CK2G",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
