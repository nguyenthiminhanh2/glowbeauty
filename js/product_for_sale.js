// Hiển thị sản phẩm
function loadProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
  
    db.collection("products").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const product = doc.data();
        const productItem = document.createElement("div");
        productItem.style.marginBottom = "20px";
        productItem.innerHTML = `
          <img src="${product.image}" width="80">
          <h4>${product.name}</h4>
          <p>Giá: ${product.price} USD</p>
          <p>${product.description}</p>
        `;
        productList.appendChild(productItem);
      });
    });
  }

  window.onload = loadProducts;
