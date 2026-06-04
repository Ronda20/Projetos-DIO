 /*# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/

function matches(victorie, defeat){
    let playerRank = victorie - defeat
    let rankFinal = ""

    if(playerRank < 10){
        rankFinal = "Ferro"
    }else if(playerRank > 11 && playerRank < 20){
        rankFinal = "Bronze"
    }else if(playerRank > 21 && playerRank < 50){
        rankFinal = "Prata"
    }else if(playerRank > 51 && playerRank < 80){
        rankFinal = "Ouro"
    }else if(playerRank > 81 && playerRank < 90){
        rankFinal = "Diamante"
    }else if(playerRank > 91 && playerRank < 100){
        rankFinal = "Lendário"
    }else{
        rankFinal = "Imortal"
    }

    console.log("O Herói tem um saldo de vitórias de " + playerRank + ", e está no nível de " + rankFinal)

    
}
 
matches(76, 24)

  