/*Uso de for...of con Objetos: Escribe una función que reciba un objeto con propiedades de alumnos y sus notas (por ejemplo, {Juan: 8, Maria: 9, Pedro: 7}) y devuelva el promedio de las notas. Utiliza un bucle for...of para iterar sobre los valores del objeto.*/

let notas = {
    Julian : 8,
    Facundo : 8,
    Sofía : 10,
    Valentino : 7,
    Bruno : 9,
    Juan_Pablo : 9
}

function promedio(alumnos){
    let suma_notas = 0
    let valores_notas = Object.values(alumnos)
    for (let valor of valores_notas) {
        suma_notas = suma_notas + valor
    }
    let cant_notas = valores_notas.length
    let promedio_notas = suma_notas / cant_notas
    return promedio_notas
}

let resultado_promedio = promedio(notas)
console.log(`El promedio de notas es: ${resultado_promedio}`)

