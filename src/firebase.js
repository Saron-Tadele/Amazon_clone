import firebase from 'firebase'

const firebaseConfig = {
 apiKey: "AIzaSyBdmhV9Dk_Fajg_Tf37AukeRFj0PIceY6o",
 authDomain: "clone-97c42.firebaseapp.com",
 databaseURL: "https://clone-97c42.firebaseio.com",
 projectId: "clone-97c42",
 storageBucket: "clone-97c42.appspot.com",
 messagingSenderId: "145347053340",
 appId: "1:145347053340:web:7bcb2943e5f6e0eb0b5cd9",
 measurementId: "G-WD1Y0E8TSN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth = firebase.auth();
 export { db,auth}