import { products } from './product.js';

const container = document.getElementById('productList');

// render sản phẩm
products.forEach((product) => {
  const card = document.createElement('div');
  card.classList.add('product-card'); // ❗m bị sai dòng này nè (dùng classList.add đúng cách)

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius: 10px;">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p style="color: red;"><strong>${product.price.toLocaleString()}đ</strong></p>
    <button style="display: none;" class="shop-now">Shop Now</button>
  `;

  // sự kiện click để phóng to
  card.addEventListener('click', () => {
    document.querySelectorAll('.product-card').forEach(c => {
      c.classList.remove('active');
      c.querySelector('.shop-now').style.display = 'none';
    });

    card.classList.add('active');
    card.querySelector('.shop-now').style.display = 'block';
  });

  container.appendChild(card);
});