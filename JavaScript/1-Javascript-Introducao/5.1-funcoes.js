// 1 declara a função

function imprimeTexto(texto) {
    console.log(texto)
}

// 2 executa a função (1 ou + veszes)

imprimeTexto("Meu nome é P3dr0 M4t0s");
imprimeTexto(soma());

// três formas de excrever funções

function soma(){
    // outros códigos. return deve ser a ultima linha de código para passar os dados da função
    return 2 + 2;
}

console.log(soma());