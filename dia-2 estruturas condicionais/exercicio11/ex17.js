//Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
//BISSEXTO.

let ano = parseInt(window.prompt("Informe um ano para saber se é bissexto ou não"));

if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
    document.write("Este ano é bissexto");
} else {
    document.write("Este ano não é bissexto");
}