// destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const data = ["Rodrigo Gonçalves", "rodrigo@email.com"]

// Desestruturando array.
const [username, email] = data

console.log(username)
console.log(email)

const fruits = ["Banana", "Maça", "Orange"]

// Desestruturar somente o primeiro.
const [banana] = fruits
console.log(banana)

// Ignorando o primeiro na desestruturação.
const [_, apple] = fruits
console.log(apple)

// Ignorando o primeiro e o segundo.
const [, , orange] = fruits
console.log(orange)
