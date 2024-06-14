

const numero = 4

function propiedades_numero (nro){
    let objeto = {
        cuadrado : Math.pow(nro,2),
        raíz_cuadrada : Math.sqrt(nro),
        valor_absoluto : Math.abs(nro)
    }
    return objeto
}

let propiedades = propiedades_numero(numero)
console.log(`El número es: ${numero}`)
console.log(`Sus propiedades son: `)
console.log(propiedades)