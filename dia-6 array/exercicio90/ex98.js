//Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.

let vetorNumeros = []
let vetorPares = []
let vetorImpares =[]
let contadorImpares = 0
let contadorPares= 0

for(let i=0; i<10; i++){

    let numero = parseInt(prompt("Informe " + (i+1) + "º numero: " ))
    vetorNumeros[i] = numero

    if(numero % 2 == 0){

        vetorPares[contadorPares] = numero
        contadorPares++
    }
    else{

        vetorImpares[contadorImpares] = numero
        contadorImpares++
    }
}
console.log("O vetor dos numeros = " + vetorNumeros)
console.log("O vetor dos numeros pares = " + vetorPares)
console.log("O vetor dos numeros impares = " + vetorImpares)