const products = document.querySelectorAll(".product");

products.forEach((product) => {
  const decButton = product.querySelector(".product__quantity-control_dec");
  const incButton = product.querySelector(".product__quantity-control_inc");
  const quantityValue = product.querySelector(".product__quantity-value");
  const addToCartButton = product.querySelector(".product__add");

  let quantity = 1;

  decButton.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
    }
  });

  incButton.addEventListener("click", () => {
    quantity++;
    quantityValue.textContent = quantity;
  });

  addToCartButton.addEventListener("click", () => {
    const productId = product.dataset.id;
    const productImage = product.querySelector(".product__image").src;

    addToCart(productId, productImage, quantity);
  });
});

function addToCart(id, image, count) {
  const cartProducts = document.querySelector(".cart__products");
  const cartProduct = cartProducts.querySelector(
    `.cart__product[data-id="${id}"]`
  );

  if (cartProduct) {
    const productCountElement = cartProduct.querySelector(
      ".cart__product-count"
    );
    const currentCount = parseInt(productCountElement.textContent);
    productCountElement.textContent = currentCount + count;
  } else {
    const newCartProduct = document.createElement("div");
    newCartProduct.className = "cart__product";
    newCartProduct.dataset.id = id;
    newCartProduct.innerHTML = `
                <img class="cart__product-image" src="${image}" alt="">
                <div class="cart__product-count">${count}</div>
            `;
    document.querySelector(".cart__products").appendChild(newCartProduct);
  }
}
