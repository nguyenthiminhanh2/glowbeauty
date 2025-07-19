// Email/Password login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log(email, password)

    if (email === "admin@gmail.com" && password  === "admin") {
        window.location.href = "./admin.html"
        return
    }
  
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log("User signed in:", user);
        alert("Login success")
        window.location.href = "./index.html"
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Login failed")
        // ..
    });
  });



  
//   // Google login
//   document.getElementById("logInGoogleButton").addEventListener("click", () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//       .then((result) => {
//         alert("Google Login thành công: " + result.user.email);
//       })
//       .catch((error) => {
//         alert("Google login error: " + error.message);
//       });
//   });
  

// function CheckUserIsLogin() {
//   firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//       var uid = user.uid;
//       console.log("User is signed in:", user);
//       // ...
//   } else {
//       // User is signed out
//       // ...
//       console.log("No user is signed in.");
//   }
//   });
// }


  
//   // Google login
//   document.getElementById("logInGoogleButton").addEventListener("click", () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//       .then((result) => {
//         alert("Google Login thành công: " + result.user.email);
//       })
//       .catch((error) => {
//         alert("Google login error: " + error.message);
//       });
//   });
  

// function CheckUserIsLogin() {
//   firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//       var uid = user.uid;
//       console.log("User is signed in:", user);
//       // ...
//   } else {
//       // User is signed out
//       // ...
//       console.log("No user is signed in.");
//   }
//   });
// }