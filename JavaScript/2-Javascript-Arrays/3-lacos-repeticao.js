// Procurando na Lista
/*
const aluno = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];
const listaDeAlunosEMedias = [aluno, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) { //includes() confere se o parâmetro passado está incluso na lista
        console.log(`${aluno} está cadastrado!`);

        const indice = listaDeAlunosEMedias[0].indexOf(aluno); // indexOf() retorna o índice da lista
        const mediaDoAluno = listaDeAlunosEMedias[1][indice];
        console.log(`${aluno} tem a média ${mediaDoAluno}.`);
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Caio");
*/


// Desestruturando uma Lista
/*
const aluno = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];
const listaDeAlunosEMedias = [aluno, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) { //includes() confere se o parâmetro passado está incluso na lista
        const [alunos, medias] = listaDeAlunosEMedias;

        console.log(`${aluno} está cadastrado!`);
        const indice = alunos.indexOf(aluno); // indexOf() retorna o índice da lista
        const mediaDoAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaDoAluno}.`);
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Caio");
*/


// For
/*
const numeros = [100, 200, 300, 400, 500, 600];
console.log(numeros);

// Primeira expressão: é o valor de início.
// Segunda expressão: é a condição de parada.
// Terceira expressão: é o incremento.

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}
*/


// Média com For
/*
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let indice = 0; indice < notas.length; indice++) {
    somaDasNotas += notas[indice];
}

const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}.`);
*/


// For of

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) { // Percorra todos os elementos de Notas
    somaDasNotas += nota;
}
const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}.`);
