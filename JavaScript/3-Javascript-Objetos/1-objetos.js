const clienteArray = ["nome", "André", "idade", 36]; // Array
const clienteObjeto = {                               // Objeto
    nome:"André",
    idade:36,
    CPF:"123654789",
    email:"teste@cassems.com.br",
}
// Objeto é formado por par 'Chave: "Valor"'.


// Acessando dados
/*
console.log(`${clienteObjeto.nome} tem ${clienteObjeto.idade} anos, seu CPF é "${clienteObjeto.CPF}" e email é "${clienteObjeto.email}".`);
console.log(clienteObjeto.CPF.substring(0,3));
*/


// Acessando dados com colchetes -> Acessar chaves
/*
const chaves = ["nome", "idade", "CPF", "email"];

//console.log(clienteObjeto[chaves[0]]);
chaves.forEach(info => console.log(clienteObjeto[info]));
*/


// Adicionando e alterando
/*
console.log(clienteObjeto);
clienteObjeto.fone = "988216892"; // Foi adicionado o campo Fone.
console.log(clienteObjeto);
clienteObjeto.fone = "67988216892"; // Foi alterada a informação do campo Fone.
console.log(clienteObjeto);
*/

