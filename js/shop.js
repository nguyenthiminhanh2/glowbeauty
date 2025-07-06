const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
console.log("Product ID từ URL:", productId);

fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
  .then(res => res.json())
  .then(data => {
    console.log("Dữ liệu sản phẩm (5 đầu):", data.slice(0, 5));

    const product = data.find(p => p.id == productId);
    if (!product) {
      document.body.innerHTML = "<h2>Không tìm thấy sản phẩm.</h2>";
      return;
    }

    document.getElementById("product-img").src = product.image_link;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `${product.price} USD`;
    document.getElementById("product-description").textContent = product.description;
  });

  div.addEventListener("click", () => {
    window.location.href = `product.html?id=${p.id}`;
  });