// Filtrando elementos
/*
const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);
*/


// Somando com reduce()
/*
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}\nA média da sala de Java é ${calculaMedia(salaJava)}\nA média da sala de Python é ${calculaMedia(salaPython)}`);
*/


// Clonando com spread operator

const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);