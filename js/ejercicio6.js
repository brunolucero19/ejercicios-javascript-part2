/*Manipulación de Strings: Crea una función que reciba una cadena y devuelva la misma cadena con las palabras en orden inverso. Utiliza métodos de manipulación de cadenas y arrays.*/

const palabra = 'bruno'
const letras = palabra.split('')

function inversa(letras){
    let arreglo_inversa = []
    let resultado_inversa = ''
    for (let letra of letras) {
        arreglo_inversa.unshift(letra)
    }
    for (let letra of arreglo_inversa){
        resultado_inversa = resultado_inversa + letra
    }
    return resultado_inversa
}

const palabra_inversa = inversa(letras)
console.log(`La palabra original es: ${palabra}`)
console.log(`La palabra inversa es: ${palabra_inversa}`)