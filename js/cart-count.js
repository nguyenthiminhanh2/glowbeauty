document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = `(${totalQuantity})`;
    }
  });
  