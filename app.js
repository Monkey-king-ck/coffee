const coffees = [
  {
    id: 1,
    name: "Americano",
    price: 10,
  },
  {
    id: 2,
    name: "Black Coffee",
    price: 5,
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 7,
  },
  {
    id: 4,
    name: "Espresso",
    price: 3,
  },
  {
    id: 5,
    name: "Flat White",
    price: 9,
  },
  {
    id: 6,
    name: "Latte",
    price: 6,
  },
  {
    id: 7,
    name: "Macchiato",
    price: 5,
  },
  {
    id: 8,
    name: "Mocha",
    price: 12,
  },
]

if (window.location.pathname === "/coffee-selection.html") {
  display(coffees)
}

function handleSearch() {
  const query = document
    .getElementById("search-input")
    .value.toLowerCase()
    .split(" ")
    .join("")
  const searchedCoffees = coffees.filter((coffee) =>
    coffee.name.toLowerCase().split(" ").join("").includes(query)
  )
  display(searchedCoffees)
}

function display(coffees) {
  const container = document.querySelector("#selection-items")
  container.innerHTML = ""
  coffees.forEach((coffee) => {
    const item = document.createElement("div")
    item.classList.add("item")
    item.innerHTML = `<img src="/image/coffee/${coffee.name
      .split(" ")
      .join("-")
      .toLowerCase()}.jpeg" alt="coffee" /><div><h3>${coffee.name}</h3><span>$${
      coffee.price
    }</span><button onclick="addToCart('${coffee.id}', '${coffee.name}', ${
      coffee.price
    })">Add to Cart</button></div>`
    container.appendChild(item)
  })
}
