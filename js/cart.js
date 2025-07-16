document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cartItems");

  if (cartContainer) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const renderCart = () => {
      if (cart.length === 0) {
        cartContainer.innerHTML = "<p>shopping cart is empty</p>";
        return;
      }

      cartContainer.innerHTML = cart
        .map(
          (item) => `
          <div class="cart-item" data-id="${item.id}" style="display: flex; align-items: center; gap: 20px; padding: 10px; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 10px;">
            <img src="${item.image}" width="80" alt="${item.name}" style="border-radius: 8px;">
            <div style="flex: 1;">
              <h4>${item.name}</h4>
              <p>Giá: ${item.price} USD</p>
              <div style="display: flex; align-items: center; gap: 10px;">
                <button class="decrease-btn" data-id="${item.id}" style="padding: 4px 10px;">-</button>
                <span>${item.quantity}</span>
                <button class="increase-btn" data-id="${item.id}" style="padding: 4px 10px;">+</button>
              </div>
            </div>
            <button class="remove-btn" data-id="${item.id}" style="padding: 8px 12px; background-color: #f94c66; color: white; border: none; border-radius: 8px; cursor: pointer;">Xoá</button>
          </div>
        `
        )
        .join("");

      // Sự kiện Xoá
      document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const idToRemove = e.target.dataset.id;
          cart = cart.filter((item) => item.id !== idToRemove);
          localStorage.setItem("cart", JSON.stringify(cart));
          renderCart();
        });
      });

      // Sự kiện Tăng
      document.querySelectorAll(".increase-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = e.target.dataset.id;
          const product = cart.find((item) => item.id === id);
          if (product) {
            product.quantity += 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
          }
        });
      });

      // Sự kiện Giảm
      document.querySelectorAll(".decrease-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = e.target.dataset.id;
          const product = cart.find((item) => item.id === id);
          if (product) {
            product.quantity -= 1;
            if (product.quantity <= 0) {
              cart = cart.filter((item) => item.id !== id);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
          }
        });
      });
    };

    renderCart();
  }
});
