//Crie um programa que leia o número de dias trabalhados em um mês e mostre o
//salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
//por hora trabalhada.

let numeroDias = Number(window.prompt("Informe o número de dias trabalhados"))
let salario = numeroDias * (8 * 25)

document.write(`O salário do funcionário é de R$${salario} conforme a quantidade de dias: ${numeroDias} trabalhados`)