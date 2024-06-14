/*Clases y Métodos: Define una clase Rectangle que tenga dos propiedades width y height. Incluye métodos para calcular el área y el perímetro del rectángulo.*/

class Rectangle{
    
    constructor(width,height){
        this.width = width
        this.height = height
    }
    area(){
        let resultado_area = this.width * this.height
        console.log(`El ancho del rectángulo es: ${this.width} y el largo es: ${this.height} , por lo que el área del rectángulo es: ${resultado_area}`)
    }
    perimetro(){
        let resultado_perimetro = (this.width*2) + (this.height*2)
        console.log(`El ancho del rectángulo es: ${this.width} y el largo es: ${this.height} , por lo que el perímetro del rectángulo es: ${resultado_perimetro}`)
    }
}

let rectangulo1 = new Rectangle(10,20)
rectangulo1.area()
rectangulo1.perimetro()