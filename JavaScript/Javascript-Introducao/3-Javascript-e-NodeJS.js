// Tipagem dinâmica - uma variável pode mudar seu tipo várias vezes.

let minhaVar = 456;
minhaVar = "texto"
minhaVar = true;

// Erros e Stacktrace
/*
→ RangeError - Quando o código recebe um dado do tipo certo, porém fora do comando aceitável.
→ ReferenceError - Quando o código tenta acessar algo que não existe.
→ SyntaxError - Quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta.
→ TypeError - O Código esperava receber um dado de determinado tipo, mas recebeu outro diferente.
*/

// tratamento de erro!
//console.error("deu erro!")

// Outros Métodos da Console API
/*
console.log("Teste"); // "Saída padrão" -> log = registro
console.error("Error"); // Exibe mensagens de erro
console.table(["numeros", "caracteres", "booleanos"]); // Visualizar de forma mais organizada informações tabulares

console.time();
for (let i = 0; i < 100000; i++){
    let a = 1;
}
console.timeEnd(); // Temporiza do inicio ao fim uma operação de código

console.trace(); // Exibe a Stacktrace de todos os pontos por onde o código executado passou durante a execução
*/
