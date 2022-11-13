const livros = require('.listaLivros');

                   //0   1   2   3   4   5
const precoLivros = [25, 15, 30, 50, 45, 20];

let atual = 0;
let maisBarato = 0;

for (let atual = 0; atual < precoLivros.length; atual++) {
    if (precoLivros[atual] < precoLivros[maisBarato]) {
        maisBarato = atual;
    }
}

console.log(`O livro mais barato custa R$${precoLivros[maisBarato]}.`);