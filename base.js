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

var provider = new firebase.auth.OAuthProvider('microsoft.com');
firebase.auth().currentUser.linkWithRedirect(provider)
    .then(function(result) {
        console.log('hi');
      // Microsoft credential is linked to the current user.
      // IdP data available in result.additionalUserInfo.profile.
      // OAuth access token can also be retrieved:
      // result.credential.accessToken
      // OAuth ID token can also be retrieved:
      // result.credential.idToken
    })
    .catch(function(error) {
      // Handle error.
    });
let signInBtn = document.querySelector('#nav-button')
signInBtn.addEventListener('click', () => {
    // firebase.auth().signInWithRedirect(provider)
    firebase.auth().currentUser.linkWithPopup(provider)
    .then(function(result) {
        console.log('hi')
      // Microsoft credential is linked to the current user.
      // IdP data available in result.additionalUserInfo.profile.
      // OAuth access token can also be retrieved:
      // result.credential.accessToken
      // OAuth ID token can also be retrieved:
      // result.credential.idToken
    })
    .catch(function(error) {
      // Handle error.
    });
})

var user = firebase.auth().currentUser;
console.log("who is the current user");
console.log(user);

var usercred = firebase.auth.UserCredential;
console.log("user credentials");
console.log(usercred);
 //No user is signed in.

firebase.auth().onAuthStateChanged(user => {
  console.log("state is being changed");
    if(user) {
        window.location = '/home.html'; //After successful login, user will be redirected to home.html
    } 
});

// User name lets see
console.log("testing for the user name")
firebase.auth().signInAndRetrieveDataWithCredential(credential)
    .then(function(userCredential) {
      console.log(userCredential.additionalUserInfo.username);
});

firebase.auth().getRedirectResult()
  .then(function(result) {
    // User is signed in.
    var profile = result.additionalUserInfo.profile
    console.log("printing profile")
    console.log(profile)
    // IdP data available in result.additionalUserInfo.profile.
    // OAuth access token can also be retrieved:
    // result.credential.accessToken
    // OAuth ID token can also be retrieved:
    // result.credential.idToken
  })
  .catch(function(error) {
    // Handle error.
  });

 