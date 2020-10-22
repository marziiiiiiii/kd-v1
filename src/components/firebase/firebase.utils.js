import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBoUa_esJattSVIRKRHyDwaF4ppk9Ue-s8",
  authDomain: "kartdavat-db.firebaseapp.com",
  databaseURL: "https://kartdavat-db.firebaseio.com",
  projectId: "kartdavat-db",
  storageBucket: "kartdavat-db.appspot.com",
  messagingSenderId: "995823795427",
  appId: "1:995823795427:web:c5ab6b2fa762fa04f8d9d6",
  measurementId: "G-NCZCVC67Z2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select-account' });
console.log(auth)

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
