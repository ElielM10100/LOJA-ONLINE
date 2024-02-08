// Adicione essas funções ao seu arquivo app.js

function showCardDetails() {
    const cardDetails = document.getElementById('card-details');
    cardDetails.style.display = 'block';
  }
  
  function checkout() {
    // Implemente a lógica de checkout aqui
    // Certifique-se de tratar os dados do cartão com segurança em um ambiente de produção
    alert('Compra realizada com sucesso!');
    // Limpar o carrinho e redirecionar para a página de confirmação ou outra página desejada
    clearCart();
    // Redirecionar para a página de confirmação ou outra página desejada
    window.location.href = 'confirmacao.html';
  }
  
  function clearCart() {
    // Implemente a lógica para limpar o carrinho (remover itens, zerar total, etc.)
    // Aqui, estamos apenas removendo os itens da lista no HTML
    const cartItems = document.getElementById('cart-items');
    while (cartItems.firstChild) {
      cartItems.removeChild(cartItems.firstChild);
    }
  
    // Zerar o total
    updateTotal(0);
  }
  
  function updateTotal(total) {
    const cartTotal = document.getElementById('cart-total').querySelector('span');
    cartTotal.textContent = total.toFixed(2);
  }
  