/*
const user = {
    nome: "Pedro",
    email: "p@p.com",
    nascimento: "2022/01/01",
    role: "estudante",
    ativo: true,
    exibeInfos: function() {
        console.log(this.nome, this.email)
    },
};

// Herança de protótipo
// Entendendo o this
// Estudar bind(), call() e apply() a partir do this

const admin = {
    nome: "Mariana", 
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log("curso criado!");
    },
};
*/
// Método para definir um protótipo
// 1 parâmetro - Objeto que quero usar/herdar propriedades
// 2 parâmetro - Objeto que vai ceder as propriedades herdadas
/*
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibeInfos();
*/


// Object.create() vs new
/*
function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibeInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

//const novoUser = new User('Pedro', 'p@p.com')
//console.log(novoUser.exibeInfos());

function Admin(role) {
    User.call(this, 'Pedro', 'p@p.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibeInfos())
console.log(novoUser.role)
*/


const user = {
    init: function(nome, email)
    {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(nome) {
        return this.nome
    },
}


const novoUser = Object.create(user);
novoUser.init('Pedro', 'p@p.com')
console.log(novoUser.exibirInfos())
//console.log(novoUser.exibirInfos('Pedro'));
//console.log(user.isPrototypeOf(novoUser))
