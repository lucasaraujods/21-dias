//Faça um algoritmo que leia um número inteiro e mostre o
//seu dobro na tela. O programa deve executar até o usuário
//digitar 0.

let numero = parseInt(window.prompt("Informe o número"))


while(numero != 0){
    numero = parseInt(window.prompt("informe um novo numero para saber seu dobro e zero para parar"))
    document.write(`o dobro do número ${numero} é ${numero*2} <br/>`)
}