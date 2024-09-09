//Crie um programa que leia o preço de um produto, calcule e mostre o seu
//PREÇO PROMOCIONAL, com 5% de desconto.

let valor = Number(window.prompt("Informe o valor para saber o desconto"))
let desconto = valor - (valor * 0.05 )

document.write(`O valor total com o desconto de 5% é ${desconto} reais`)