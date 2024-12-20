// O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceções no Javascript.
"use strict"

function showMessage() {
  let personName = "Rodrigo"

  console.log("Olá", personName)
}

showMessage()

class Student {
  get point() {
    return 7
  }
}

let student = new Student()
// Tenta mudar uma propriedade de somente leitura.
// student.point = 10

// Tenta deletar uma propriedade de um objeto que não posso deletar.
// delete window.document

// Quando passamos parâmetros duplicados.
function sum(a, a, c) {
  return a + a + c
}
