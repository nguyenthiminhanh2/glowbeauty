const firebaseConfig = {
    apiKey: "AIzaSyAKHAYzurp3ZdeMbetT39VgxCwsxMctGL4",
    authDomain: "fir-c0cdd.firebaseapp.com",
    projectId: "fir-c0cdd",
    storageBucket: "fir-c0cdd.firebasestorage.app",
    messagingSenderId: "419154110179",
    appId: "1:419154110179:web:a2df9f84cb3dbeac7187d6",
    measurementId: "G-D39HBPX9B3"
  };

firebase.initializeApp(firebaseConfig);

// let email = "Minhanh123@gmail.com";
// let password = "123456";

// // dang ky 
// const signInButton = document.getElementById("signInButton");
// signInButton.addEventListener("click", function(){
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     console.log("User registered:", user);
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });
// })

// // dang nhap bang email va mat khau
// const logInButton = document.getElementById("logInButton");
// logInButton.addEventListener("click", function(){
//   firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     console.log("User signed in:", user);
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });
// })

// // kiem tra user dang nhap hay chua
// const statusButton = document.getElementById("statusButton"); 
// statusButton.addEventListener("click", function(){
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       var uid = user.uid;
//       console.log("User is signed in:", user);
//       // ...
//     } else {
//       // User is signed out
//       // ...
//       console.log("No user is signed in.");
//     }
//   });
// })

// // dang xuat
// const logOutButton = document.getElementById("logOutButton");
// logOutButton.addEventListener("click", function(){
//   firebase.auth().signOut()
//   .then(() => {
//     console.log("User signed out.");
//   })
//   .catch((error) => {
//     console.error("Error signing out:", error);
//   });
// })

// const logInGoogleButton = document.getElementById("logInGoogleButton");
// logInGoogleButton.addEventListener("click", function() {
//   // Create a new provider
//   var provider = new firebase.auth.GoogleAuthProvider();
  
//   firebase.auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;
//     console.log("Credential:", credential);

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = credential.accessToken;
//     console.log("Token:", token);

//     // The signed-in user info.
//     var user = result.user;
//     console.log("User:", user);
//     // IdP data available in result.additionalUserInfo.profile.
//       // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });
// })


// // dang xuat
// // firebase.auth().signOut()
// //   .then(() => {
// //     console.log("User signed out.");
// //   })
// //   .catch((error) => {
// //     console.error("Error signing out:", error);
// //   });

// // lay thong tin user dang dang nhap
// // firebase.auth().onAuthStateChanged((user) => {
// //   if (user) {
// //     // User is signed in, see docs for a list of available properties
// //     // https://firebase.google.com/docs/reference/js/v8/firebase.User
// //     var uid = user.uid;
// //     console.log("User is signed in:", user);
// //     // ...
// //   } else {
// //     // User is signed out
// //     // ...
// //     console.log("No user is signed in.");
// //   }
// // });