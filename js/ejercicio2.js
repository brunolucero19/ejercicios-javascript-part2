/*Crea una función que reciba una cadena y devuelva una nueva cadena con las vocales en mayúsculas. Utiliza un bucle for para iterar sobre los caracteres de la cadena.*/

const cadena = 'abecedario'

const caracteres = cadena.split('')

function vocales_a_mayusculas (letras){
    let cadena_resultado = ''
    for (let letra of letras) {
        if(letra=='a' || letra=='e' || letra =='i' || letra=='o' || letra =='u'){
            cadena_resultado = cadena_resultado + letra.toUpperCase();
        } else{
            cadena_resultado = cadena_resultado + letra
        }
    }
    return cadena_resultado
}

const resultado = vocales_a_mayusculas(caracteres)
console.log(`La palabra es: ${cadena}`)
console.log(`El resultado es: ${resultado}`)