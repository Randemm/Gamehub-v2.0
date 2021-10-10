import { productArray } from "./constants/productList.js";
import { getList } from "./constants/productListApi.js";

getList().then((list) => {
  list.forEach((product) => {
    if (product.categories[0].name === "trending")
      productsContainer.innerHTML += `
    <div class="product">
    <a href="product.html?id=${product.id}">
        <img src="${product.images[0].src}" alt="${product.name}">
        <p class="prodname">${product.name}</p>
        <p class="plusprice">with plus</p>
        <div class="product-price">$${product.price}</div>
       </a>
        <button class="addcart-button" data-product="${product.id}">Add to cart</button>
    </div> 
    `;
    if (product.categories[0].name === "Pre-order")
      preorderWrap.innerHTML += `
    <div class="productwrap">
      <div onclick="location.href='product.html?id=${product.id}'" class="phototag">
        <div class="prelabel">
          PRE-ORDER
        </div>
          <img src="${product.images[0].src}" alt="${product.name}">
        </div>
      <div onclick="location.href='product.html?id=${product.id}'" class="game-info">
        <p class="prodname">${product.name}</p>
      <div class="textwrap">
        <span>from</span>
        <div class="arialprice">
          <p>$${product.price}</p>
        </div>
        </div>
      </div>
        <button class="addcart-button2" data-product="${product.id}">Add to cart</button>
    <div class="divider"></div>
  `;
    if (product.categories[0].name === "Near-new")
      nearlynewWrap.innerHTML += `
  <div class="productwrap">
    <div onclick="location.href='product.html?id=${product.id}'" class="phototag">
      <img src="${product.images[0].src}" alt="${product.name}">
    </div>
    <div onclick="location.href='product.html?id=${product.id}'" class="game-info">
  <p class="prodname">${product.name}</p>
    <div class="textwrap">
      <span>from</span>
      <div class="arialprice">
        <p>$${product.price}</p>
        </div>
        </div>
      </div>
        <button class="addcart-button2" data-product="${product.id}">Add to cart</button>
    <div class="divider">
    </div>
  `;
    if (product.categories[0].name === "bestseller")
      bestWrap.innerHTML += `
  <div class="productwrap">
    <div onclick="location.href='product.html?id=${product.id}'" class="phototag">
      <img src="${product.images[0].src}" alt="${product.name}">
    </div>
    <div onclick="location.href='product.html?id=${product.id}'" class="game-info">
      <p class="prodname">${product.name}</p>
      <div class="textwrap">
      <span>from</span>
        <div class="arialprice">
          <p>$${product.price}</p>
          </div>
        </div>
      </div>
        <button class="addcart-button2" data-product="${product.id}">Add to cart</button>
    <div class="divider">
    </div>
  `;
  });
});

const productsContainer = document.querySelector(".products");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let cartArray = [];

const preorderWrap = document.querySelector(".preorders");
const nearlynewWrap = document.querySelector(".nearlyNew");
const bestWrap = document.querySelector(".bestSellers");
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.onclick = function (event) {
    const itemToAdd = productArray.find(
      (item) => item.id === event.target.dataset.product
    );
    cartArray.push(itemToAdd);
    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});

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
