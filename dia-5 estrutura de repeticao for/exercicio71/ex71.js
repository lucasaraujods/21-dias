//Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.

let numero = parseInt(window.prompt("Informe o número"))

for(i = numero; i <= numero + 2; i++){
    console.log("A tabuada do " + i)
    for(let j = 0; j <=10; j++ ){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}

