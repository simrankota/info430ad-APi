

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
  
  var rootRef = firebase.database().ref();
  console.log(rootRef);


var userDataRef = firebase.database().ref("UserData").orderByKey();
userDataRef.once("value").then(function(snapshot) {
snapshot.forEach(function(childSnapshot) {
  var key = childSnapshot.key;
  console.log("what is the key?" + key)
  var childData = childSnapshot.val();        
  console.log("what is the child data?" + childData)      
  var name_val = childSnapshot.val().fname;
  console.log("name value")
  console.log(name_val);
  $("#profile-id").append(name_val);
  });
});