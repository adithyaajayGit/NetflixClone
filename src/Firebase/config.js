import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBvqP8SXHZc4evRfWPEKIs1DtYnJmrfho",
    authDomain: "netflixclone-fa2e9.firebaseapp.com",
    projectId: "netflixclone-fa2e9",
    storageBucket: "netflixclone-fa2e9.appspot.com",
    messagingSenderId: "799478518707",
    appId: "1:799478518707:web:d385308e6fdc6e436931c6",
    measurementId: "G-RR6L5N0CCT"
  };


 export const Firebase= firebase.initializeApp(firebaseConfig)