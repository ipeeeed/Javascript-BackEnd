// == (comparação implicita)

const numero = 5;
const texto = "5";
console.log(numero == texto)
console.log(numero === texto)


// typeof
/*
console.log(typeof numero)
console.log(typeof texto)
*/
// ==  ou !=  compara somente o valor
// === ou !== compara o valor e o tipo de dado


// conversão explicita
/*
Number()
String()
*/


// Operadores ternários
const idadeMinima = 18;
const idadeCliente = 19;

/*
if (idadeCliente >= idadeMinima) {
    console.log("Cerveja")
} else {
    console.log("Suco")
}
*/

                //condição                //true     //false
//console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
                                //? = comparação    //: = separação


// Template String
/*
const nome = "Pedro";
const idade = 2022-1998;
const cidadeDeNascimento = "Campo Grande - MS";

const apresentacao = `Meu nome é ${nome}!\nTenho ${idade} anos e nasci em ${cidadeDeNascimento}!`;
console.log(apresentacao);
*/

/*
const nome = "Pedro";
const idade = 24;
const bebidaMaior = "vinho";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
*/