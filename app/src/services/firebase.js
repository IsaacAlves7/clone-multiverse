import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCgVyF-nP0aY7cD4WB_ixvD5o6G_kOeG0o",
    authDomain: "mercadolivre-clonern.firebaseapp.com",
    databaseURL: "https://mercadolivre-clonern.firebaseio.com",
    projectId: "mercadolivre-clonern",
    storageBucket: "mercadolivre-clonern.appspot.com",
    messagingSenderId: "791867090471",
    appId: "1:791867090471:web:c55f8730a19d9fb91f1002"

};

firebase.initializeApp(firebaseConfig);

export default firebase