/*
const cliente = [{
    nome:"André",
    idade:36,
    cpf:"123654789",
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
},
{
    nome:"Pedro",
    idade:24,
    cpf:"456321789",
    email:"test@cassems.com.br",
    fones: ["55954987123", "55955398745", "55991837465", "55999999999"],
    dependentes: 
    [
        {
            nome: "Adriana Benites",
            parentesco: "filha",
            dataNasc: "29/04/2010",
        },
        {
            nome: "Marcos",
            parentesco: "filho",
            dataNasc: "18/12/2005",
        },
    ],
    saldo : 100,
}];
*/

class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    };

    depositar(valor) {
        this.saldo += valor;
    };

    exibirSaldo() {
        console.log(this.saldo);
    };
    
};
/*
const andre = new Cliente("André", "teste@cassems.com.br", "123654789", 100);
andre.exibirSaldo();
andre.depositar(200);
andre.exibirSaldo();
console.log(andre);
*/


// Métodos e propriedades

class ClientePoupanca extends Cliente { // extends faz ClientePoupanca herdar de Cliente
    constructor (nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    };
    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
};

const andre = new ClientePoupanca("André", "a@email.com", "86405185927", 100, 200);

console.log(andre);

andre.depositar(50);
andre.depositarPoupanca(50);

console.log(andre);