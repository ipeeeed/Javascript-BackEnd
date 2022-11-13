const livros = require('./2-listaLivros');

                   //0   1   2   3   4   5
//const precoLivros = [25, 15, 30, 50, 45, 20];

//let atual = 0;
let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual;
    }
}

console.log(`O livro mais barato custa R$${livros[maisBarato].preco} e o Título é ${livros[maisBarato].titulo}.`);