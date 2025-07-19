document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cartItems");

  if (cartContainer) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const renderCart = () => {
      if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Giỏ hàng trống</p>";
        return;
      }

      cartContainer.innerHTML = cart
        .map(
          (item, index) => `
          <div class="cart-item" data-index="${index}" style="display: flex; align-items: center; gap: 20px; padding: 10px; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 10px;">
            <img src="${item.image}" width="80" alt="${item.name}" style="border-radius: 8px;">
            <div style="flex: 1;">
              <h4>${item.name}</h4>
              <p>Giá: ${item.price} USD</p>
              <div style="display: flex; align-items: center; gap: 10px;">
                <button class="decrease-btn" data-index="${index}" style="padding: 4px 10px;">-</button>
                <span>${item.quantity}</span>
                <button class="increase-btn" data-index="${index}" style="padding: 4px 10px;">+</button>
              </div>
            </div>
            <button class="remove-btn" data-index="${index}" style="padding: 8px 12px; background-color: #f94c66; color: white; border: none; border-radius: 8px; cursor: pointer;">Xoá</button>
          </div>
        `
        )
        .join("");

      // Chỉ giữ 1 lần tính và hiển thị tổng tiền
      const totalAmount = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      const totalHTML = `
        <div style="text-align: right; font-weight: bold; font-size: 25px; margin-top: 20px; color:#E51644;">
          Tổng tiền: ${totalAmount.toFixed(2)} USD
        </div>
      `;

      cartContainer.innerHTML += totalHTML;

      // Nút Xoá
      document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const index = parseInt(e.target.dataset.index);
          cart.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
          renderCart();
        });
      });

      // Nút Tăng
      document.querySelectorAll(".increase-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const index = parseInt(e.target.dataset.index);
          cart[index].quantity += 1;
          localStorage.setItem("cart", JSON.stringify(cart));
          renderCart();
        });
      });

      // Nút Giảm
      document.querySelectorAll(".decrease-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const index = parseInt(e.target.dataset.index);
          if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
          } else {
            cart.splice(index, 1);
          }
          localStorage.setItem("cart", JSON.stringify(cart));
          renderCart();
        });
      });
    };

    renderCart();
  }
});

//  Nút "Buy Now"
document.getElementById("orderBtn").addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Giỏ hàng đang trống.");
    return;
  }

  localStorage.setItem("checkout", JSON.stringify(cart));
  window.location.href = "checkout.html";
});
