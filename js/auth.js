function displayUserInfo() {
    firebase.auth().onAuthStateChanged((user) => {
      const userInfoElement = document.getElementById("user-info");
      const loginBtn = document.getElementById("logInButton");
      const logOutButton = document.getElementById("logOutButton");
      
      if (user) {
        console.log("User is signed in:", user);
        const name = user.displayName || user.email;
        userInfoElement.textContent = `Welcome, ${name}!`;
        
        // Ẩn nút đăng nhập, hiện nút đăng xuất
        loginBtn.style.display = "none";
        logOutButton.style.display = "block";
      } else {
        console.log("No user is signed in.");
        // userInfoElement.textContent = "Not signed in.";
        
        // Hiện nút đăng nhập, ẩn nút đăng xuất
        loginBtn.style.display = "block";
        logOutButton.style.display = "none";
        userInfoElement.style.display = "none";
      }
    });
  }

  displayUserInfo()