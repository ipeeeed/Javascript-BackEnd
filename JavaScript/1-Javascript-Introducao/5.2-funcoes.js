// parâmetros da função
/*
function soma(num1, num2) {
    return num1 + num2
}
console.log(soma(2, 2));
console.log(soma(-2, 5));
console.log(soma(10, -14));
*/

// parâmetros x argumentos

// ordem dos parâmetros
/*
function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(24, "Pedro"));
*/

function soma(num1, num2) {
    return num1 + num2
}

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(7, 5)));
console.log(multiplica(soma(4, 5)));