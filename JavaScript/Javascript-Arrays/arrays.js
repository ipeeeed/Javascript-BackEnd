// Não utilizando Array
/*
const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media);
*/

// Utilizando Array
/*
const notas = [10, 6.5, 8, 7.5]
const medias = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(medias);
*/

// Adicionando Elementos
/*
const notas = [10, 6, 8];
notas.push(7); // push serve para acrescentar elementos no final.
// Pergunta: Como acrescentou elemento novo à constante?
// Resposta: const é uma constante, não deve ser alterada a atribuição, mas ele recebe mais elementos.
console.log(notas);
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);
*/

// Deletando Elementos

const notas = [10, 6, true, "Gabriel", 10];
//notas.pop() // O método para remover o ultimo elemento do array.
console.log(notas);



/* Outros Métodos de Arrays
concat()
filter()
find()
findIndex()
lastIndexOf()
forEach()
pop()
shift()
push()
unshift()
reduce()
reduceRight()
reverse()
slice()
sort()
splice()
*/
