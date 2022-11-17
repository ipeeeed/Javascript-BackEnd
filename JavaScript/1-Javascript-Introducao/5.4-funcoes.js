// Function

function apresentar(nome) {
    return `meu nome é ${nome}`;
}

// Arrow Function com uma só linha de instrução

const apresentarArrow = nome => `meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

// Arrow Function com mais de uma linha de intrução

const apresentarArrowFunc = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
}
// Hoisting: arrow function se comporta como expressão.
