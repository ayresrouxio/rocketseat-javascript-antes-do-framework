const book = {
  title: "Objetos Imutáveis",
  category: "javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@email.com",
  },
}

const updatedBook = {
  ...book,
  title: "Criando um Front-end Moderno com HTML",
  category: "html",
  type: "Programming",
}

console.log(book)

console.log(updatedBook)

// Utilizando operador de desestruturação (rest operator) para remover propriedades.
const { author, ...bookWithoutCategory } = book
console.log(bookWithoutCategory)
