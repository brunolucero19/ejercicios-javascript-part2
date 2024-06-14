/*Escribe una función que reciba un array de números y retorne un nuevo array con cada número elevado al cuadrado. Utiliza un bucle for...of para iterar sobre los elementos del array.*/

const numeros = [1,2,3,4,5]

function potenciacuadrada (nros){
    let resultado = []
    for (let numero of nros) {
        let resultado_potencia = Math.pow(numero,2)
        resultado.push(resultado_potencia)
    }
    return resultado
}

const numeros_al_cuadrado = potenciacuadrada(numeros)
console.log(`El arreglo es: `)
console.log(numeros)
console.log(`El resultado del arreglo elevado al cuadrado es:`)
console.log(numeros_al_cuadrado)