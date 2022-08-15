import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCExEHofTEH53PCIMlwgHhQWJi_Gef8-tQ",
    authDomain: "clone-c6685.firebaseapp.com",
    projectId: "clone-c6685",
    storageBucket: "clone-c6685.appspot.com",
    messagingSenderId: "977607310791",
    appId: "1:977607310791:web:ed3c65562f6a1d5cbd2de2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };