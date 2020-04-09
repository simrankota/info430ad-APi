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
  measurementId: "G-HLJLQNXMCW",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// var provider = new firebase.auth.OAuthProvider('microsoft.com');
// firebase.auth().currentUser.linkWithRedirect(provider)
//     .then(function(result) {
//         console.log('hi');
//       // Microsoft credential is linked to the current user.
//       // IdP data available in result.additionalUserInfo.profile.
//       // OAuth access token can also be retrieved:
//       // result.credential.accessToken
//       // OAuth ID token can also be retrieved:
//       // result.credential.idToken
//     })
//     .catch(function(error) {
//       // Handle error.
//     });
// let signInBtn = document.querySelector('#nav-button')
// signInBtn.addEventListener('click', () => {
//     // firebase.auth().signInWithRedirect(provider)
//     firebase.auth().currentUser.linkWithPopup(provider)
//     .then(function(result) {
//         console.log('hi')
//       // Microsoft credential is linked to the current user.
//       // IdP data available in result.additionalUserInfo.profile.
//       // OAuth access token can also be retrieved:
//       // result.credential.accessToken
//       // OAuth ID token can also be retrieved:
//       // result.credential.idToken
//     })
//     .catch(function(error) {
//       // Handle error.
//     });
// })

// var user = firebase.auth().currentUser;
// console.log("who is the current user");
// console.log(user);

// var usercred = firebase.auth.UserCredential;
// console.log("user credentials");
// console.log(usercred);
//  //No user is signed in.

// firebase.auth().onAuthStateChanged(user => {
//   console.log("state is being changed");
//     if(user) {
//         window.location = '/home.html'; //After successful login, user will be redirected to home.html
//     }
// });

// // User name lets see
// console.log("testing for the user name")
// firebase.auth().signInAndRetrieveDataWithCredential(credential)
//     .then(function(userCredential) {
//       console.log(userCredential.additionalUserInfo.username);
// });

// firebase.auth().getRedirectResult()
//   .then(function(result) {
//     // User is signed in.
//     var profile = result.additionalUserInfo.profile
//     console.log("printing profile")
//     console.log(profile)
//     // IdP data available in result.additionalUserInfo.profile.
//     // OAuth access token can also be retrieved:
//     // result.credential.accessToken
//     // OAuth ID token can also be retrieved:
//     // result.credential.idToken
//   })
//   .catch(function(error) {
//     // Handle error.
//   });

let quiz = document.querySelector("#next");
quiz.addEventListener('click', () => {
  let modal = document.querySelector('#signup-window .modal-body')
  var email = document.querySelector("#nemail").value;
  var password = document.querySelector("#npassword").value;
  var fname = document.querySelector("#fname").value;
  var lname = document.querySelector("#lname").value;
  // Clear modal content on click
  modal.innerHTML = ''
  // Add question prompt
  let roleTitle = document.createElement('label')
  roleTitle.textContent = 'What role are you interested in?'
  roleTitle.classList.add('text-dark')
  modal.appendChild(roleTitle)
  
  // add divs for options
  let div1 = document.createElement('div')
  div1.classList.add('form-check')

  let div2 = document.createElement('div')
  div2.classList.add('form-check')

  let div3 = document.createElement('div')
  div3.classList.add('form-check')

  let div4 = document.createElement('div')
  div4.classList.add('form-check')

  let div5 = document.createElement('div')
  div5.classList.add('form-check')

  // add input options for divs
  let input1 = document.createElement('INPUT')
  input1.classList.add('form-check-input')
  input1.type = 'radio'
  input1.value = 'Data Science'
  input1.id = 'example1'
  input1.name = 'options'

  let input2 = document.createElement('INPUT')
  input2.classList.add('form-check-input')
  input2.type = 'radio'
  input2.value = 'Software Developer'
  input2.id = 'example2'
  input2.name = 'options'

  let input3 = document.createElement('INPUT')
  input3.classList.add('form-check-input')
  input3.type = 'radio'
  input3.value = 'Cybersecurity'
  input3.id = 'example3'
  input3.name = 'options'

  let input4 = document.createElement('INPUT')
  input4.classList.add('form-check-input')
  input4.type = 'radio'
  input4.value = 'Product/Project Manager'
  input4.id = 'example4'
  input4.name = 'options'

  let input5 = document.createElement('INPUT')
  input5.classList.add('form-check-input')
  input5.type = 'radio'
  input5.value = 'Non-technical'
  input5.id = 'example5'
  input5.name = 'options'

  // add role labels
  let label1 = document.createElement('label')
  label1.classList.add('form-check-label', 'text-dark')
  label1.for = 'example1'
  label1.textContent = 'Data Science'

  let label2 = document.createElement('label')
  label2.classList.add('form-check-label', 'text-dark')
  label2.for = 'example2'
  label2.textContent = 'Software Developer'

  let label3 = document.createElement('label')
  label3.classList.add('form-check-label', 'text-dark')
  label3.for = 'example3'
  label3.textContent = 'Cybersecurity'

  let label4 = document.createElement('label')
  label4.classList.add('form-check-label', 'text-dark')
  label4.for = 'example4'
  label4.textContent = 'Product/Project Manager'

  let label5 = document.createElement('label')
  label5.classList.add('form-check-label', 'text-dark')
  label5.for = 'example5'
  label5.textContent = 'Other'

  // pull together all elements
  div1.appendChild(input1)
  div1.appendChild(label1)
  modal.appendChild(div1)

  div2.appendChild(input2)
  div2.appendChild(label2)
  modal.appendChild(div2)

  div3.appendChild(input3)
  div3.appendChild(label3)
  modal.appendChild(div3)

  div4.appendChild(input4)
  div4.appendChild(label4)
  modal.appendChild(div4)

  div5.appendChild(input5)
  div5.appendChild(label5)
  modal.appendChild(div5)

let submitBtn = document.querySelector('#next')
submitBtn.textContent = 'Submit'
submitBtn.id = 'signup'

let signUp = document.querySelector("#signup");
signUp.addEventListener("click", () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      let rootRef = firebase.database().ref("users");
      var uid = userCredentials.user.uid;

      var user = { [uid]: { fname: fname, lname: lname } };
      rootRef.set(user);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
})

let login = document.querySelector('#login')
login.addEventListener('click', () => {
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   window.location = '/home.html';
  }
})
