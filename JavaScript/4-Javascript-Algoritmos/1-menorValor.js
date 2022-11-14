const livros = require('./2-listaLivros');

                   //0   1   2   3   4   5
//const precoLivros = [25, 15, 30, 50, 45, 20];

function menorValor(arrProdutos, posicaoInicial) {
    
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;