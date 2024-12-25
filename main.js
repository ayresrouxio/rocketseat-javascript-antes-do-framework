// Função que retorna uma Promise.
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona.
    setTimeout(() => {
      const isSuccess = true

      if (isSuccess) {
        resolve("A operação foi concluída com sucesso!")
      } else {
        reject("Algo deu errado!")
      }
    }, 3000) // Simula operação que leva 3 segundos.
  })
}

const fetch = async () => {
  try {
    const response = await asyncFunction()
    console.log(response)
  } catch (error) {
    console.log(error)
  } finally {
    console.log("Fim da execução")
  }
}

fetch()

console.log("Segue o fluxo...")
