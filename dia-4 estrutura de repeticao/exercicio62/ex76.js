//Faça um programa que leia dez conjuntos de dois valores, o primeiro representando o número do aluno e o segundo representando a sua altura em centímetros.

//Encontre o aluno mais alto e o mais baixo.

//Mostre o número do aluno mais alto e o número do aluno mais baixo, junto com suas alturas.

let numero = 0
let altura = 0
let contador = 0
let alturaMaior = Number.MIN_SAFE_INTEGER
let alturaMenor = Number.MAX_SAFE_INTEGER
let numeroMaior = 0 
let numeroMenor = 0

while(contador<=3){
    altura = Number(window.prompt("Informe a sua altura do " + (contador + 1) + " º aluno: "))
    numero = contador 
    contador++ 

    if(altura > alturaMaior){
        alturaMaior = altura
        numeroMaior = numero
    }
    if(altura < alturaMenor){
        alturaMenor = altura
        numeroMenor = numero
    }
}
console.log(`O número do aluno maior é: ${numeroMaior} e sua altura é de ${alturaMaior/100} centimetros`)
console.log(`O número do aluno menor é: ${numeroMenor} e sua altura é de ${alturaMenor/100}centimetros`)
