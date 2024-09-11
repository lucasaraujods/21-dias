//Faça um Programa que leia um vetor A com 10 números inteiros, calcule e mostre a soma dos quadrados dos elementos do vetor.

let vetorNumeros = []
let quadrados=0
let somaQuadrados=0

for(let i=0; i<4; i++){

    let numero = parseInt(prompt("Informe o " + (i+1) + "º numero"))
    vetorNumeros[i] = numero 

}
console.log("Os quadrados são: " + somaQuadrados)