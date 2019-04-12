import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
//create instance of provider for authentication, provider is a way to provide authentication


// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_SOTRAGE_BUCKE,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

const database = firebase.database();
// we use google provider for authentication here
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


