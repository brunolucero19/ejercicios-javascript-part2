/*Uso de for y Arrays: Escribe una función que reciba dos arrays de la misma longitud y devuelva un nuevo array con la suma de los elementos correspondientes. Utiliza un bucle for para iterar sobre los índices de los arrays.*/

let numeros1= [7,9,3]
let numeros2= [4,5,6]

function suma_elementos(nros1,nros2){
    let longitud_nros1 = nros1.length
    let longitud_nros2 = nros2.length
    let resultado_suma= 0
    let resultado_numeros=[]
    for (let i=0; i<longitud_nros1;i++) {
        for (let j=0; j<longitud_nros2; j++) {
            if(i==j){
                resultado_suma = nros1[i] + nros2[j]
                resultado_numeros.push(resultado_suma)
            }
        }
    }
    return resultado_numeros
}

if(numeros1.length == numeros2.length){
    const suma_arrays = suma_elementos(numeros1,numeros2)
    console.log('El array con la suma de los elementos correspondientes es:')
    console.log(suma_arrays)
}else{
    console.log('La función no se puede realizar ya que los arreglos tienen distinta longitud.')
}
