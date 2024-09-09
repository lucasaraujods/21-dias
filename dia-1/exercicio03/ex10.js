//Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
//seu novo salário, com 15% de aumento.

let salario = Number(window.prompt("Informe o seu salário"))
let aumento = salario + (salario * 0.15)

document.write("O salário atual com o aumento de 15 % é " + aumento)