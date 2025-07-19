document.addEventListener("DOMContentLoaded", () => {
    const orderItemsContainer = document.getElementById("orderItems");
    const totalAmountEl = document.getElementById("totalAmount");

    //lấy dữ liệu từ checkout
    let checkoutData = JSON.parse(localStorage.getItem("checkout"));
    let cartData = JSON.parse(localStorage.getItem("cart"));
  
    const items = checkoutData || cartData || [];
  
    if (items.length === 0) {
      orderItemsContainer.innerHTML = "<p>Không có sản phẩm nào trong đơn hàng.</p>";
      totalAmountEl.textContent = "0 USD";
      return;
    }
  
    let total = 0;
    orderItemsContainer.innerHTML = "";
  
    items.forEach(item => {
      const li = document.createElement("li");
      li.classList.add("checkout-item");
  
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="checkout-item-img">
        <div class="checkout-item-info">
          <h4>${item.name}</h4>
          <p>Giá: ${item.price} USD</p>
          <p>Số lượng: ${item.quantity}</p>
        </div>
      `;
  
      orderItemsContainer.appendChild(li);
  
      total += parseFloat(item.price) * item.quantity;
    });
  
    totalAmountEl.textContent = `${total.toFixed(2)} USD`;
  });

  // Xử lý submit form
  const form = document.querySelector(".checkout-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Đặt hàng thành công!");
    localStorage.removeItem("checkout");
    window.location.href = "index.html";
  });
