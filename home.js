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

<<<<<<< HEAD
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
=======
// var userDataRef = firebase.database().ref("users").orderByKey();
// console.log(userDataRef);
// userDataRef.once("value").then(function(snapshot) {
// snapshot.forEach(function(childSnapshot) {
//   var key = childSnapshot.key;
//   console.log("what is the key?" + key)
//   var childData = childSnapshot.val();        
//   console.log("what is the child data?" + childData)      
//   var name_val = childSnapshot.val().fname;
//   console.log("name value")
//   console.log(name_val);
//   $("#profile-id").append(name_val);
//   $("#profile-name").append(name_val);
//   });
// });

var curUser = firebase.auth().currentUser
console.log(curUser)

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user.uid)
    let uid = user.uid
    firebase.database().ref("users").once('value').then((snapshot) => {
      console.log(snapshot.val())
      var users = snapshot.val()
      name_val = users[uid].fname
    $("#profile-id").append(name_val);
    $("#profile-name").append(name_val);
    })

  } else {
    console.log('uh oh')
  }
});



// database.once("value")
//   .then(function(snapshot) {
//     console.log("what is snapshot")
//     console.log(snapshot);
//     console.log("this is child");
//     console.log(snapshot.child());
//   });
>>>>>>> 4a8d89d07fb6ee89dc2135071672391f3aa717ab
