// Rest params (...) permite representar um número indefinido de argumentos como um array.

function values(a, ...rest) {
  console.log(a)

  // Exibe o conteúdo do array.
  console.log(rest)

  console.log(...rest)
}

values(2, 1, 3, 4)
