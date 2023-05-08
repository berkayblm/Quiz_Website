const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBYN0JQPSaSYcwHF0ViLyCXowclwOTLVLE",
    authDomain: "frontend-test-1e2c1.firebaseapp.com",
    projectId: "frontend-test-1e2c1",
    storageBucket: "frontend-test-1e2c1.appspot.com",
    messagingSenderId: "1088925075565",
    appId: "1:1088925075565:web:458b25c6fd1b898f995764",
    measurementId: "G-DR47D91B9X"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();