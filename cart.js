const cartBtn = document.createElement("div")
cartBtn.classList.add("cart-btn")
cartBtn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'
cartBtn.onclick = openCart
document.body.appendChild(cartBtn)

const cartDiv = document.createElement("div")
cartDiv.classList.add("cart-container")
cartDiv.innerHTML = `
<i class="fa-solid fa-xmark" onclick="closeCart()"></i>
<ul>

</ul>
<p>Total: <span class="price-tag"></span></p>
<div class="btns">
  <button class="btn" onclick="clearCart()"><i class="fa-solid fa-trash-can"></i></button>
  <button class="btn" onclick="checkOut()"><i class="fa-solid fa-dollar-sign"></i></button>
</div>
`
document.body.appendChild(cartDiv)

updateCart()

function getCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  return cart
}

function addToCart(id, name, price) {
  const cart = getCart()
  const newItem = { id, name, price, quantity: 1 }
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
      li.innerHTML = `<div class="name">${cart[i].name}</div><div class="price">$${cart[i].price} x ${cart[i].quantity}</div>`
      cartUl.appendChild(li)
      price += cart[i].price * cart[i].quantity
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
  cartDiv.style.transform = "translateX(100%)"
}

function clearCart() {
  localStorage.removeItem("cart")
  updateCart()
}
