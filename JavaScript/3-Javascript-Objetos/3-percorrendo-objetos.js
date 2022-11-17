
const cliente = [{
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
},
{
    nome:"Pedro",
    idade:24,
    CPF:"456321789",
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


// For in
/*
let relatorio = "";

for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue;
    } else {
        relatorio += `${info} ==> ${cliente[info]}\n`;
    }
};

console.log(relatorio);
*/

// Métodos de objeto
/*
function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

console.log(Object.values(cliente));
oferecerSeguro(cliente);

// Object.keys()
// Object.values()
// Object.entries()
*/


// Sintaxe de espalhamento

const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes];

console.log(listaDependentes);
console.table(listaDependentes);
