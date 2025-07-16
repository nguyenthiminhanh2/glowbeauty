document.addEventListener("DOMContentLoaded", () => {
    const addToCartBtn = document.getElementById("addToCartBtn");
  
    addToCartBtn.addEventListener("click", () => {
      const id = addToCartBtn.dataset.id;
      const name = addToCartBtn.dataset.name;
      const price = addToCartBtn.dataset.price;
      const image = addToCartBtn.dataset.image;
  
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      const existing = cart.find((item) => item.id == id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ id, name, price, image, quantity: 1 });
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Đã thêm vào giỏ hàng!");
    });
  });
  