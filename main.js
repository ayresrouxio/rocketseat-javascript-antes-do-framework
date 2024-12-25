/*
Utilizando o fetch com then.

fetch("http://localhost:3333/products")
  .then((response) => response.json())
  .then((data) => console.log(data))
*/

// Utilizando fetch com async/await.
async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products")
  const data = await response.json()

  console.log(data)
}

async function fetchProductById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`)
  const data = await response.json()

  console.log(data)
}

// fetchProducts()
// fetchProductById(3)

const productName = document.querySelector("#name")
const productPrice = document.querySelector("#price")
const form = document.querySelector("form")

addEventListener("submit", async (event) => {
  event.preventDefault()

  await fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date().getTime(),
      name: productName.value,
      price: Number(productPrice.value),
    }),
  })
})
