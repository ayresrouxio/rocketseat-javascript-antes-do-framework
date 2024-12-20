// destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const product = {
  description: "Teclados",
  price: 150,
}

const { description, price } = product

console.log(description)
console.log(price)

function newProduct({ description, price }) {
  console.log("Novo Produto:")
  console.log(description)
  console.log(price)
}

newProduct({
  description: "Mouse",
  price: 70,
})
