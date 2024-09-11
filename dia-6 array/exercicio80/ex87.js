//Crie um algoritmo que receba um número inteiro positivo e um array. Popule o array e no final exiba os índices em que número inserido aparece nesse array. Para testes do exercício use até 10 elementos no array.

let numeroInserido = parseInt(window.prompt("Informe o número inserido de 1 até 10 "))

let numero = []

for(let i = 0; i<10; i++){

    numero[i] = parseInt(window.prompt("Informe o número de 1 até 10 para saber em qual indice ele está "))

    if(numero[i] === numeroInserido){

        console.log(`O indice em que este número ${numeroInserido} aparece é ` + i)
    }
}



