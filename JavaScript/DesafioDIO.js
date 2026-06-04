//Tem que usar: Variaveis, Operadores, Laços, Estruturas de decisão 

/*Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante*/

let heroi = ["Link", 8256]
let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let nivelAtual = ""

for(let i = 999; i <= 11000 ; i++){
     if(heroi[1] <= 1000){
        nivelAtual = niveis[0]
    }else if(heroi[1] > 1001 && heroi[1] <= 2000){
        nivelAtual = niveis[1]
    }else if(heroi[1] > 2001 && heroi[1] <= 5000){
        nivelAtual = niveis[2]
    }else if(heroi[1] > 5001 && heroi[1] <= 7000){
        nivelAtual = niveis[3]
    }else if(heroi[1] > 7001 && heroi[1] <= 8000){
        nivelAtual = niveis[4]
    }else if(heroi[1] > 8001 && heroi[1] <= 9000){
        nivelAtual = niveis[5]
    }else if(heroi[1] > 9001 && heroi[1] <= 10000){
        nivelAtual = niveis[6]
    }else{
        nivelAtual = niveis[7]
    }
}

console.log("O Herói de nome " + heroi[0] + " está no nível " + nivelAtual)
console.log(heroi[1]+ " de XP")