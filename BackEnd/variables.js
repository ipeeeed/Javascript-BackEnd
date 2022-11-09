/*
var forma = 'triângulo'
var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area)
var area;
*/

/*
let forma = 'retângulo'
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2
}

console.log(area);
*/

/*
const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;
if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2
}

console.log(area);
*/


// Boolean - truthy or falsy
/*
const usuarioLogado = true
const contttapaga = false

console.log(0 == false)
console.log("" == false)
console.log(1 == true)
*/


// null e undefined
/*
let minhaVar;
let varNull = null;

console.log(minhaVar)
console.log(varNull)

let numero = 3;
let texto = "Alura";

console.log(typeof numero)
console.log(typeof texto)
console.log(typeof minhaVar)
console.log(typeof varNull)
*/


// Conversão de Tipos
//conversão implicita
const numero = 456;
const numeroString = "456";
console.log(numero == numeroString)
console.log(numero === numeroString)

console.log(numero + numeroString)

//conversão explicita      -> Number() -> String()
console.log(numero + Number(numeroString))