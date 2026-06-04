class personagem{
   
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.arma = ""
    }

    atacar(){
            
    if(this.tipo === "Mago"){
       this.arma = "magia"
    }else if(this.tipo === "Guerreiro"){
        this.arma = "espada"
    }else if(this.tipo === "Monge"){
        this.arma = "artes marciais"
    }else if(this.tipo === "Ninja"){
        this.arma = "shuriken"
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.arma}`)
    }
}

let heroi0 = new personagem("Link", 20, "Guerreiro")
let heroi1 = new personagem("Zelda", 19, "Mago")
let heroi2 = new personagem("Ash", 12, "Monge")
let heroi3 = new personagem("Red", 15, "Ninja")

heroi0.atacar()
heroi1.atacar()
heroi2.atacar()
heroi3.atacar()

