console.log("Loại sản phẩm:", PRODUCT_TYPE);

fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  .then(res => res.json())
  .then(data => {
    const filtered = data.filter(p => p.product_type === PRODUCT_TYPE);
    console.log("Sản phẩm tìm thấy:", filtered.length);
    displayProducts(filtered);
  })
  .catch(error => console.error("Lỗi khi gọi API:", error));

function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";
  
    products.forEach(product => {
      const salePercent = 20;
      const oldPrice = parseFloat(product.price || 0) + 3;
  
      const productCard = document.createElement("div"); // 
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <div class="product-image">
          <img src="${product.image_link}" alt="${product.name}" />
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>
            <span class="old-price">$${oldPrice.toFixed(2)}</span> 
            <span class="new-price">$${parseFloat(product.price).toFixed(2)}</span>
            <span class="sale">-${salePercent}%</span>
          </p>
          <div class="swatches">
            <span class="swatch"></span>
            <span class="swatch"></span>
            <span class="swatch"></span>
            <span class="swatch more">+4</span>
          </div>
          <button class="choose-btn">CHOOSE OPTION</button>
        </div>
      `;
  
      const btn = productCard.querySelector(".choose-btn");
      btn.addEventListener("click", () => {
        showSlide(product);
      });
  
      container.appendChild(productCard);
    });
  }
  

function showSlide(product) {
  const slide = document.getElementById("product-slide");
  const body = document.getElementById("slide-body");

  body.innerHTML = `
    <h2 style="margin-bottom: 10px;">${product.name}</h2>
    <img 
      src="${product.image_link}" 
      style="width: 100%; max-height: 250px; object-fit: contain; border-radius: 10px; margin-bottom: 15px;" 
      alt="${product.name}"
    />
    <p><strong>Brand:</strong> ${product.brand || "N/A"}</p>
    <p><strong>Price:</strong> $${product.price}</p>
    <p><strong>Description:</strong> ${product.description || "No description available."}</p>

    <div style="margin-top: 15px;">
      <label><strong>Color:</strong></label><br/>
      <select class="color-select">
        <option>Red</option>
        <option>Coral</option>
        <option>Peach</option>
        <option>Berry</option>
      </select>
    </div>

    <div style="margin-top: 15px;">
      <label><strong>Quantity:</strong></label><br/>
      <input type="number" value="1" min="1" class="quantity-input" />
    </div>

    <button class="add-to-cart-btn">ADD TO CART</button>
  `;
  
// Gắn sự kiện cho nút "ADD TO CART"
  const addBtn = body.querySelector(".add-to-cart-btn");
addBtn.addEventListener("click", () => {
  const quantity = parseInt(body.querySelector(".quantity-input").value) || 1;
  const selectedColor = body.querySelector(".color-select").value;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.id == product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_link,
      quantity: quantity,
      color: selectedColor,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng!");
});

  slide.style.display = "flex";
  document.querySelector(".close-btn").onclick = () => {
    slide.style.display = "none";
  };
}

