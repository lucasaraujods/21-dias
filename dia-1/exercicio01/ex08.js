//Faça um algoritmo que leia a largura e altura de uma parede, calcule e
//mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
//sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

let largura = Number(window.prompt("Informe a largura"))
let altura = Number(window.prompt("Informe a altura"))
let area = largura * altura
let litros = area/2

document.write(`A quantidade de litros para pintar esta area é de ${litros} litros`)