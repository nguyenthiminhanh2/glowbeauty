function searchFunction() {
    const input = document.getElementById("searchInput").value.toLowerCase();
  
    const products = [
      { name: "lipstick", url: "lipstick.html" },
      { name: "mascara", url: "mascara.html" },
      { name: "foundation", url: "foundation.html" },
      { name: "eyeliner", url: "eyeliner.html" },
      { name: "eyeshadow", url: "eyeshadow.html" }
    ];
  
    const match = products.find(product => product.name.includes(input));
  
    if (match) {
      window.location.href = match.url;
    } else {
      alert("Không tìm thấy sản phẩm nào phù hợp với '" + input + "'");
    }
  }

  let cartCount = 0;
  function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = `(${cartCount})`
  }
