//Faça um algoritmo que receba um valor inteiro e imprima na tela a sua tabuada.

let numero = parseInt(window.prompt("Informe um número de 1 a 10 para saber a sua tabuada "))

let contador=0 
document.write("Adição: <br/>")
while(contador<=10){
  
    document.write(`${numero} + ${contador} = ${numero+contador} <br/>`)
    contador++
}

contador=0
document.write("Subtração: <br/>")
while(contador<=10){
  
    document.write(`${numero} - ${contador} = ${numero-contador} <br/>`)
    contador++
}

contador=0
document.write("Multiplicação: <br/>")
while(contador<=10){
  
    document.write(`${numero} x ${contador} = ${numero*contador} <br/>`)
    contador++
}

contador=0
document.write("Divisão: <br/>")
while(contador<=10){
  
    document.write(`${numero} / ${contador} = ${numero/contador} <br/>`)
    contador++
}

