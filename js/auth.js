function displayUserInfo() {
  firebase.auth().onAuthStateChanged((user) => {
    const userInfoElement = document.getElementById("user-info");
    const loginBtn = document.getElementById("logInButton");
    const logOutButton = document.getElementById("logOutButton");

    if (user) {
      console.log("User is signed in:", user);
      const name = user.displayName || user.email;
      userInfoElement.textContent = `Welcome, ${name}!`;
      userInfoElement.style.display = "block";

      loginBtn.style.display = "none";
      logOutButton.style.display = "block";

      // SỰ KIỆN LOGOUT 
      logOutButton.addEventListener("click", () => {
        firebase.auth().signOut()
          .then(() => {
            console.log("User signed out.");
            window.location.href = "index.html"; // hoặc "login.html"
          })
          .catch((error) => {
            console.error("Logout error:", error);
          });
      });

    } else {
      console.log("No user is signed in.");
      loginBtn.style.display = "block";
      logOutButton.style.display = "none";
      userInfoElement.style.display = "none";
    }
  });
}

displayUserInfo();
