//Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
//ÍMPAR.

let numero = parseInt(window.prompt("Informe um número inteiro para saber se é par ou ímpar"))

if(numero % 2 == 0){
    document.write("O número " + numero + " é par" )
}
else{
    document.write("O número " + numero + " é impar" )
}