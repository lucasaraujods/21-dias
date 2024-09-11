//Crie um algoritmo que receba um número inteiro positivo e um array. Popule o array e no final exiba os índices em que número inserido aparece nesse array. Para testes do exercício use até 10 elementos no array.

let numero = []

for(let i =0; i<10; i++){

    numero[i] = parseInt(window.prompt("Informe um número"))
}

for(let i= 0; i<10; i++){

    console.log(`O numero: ${numero[i]} está na posição: ${[i]}`)
}

