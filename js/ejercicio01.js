const areaCirculo = (radio) => Math.pow(radio, 2) * Math.PI;
const areaTriangulo = (base, altura) => (base * altura) / 2;
const areaCuadrado = (lado)=> lado * lado;

const CIRCULO = 1;
const TRIANGULO = 2;
const CUADRADO = 3; 


let figura = prompt("introduce la figura a calcular")

if (figura === CIRCULO) {
    let radio = prompt("introduce el radio del círculo")
    console.log(areaCirculo(radio));
} else if (figura === TRIANGULO) {
    let base = prompt("introduce la base del triángulo")
    let altura = prompt("introduce la altura del triángulo")
    console.log(areaTriangulo(base, altura));
} else if (figura === CUADRADO) {
    let lado = prompt("introduce el lado del cuadrado")
    console.log(areaCuadrado(lado));
}
