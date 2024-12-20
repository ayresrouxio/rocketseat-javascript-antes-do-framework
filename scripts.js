/*
  O método reduce() é utilizado para reduzir um array a um único valor.

  Parâmetros:
  - Array original (values)
  - Acumulador (accumulator)
  - Valor da iteração (currentValue)
  - Valor inicial (0)
  - Index (index da iteração atual - opcional)
*/

const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {
  return accumulator + currentValue
}, 0)

console.log(sum)
