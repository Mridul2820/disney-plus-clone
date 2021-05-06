import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE,
    authDomain: "disney-plus-clone-80f2b.firebaseapp.com",
    projectId: "disney-plus-clone-80f2b",
    storageBucket: "disney-plus-clone-80f2b.appspot.com",
    messagingSenderId: "196756517220",
    appId: "1:196756517220:web:b5563ed7e773fab68eca71",
    measurementId: "G-XSLDPVCGK8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;