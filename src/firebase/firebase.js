const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE,
    authDomain: "app-builds-55eef.firebaseapp.com",
    projectId: "app-builds-55eef",
    storageBucket: "app-builds-55eef.appspot.com",
    messagingSenderId: "1024975080340",
    appId: "1:1024975080340:web:861a99d5343e3f29519d81",
    measurementId: "G-27WY2MHRJ9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;