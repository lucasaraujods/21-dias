//Faça um programa que leia uma quantidade indeterminada de números positivos e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100].

//A entrada de dados deverá terminar quando for lido um número negativo.

let totIntervalo1 = 0
let totIntervalo2 = 0
let totIntervalo3 = 0
let totIntervalo4 = 0
let numero 

do{

    numero = parseInt(window.prompt("Informe o número para saber qual total nos intervalos mecionados acima: "))

    if(numero >= 0 && numero<=25){
        totIntervalo1++
    }
    else if (numero >= 26 && numero<=50){
        totIntervalo2++
    }
    else if(numero >= 51 && numero<=75){
        totIntervalo3++
    }
    else if(numero >=76 && numero <=100){
        totIntervalo4++
    }

    numero++

}while(numero >= 0)

console.log("o total de números entre 0 e 25 é de " + totIntervalo1)
console.log("o total de números entre 26 e 50 é de " + totIntervalo2)
console.log("o total de números entre 51 e 75 é de " + totIntervalo3)
console.log("o total de números entre 76 e 100 é de " + totIntervalo4)