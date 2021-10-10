const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const cartMessage = document.querySelector(".cartmessage");
const totalContainer = document.querySelector(".total");
const checkoutButton = document
  .querySelector(".checkout")
  .addEventListener("click", deleteCartList);
let total = 0;
cartItems.forEach(function (cartElement) {
  total += cartElement.price;
  cartMessage.innerHTML = "<h1> Shopping cart </h1>";
  cartContainer.innerHTML += `
  <div class="cart-item">
        <img src ="${cartElement.image}" alt="${cartElement.name}" class="cart-image">
        <h4 class="cart-item-name">${cartElement.name}</h4>
        <p class="cartprice">$${cartElement.price}</p>
    </div>
`;
});
totalContainer.style.display = "block";
totalContainer.innerHTML = `Total: $${total.toFixed(2)}`;

function deleteCartList() {
  window.localStorage.removeItem("cartList");
  window.location.replace("payment.html");
}
