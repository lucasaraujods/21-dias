//Escreva um programa que gere um número aleatório entre 1 e 100. O usuário deve tentar adivinhar o número gerado pelo programa. A cada tentativa, o programa deve informar se o número inserido pelo usuário é maior ou menor do que o número gerado. O programa deve continuar até que o usuário adivinhe o número corretamente.

let numeroCorreto = 63
let numero = 0

while(numero != numeroCorreto){

    numero = parseInt(window.prompt("Informe um número de 1 a 100"))

    if(numero<numeroCorreto){
        console.log("O número informado é menor que o número correto")
    }
    else{
        console.log("O número informado é maior que o número correto")
    }
}
console.log("O número informado foi " + numero + " e o número correto é " + numeroCorreto)