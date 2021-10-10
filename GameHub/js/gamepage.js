import { productArray } from "./constants/productList.js";
import { getProduct, strip } from "./constants/productListApi.js";

const gameTitle = document.querySelector(".game-title");
const gameDescription = document.querySelector(".game-description");
const gameImage = document.querySelector(".image-container");
const gameVideo = document.querySelector(".youtube-embed");
const gamePrice = document.querySelector(".price-arial");

getProduct().then((product) => {
  console.log(product);
  gameTitle.innerHTML += `${product.name}`;
  gameDescription.innerHTML += `${product.description}`;
  gamePrice.innerHTML += `$${product.price}`;
  gameImage.innerHTML += `<img src="${product.images[0].src}" alt="${product.name}" class="gamecover"/>`;
  gameVideo.innerHTML += `
    <iframe
        title="${product.name} trailer"
        src="https://www.youtube.com/embed/${strip(product.short_description)}"
        width="560"
        height="315"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
`;
});

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
