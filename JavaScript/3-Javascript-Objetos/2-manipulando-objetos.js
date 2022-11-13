// Tipos de dados e valores
/*
const cliente = {
    nome:"André",
    idade:36,
    CPF:"123654789",
    email:"teste@cassems.com.br",
    fones: ["55912345678", "55987654321", "55981183128", "55981108899"],
}
*/
/*
cliente.fones.forEach(fone => console.log(fone));
//"fones" é um array dentro de um objeto.
//ou seja, a partir do momento onde queremos acessar, podemos trabalhar com os métodos de array.
*/

// Objetos dentro de objetos
/*
cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011",
}

console.log(cliente.dependentes);
cliente.dependentes.nome = "Sara Silva";
console.log(cliente.dependentes);
*/

// Lista de objetos
/*
const cliente = {
    nome:"André",
    idade:36,
    CPF:"123654789",
    email:"teste@cassems.com.br",
    fones: ["55912345678", "55987654321", "55981183128", "55981108899"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011",
    }],
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "14/02/2015",
})

//cliente.dependentes.forEach(mostra => console.log(mostra));

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="14/02/2015");
filhaMaisNova.forEach(mostra => console.log(mostra.nome));
*/

// Funções

const cliente = {
    nome:"André",
    idade:36,
    CPF:"123654789",
    email:"teste@cassems.com.br",
    fones: ["55912345678", "55987654321", "55981183128", "55981108899"],
    dependentes: 
    [
        {
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2011",
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "14/02/2015",
        },
    ],
    saldo : 100,
    depositar: function(valor)
    {
        this.saldo += valor // Palavra reservada "isso".
    }
}

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
