//Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.

let numeroInicial = parseInt(window.prompt("Informe o número inicial"))
let numeroFinal = parseInt(window.prompt("Informe o número final"))

let contador = numeroInicial 

while(contador<=numeroFinal){
    console.log(contador)
    contador++ 
}