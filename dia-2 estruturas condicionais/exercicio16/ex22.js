//Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
//na tela uma das mensagens abaixo:
// - O primeiro valor é o maior
// - O segundo valor é o maior
// - Não existe valor maior, os dois são iguais

let numero1 = parseInt(window.prompt("Informe o priemiro número"))
let numero2 = parseInt(window.prompt("Informe o segundo número"))

if(numero1>numero2){
    document.write(`O número ${numero1} é maior que ${numero2}`)
}
else if (numero1<numero2){
    document.write(`O número ${numero2} é maior que ${numero1}`)
}
else {
    document.write("Não exite valor maior, os dois são iguais")
}