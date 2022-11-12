// Média de forEach
/*
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota, indice) { // Função anônima ou callback.
    somaDasNotas += nota;
    console.log(indice, nota);
});
const media = somaDasNotas / notas.length;
console.log(`\nA média das notas é ${media}.`);
*/
// Revisando callbacks
/*
const nomes = ["Eduardo", "Mari", "Camis"];

nomes.forEach(function (nome) {
    console.log(nome);
});

nomes.forEach((nome) => {
    console.log(nome);
});

function imprimeNome (nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome); // para imprimir a referência da função não é necessário colocar parênteses.
*/


// Método map()
/*
const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});
console.log(notasAtualizadas);
*/


// Alteração de strings com map()

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase()); // toUpperCase é para deixar os caracteres em caixa alta.

console.log(nomesPadronizados);
