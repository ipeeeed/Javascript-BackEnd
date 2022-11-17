// Herança de Classe
import User from "./2-ClassesEHeranca.js";

// extends faz com que a classe Admin herde da classe User.
class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2022-01-01')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())

