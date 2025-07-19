// Thêm sản phẩm
document.getElementById("addProductBtn").addEventListener("click", () => {
  const name = document.getElementById("productName").value.trim();
  const price = document.getElementById("productPrice").value.trim();
  const image = document.getElementById("productImage").value.trim();
  const description = document.getElementById("productDescription").value.trim();

  if (!name || !price || !image) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  db.collection("products").add({
    name,
    price,
    image,
    description
  }).then(() => {
    alert("Thêm sản phẩm thành công!");
    loadProducts();
  }).catch((error) => {
    console.error("Lỗi thêm sản phẩm: ", error);
  });
});

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
        <button onclick="deleteProduct('${doc.id}')">Xóa</button>
      `;
      productList.appendChild(productItem);
    });
  });
}

// Xóa sản phẩm
function deleteProduct(id) {
  db.collection("products").doc(id).delete().then(() => {
    alert("Xóa sản phẩm thành công!");
    loadProducts();
  }).catch((error) => {
    console.error("Lỗi xóa sản phẩm: ", error);
  });
}

window.onload = loadProducts;
