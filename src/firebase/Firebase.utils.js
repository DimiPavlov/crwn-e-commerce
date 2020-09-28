import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyA6IFHaUHQ9SbUV1cfPPoyxkTtFE1Ekq9Q",
    authDomain: "crwn-e-commerce-2179f.firebaseapp.com",
    databaseURL: "https://crwn-e-commerce-2179f.firebaseio.com",
    projectId: "crwn-e-commerce-2179f",
    storageBucket: "crwn-e-commerce-2179f.appspot.com",
    messagingSenderId: "85780627002",
    appId: "1:85780627002:web:ee5d1144fe1efd64447f03",
    measurementId: "G-WK2FJR3RHG"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;