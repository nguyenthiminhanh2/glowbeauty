fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  .then(res => res.json())
  .then(data => {
    const bestSellers = data.slice(0, 6); // Chọn 6 sản phẩm đầu tiên

    const bestSellerList = document.getElementById("bestSellerList");

    bestSellers.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <div class="product-image">
          <img src="${product.image_link}" alt="${product.name}">
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price || "N/A"}</p>
        <a href="product.html?id=${product.id}" class="shop-now-btn">SHOP NOW</a>
      `;
      bestSellerList.appendChild(card);
    });
  })
  .catch(err => console.error("Lỗi khi tải sản phẩm:", err));