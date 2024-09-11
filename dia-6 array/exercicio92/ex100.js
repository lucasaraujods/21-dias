//Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.

let vetorNumeros = []
let somaNumeros = 0
let multiplicacaoNumeros=1

for(let i=0; i<5; i++){

    let numero = parseFloat(prompt("Informe o " + (i+1) + "º numero:" ))
    vetorNumeros[i] = numero

    somaNumeros+=numero
    multiplicacaoNumeros*=numero
}
console.log("Os números do vetor é = " + vetorNumeros)
console.log("A soma dos números do vetor é = " + somaNumeros)
console.log("A multiplicação dos números do vetor é = " + multiplicacaoNumeros)
