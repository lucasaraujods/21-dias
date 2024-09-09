//Faça um programa que leia 10 valores e no final, escreva o maior e o menor valor lido

let contador = 0
let numero = 0
let numeroMaior = 0
let numeroMenor = 0

while(contador<=10){
    numero = Number(window.prompt("informe um número"))
    
    // Inicializa o maior e menor com o primeiro número lido:
    if(contador === 0 ){
        numeroMaior = numero
        numeroMenor = numero
    }
    if( numero > numeroMaior){
        numeroMaior = numero
    }
    if (numero < numeroMenor){
        numeroMenor = numero
    }
    contador++ 
}
console.log(`O número maior é ${numeroMaior} e o número menor é ${numeroMenor}`)
