updateCart()

function getCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  return cart
}

function addToCart(id, name, price) {
  const cart = getCart()
  const newItem = { id, name, price }
  if (!cart.includes(newItem)) {
    cart.push(newItem)
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCart()
  }
}

function updateCart() {
  const cart = getCart()
  const cartUl = document.querySelector(".cart-container ul")
  const priceTag = document.querySelector(".cart-container .price-tag")
  cartUl.innerHTML = `<li><div class="name">Name</div><div class="price">Price</div></li>`
  if (cart.length > 0) {
    let price = 0
    for (let i = 0; i < cart.length; i++) {
      const li = document.createElement("li")
      li.innerHTML = `<div class="name">${cart[i].name}</div><div class="price">$${cart[i].price}</div>`
      cartUl.appendChild(li)
      price += cart[i].price
    }
    priceTag.textContent = "$" + price
  } else {
    const li = document.createElement("li")
    li.innerHTML = `<div class="name">No item added.</div>`
    cartUl.appendChild(li)
    priceTag.textContent = "$0"
  }
}

function openCart() {
  const cartDiv = document.querySelector(".cart-container")
  cartDiv.style.transform = "translateX(0px)"
}

function closeCart() {
  const cartDiv = document.querySelector(".cart-container")
  cartDiv.style.transform = "translateX(450px)"
}

function clearCart() {
  localStorage.removeItem("cart")
  updateCart()
}
