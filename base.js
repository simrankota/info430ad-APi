// import firebase from 'firebase/app';

// import { initializeApp, analytics, auth } from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBDkUqMQ_hqqhVHY-SUSkQ9c8pMu0eBE60",
    authDomain: "encounter-af85b.firebaseapp.com",
    databaseURL: "https://encounter-af85b.firebaseio.com",
    projectId: "encounter-af85b",
    storageBucket: "encounter-af85b.appspot.com",
    messagingSenderId: "723627479249",
    appId: "1:723627479249:web:5836be0ffe2dceaf4e75f0",
    measurementId: "G-HLJLQNXMCW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredentials) => {
//         let user = userCredentials.user; //access the newly created user
//         console.log('User created: '+user.uid);
//         //...
//     })
//     .catch((error) => { //report any errors
//         console.log(error.message);
//     });

var provider = new firebase.auth.OAuthProvider('microsoft.com');

let signInBtn = document.querySelector('#nav-button')
signInBtn.addEventListener('click', () => {
    firebase.auth().signInWithRedirect(provider);
})



 