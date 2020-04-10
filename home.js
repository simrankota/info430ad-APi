var firebaseConfig = {
    apiKey: "AIzaSyBDkUqMQ_hqqhVHY-SUSkQ9c8pMu0eBE60",
    authDomain: "encounter-af85b.firebaseapp.com",
    databaseURL: "https://encounter-af85b.firebaseio.com",
    projectId: "encounter-af85b",
    storageBucket: "encounter-af85b.appspot.com",
    messagingSenderId: "723627479249",
    appId: "1:723627479249:web:5836be0ffe2dceaf4e75f0",
    measurementId: "G-HLJLQNXMCW",
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database().uid;
console.log("what does database look like")
console.log(database);

database.once("value")
  .then(function(snapshot) {
    console.log("what is snapshot")
    console.log(snapshot);
    console.log("this is child");
    console.log(snapshot.child());
  });