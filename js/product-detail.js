const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  .then(res => res.json())
  .then(data => {
    const product = data.find(p => p.id == productId);

    if (!product) {
      document.body.innerHTML = "<h2>Không tìm thấy sản phẩm.</h2>";
      return;
    }

    // Gắn dữ liệu vào HTML
    document.getElementById("product-img").src = product.image_link;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `${product.price} USD`;
    document.getElementById("product-description").textContent = product.description || "Không có mô tả.";

    // Gắn dữ liệu vào button Add to Cart
    const addToCartBtn = document.getElementById("addToCartBtn");
    addToCartBtn.dataset.id = product.id;
    addToCartBtn.dataset.name = product.name;
    addToCartBtn.dataset.price = product.price;
    addToCartBtn.dataset.image = product.image_link;
  });


