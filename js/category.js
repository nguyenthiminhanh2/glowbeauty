const grid = document.getElementById("product-grid");
const tabs = document.querySelectorAll(".tab");
const shopAllBtn = document.getElementById("shopAllBtn");

let allProducts = [];

async function fetchProducts() {
//   const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
  const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
  const data = await res.json();
  allProducts = data;
  renderProducts("all", 6); // Mặc định chỉ hiển thị 6 sản phẩm
}

function renderProducts(category, limit = 6) {
  grid.innerHTML = "";

  const filtered = category === "all"
    ? allProducts
    : allProducts.filter(p => p.product_type === category);

  const shown = limit ? filtered.slice(0, limit) : filtered;

  shown.forEach(p => {
    const a = document.createElement("a");
    a.href = `product.html?id=${p.id}`; 
    a.className = "product-card";
    a.innerHTML = `
      <img src="${p.image_link || 'https://via.placeholder.com/200'}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>${p.description ? p.description.slice(0, 60) + '...' : 'No description available.'}</p>
      <span style="color: #ff3c78; font-weight: bold;">${p.price ? `${p.price} USD` : 'N/A'}</span>
    `;
    grid.appendChild(a);
  });
}

// Bấm tab để lọc sản phẩm
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const cat = tab.dataset.category;
    renderProducts(cat, 6); // vẫn hiển thị 6 khi chuyển tab
  });
});

// Bấm Shop All để hiện hết
shopAllBtn.addEventListener("click", () => {
  const current = document.querySelector(".tab.active").dataset.category;
  renderProducts(current, null); // null để hiển thị toàn bộ
});

fetchProducts();
