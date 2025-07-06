// ===============================
// 1. THÊM VÀO GIỎ HÀNG (nút Add to Cart)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const addToCartBtn = document.getElementById("addToCartBtn");
  
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
        const product = {
          id: addToCartBtn.dataset.id,
          name: addToCartBtn.dataset.name,
          price: addToCartBtn.dataset.price,
          image: addToCartBtn.dataset.image,
          quantity: 1,
        };
  
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.push(product);
        }
  
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Đã thêm vào giỏ hàng!");
      });
    }
  });
  
  
  // ===============================
  // 2. HIỂN THỊ GIỎ HÀNG (trang cart.html)
  // ===============================
  document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cartItems");
    if (cartContainer) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Giỏ hàng đang trống.</p>";
        return;
      }
  
      cartContainer.innerHTML = cart
        .map(
          (item) => `
        <div class="cart-item" style="display: flex; align-items: center; gap: 20px; padding: 10px; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 10px;">
          <img src="${item.image}" width="80" alt="${item.name}" style="border-radius: 8px;">
          <div>
            <h4>${item.name}</h4>
            <p>Giá: ${item.price} USD</p>
            <p>Số lượng: ${item.quantity}</p>
          </div>
        </div>
      `
        )
        .join("");
    }
  });
  