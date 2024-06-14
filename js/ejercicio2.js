/*Crea una función que reciba una cadena y devuelva una nueva cadena con las vocales en mayúsculas. Utiliza un bucle for para iterar sobre los caracteres de la cadena.*/

const cadena = 'abecedario'

const caracteres = cadena.split('')

function vocales_a_mayusculas (letras){
    let cadena_resultado = ''
    let longitud_cadena = letras.length
    for (let i=0; i<longitud_cadena; i++) {
        if(letras[i]=='a' || letras[i]=='e' || letras[i] =='i' || letras[i] =='o' || letras[i] =='u'){
            cadena_resultado = cadena_resultado + letras[i].toUpperCase();
        } else{
            cadena_resultado = cadena_resultado + letras[i]
        }
    }
    return cadena_resultado
}

const resultado = vocales_a_mayusculas(caracteres)
console.log(`La palabra es: ${cadena}`)
console.log(`El resultado es: ${resultado}`)