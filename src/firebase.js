import  firebase from "firebase";


// import{initializeApp} from 'firebase/app';
// import{getFirestore} from 'firebase/firestore';
// import {GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBICNaTREoMashnD1TwVXKGk9o5CcNten4",
    authDomain: "disney-plus-clone-fbe78.firebaseapp.com",
    projectId: "disney-plus-clone-fbe78",
    storageBucket: "disney-plus-clone-fbe78.appspot.com",
    messagingSenderId: "1039139870321",
    appId: "1:1039139870321:web:03b73a611611693c956dd0",
    measurementId: "G-9DRPJSQGS9"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
db.settings({ timestampsInSnapshot: true });

export { auth, provider, storage };
export default db;