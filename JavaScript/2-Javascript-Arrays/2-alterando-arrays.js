// Separando a Lista

const alunos = [
    "João",
    "Maria",
    "Ana",
    "Beatriz",
    "Pedro",
    "Eduardo",
    "Lucas",
    "Gabriel",
    "Guilherme",
    "Vivian",
    "Isabela",
    "Rafaela",
    "Carlos",
    "Renata",
    "Renan",
    "Aline",
    "Vinícius",
    "Karen",
    "Paulo",
    "Kaio",
];

// O slice() separa a lista de acordo com os parâmetros adicionados.
// O primeiro valor é onde começa a separação da lista.
// O segundo valor pode ser colocado para separar o final desta lista.
/*
const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);
*/

// Atualizando Lista

// splice() para remover da Lista
// primeiro parâmetro é para indicar o começo da remoção
// Segundo parâmetro é para indicar quantos elementos quer que remova apartir do elemento indicado no primeiro parâmetro.
// Terceiro parâmetro você pode colocar para adicionar um elemento no lugar em que os outros foram removidos.
/*
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
nomes.splice(1, 2, "Rodrigo");
console.log(nomes);
*/


// Juntando listas

// concast() junta duas listas em ordem de lista.
// concat vem de Concatenação.
/*
const salaJS = ["Evandro", "Camis", "Mari"];
const SalaPython = ["Ju", "Leo", "Raquel"];

const salasUnificadas = salaJS.concat(SalaPython);

console.log(salasUnificadas);
*/

const aluno = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];
const listaDeAlunosEMedias = [aluno, medias]; // Virou uma MATRIZ.

console.log(`A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}. 
A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}`);






/*
listaDeAlunosEMedias.forEach((lista) => {
    console.log(lista)
})*/
