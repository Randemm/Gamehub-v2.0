let cartArray = [];
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
function showCart(cartItems) {
  cart.style.display = "block";
  cartList.innerHTML = "";
  let total = 0;
  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    console.log(cartElement);
    cartList.innerHTML += `<div class="cart-item">
            <h4>${cartElement.name}</h4>
            <img src ="${cartElement.image}" alt="${cartElement.name}" class="cart-image">
            <p class="cartprice">$${cartElement.price}</p>
            <button class="revert-button">X</button>
          </div>
      `;
  });
  totalContainer.innerHTML = `Total: $${total.toFixed(2)}`;
}
var currentCart = JSON.parse(localStorage.getItem("cartList"));

if (currentCart.length > 0) {
  currentCart.forEach((cartItem) => cartArray.push(cartItem));
  showCart(currentCart);
}
