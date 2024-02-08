// Adicione essas funções ao seu arquivo app.js

let cartItems = [];

function showHome() {
  hideAllSections();
  document.getElementById('home').classList.add('active');
}

function showProducts() {
  hideAllSections();
  document.getElementById('products').classList.add('active');
  // Adicione lógica para carregar e exibir os produtos na seção de produtos, se necessário
}

function showCart() {
  hideAllSections();
  updateCart();
  document.getElementById('cart').classList.add('active');
  // Adicione lógica para exibir os itens do carrinho na seção de carrinho, se necessário
}

function hideAllSections() {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => {
    section.classList.remove('active');
  });
}

function addToCart(productName, productPrice) {
  const product = { name: productName, price: productPrice };
  cartItems.push(product);
  updateCart();
}

function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = ''; // Limpar a lista antes de recriá-la

  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItemsList.appendChild(listItem);
  });

  const cartTotal = document.getElementById('cart-total').querySelector('span');
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  cartTotal.textContent = totalAmount.toFixed(2);
}

// Inicialmente, exiba a seção Home
showHome();

// Adicione essas alterações à sua função showProducts no arquivo app.js

function showProducts() {
  hideAllSections();
  document.getElementById('products').classList.add('active');
  // Adicione lógica para carregar e exibir os produtos na seção de produtos, se necessário
  // Você pode adicionar conteúdo aqui ou chamar uma função que carrega dinamicamente os produtos.
  // Exemplo de conteúdo estático:
  document.getElementById('products').innerHTML = `
    <div class="product">
      <img src="produto1.jpg" alt="Produto 1">
      <h3>Produto 1</h3>
      <p class="price">R$ 99,99</p>
      <button onclick="addToCart('Produto 1', 99.99)">Adicionar ao Carrinho</button>
    </div>

    <div class="product">
      <img src="produto2.jpg" alt="Produto 2">
      <h3>Produto 2</h3>
      <p class="price">R$ 129,99</p>
      <button onclick="addToCart('Produto 2', 129.99)">Adicionar ao Carrinho</button>
    </div>

    <!-- Adicione mais produtos conforme necessário -->
  `;
}

