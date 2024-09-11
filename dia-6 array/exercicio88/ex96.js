//Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No
//final, mostre:
//a) Qual é a média de idade das pessoas cadastradas
//b) Em quais posições temos pessoas com mais de 25 anos
//c) Qual foi a maior idade digitada (podem haver repetições)
//d) Em que posições digitamos a maior idade

let vetorIdade = new Array(8)
let totIdade = 0 
let somaIdade = 0
let mediaIdade = 0 
let vetorPosicoesMais25 = [8];
let maiorIdade = Number.MIN_SAFE_INTEGER
let vetorPosicoesMaiorIdade = [8]
let idade = 0
let contadorMais25 = 0


for(let i=0; i<8; i++){

    idade = parseInt(prompt("informe a " + (i+1) + "ª idade "))
    vetorIdade[i] = idade

    somaIdade += idade 
    totIdade++ 

    if(idade > 25 ){

        vetorPosicoesMais25[contadorMais25] = i 
        contadorMais25++
    }

    if(vetorIdade[i] > maiorIdade){

        maiorIdade = idade 
        vetorPosicoesMaiorIdade = [i]
       
    }else if (idade === maiorIdade) {
        vetorPosicoesMaiorIdade.push(i);
    }
}
mediaIdade = somaIdade/totIdade

console.log("A media de idades é de " + mediaIdade)
console.log("A maior idade digitada foi de: " + maiorIdade )
console.log("As posições com pessoas com mais de 25 anos é de: " )

for(let i=0; i<contadorMais25; i++){

    console.log(vetorPosicoesMais25[i])
}

 console.log("A posição da maior idade é")
for(let i=0; i<vetorPosicoesMaiorIdade.length; i++){

    
    console.log(vetorPosicoesMaiorIdade[i])
}



