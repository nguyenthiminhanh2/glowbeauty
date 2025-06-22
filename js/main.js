// import { products } from '../html/./js/product.js';

const container = document.getElementById('product-list');

// render sản phẩm
products.forEach((product) => {
  const card = document.createElement('div');
  card.classList.add('product-card'); // ❗m bị sai dòng này nè (dùng classList.add đúng cách)

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius: 10px;">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p style="color: red;"><strong>${product.price.toLocaleString()}đ</strong></p>
    <button style="display: none;" class="shop-now">Shop Now</button>
  `;

  // sự kiện click để phóng to
  card.addEventListener('click', () => {
    document.querySelectorAll('.product-card').forEach(c => {
      c.classList.remove('active');
      c.querySelector('.shop-now').style.display = 'none';
    });

    card.classList.add('active');
    card.querySelector('.shop-now').style.display = 'block';
  });

  container.appendChild(card);
});

displayUserInfo()

// function CheckUserIsLogin() {
//   firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//       var uid = user.uid;
//       console.log("User is signed in:", user);
//       console.log(user._delegate.email)
//       // ...
//   } else {
//       // User is signed out
//       // ...
//       console.log("No user is signed in.");
//   }
//   });
// }

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

document.getElementById('logOutButton').addEventListener('click', () => {
  firebase.auth().signOut()
  .then(() => {
      console.log("User signed out.");
  })
  .catch((error) => {
      console.error("Error signing out:", error);
  });
});