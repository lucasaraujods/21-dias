//Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores. ele aceitará apenas números entre 0 e 1000.

let menorValor = 1001
let maiorValor = 0
let soma = 0
let contador =0
let valor = 0 
limite = parseInt(window.prompt("Informe o limite:"))

while(contador<=limite){

     valor = Number(window.prompt("Informe o valor"))
     contador++

    if(valor>=0 && valor<=1000){

        soma = soma + valor

        if(valor > maiorValor){
            maiorValor = valor
        }
        if(valor < menorValor){
            menorValor = valor
        }

        contador++
    }
    else{
        console.log("Informe um valor entre 0 e 1000")
    }
}
console.log("A soma dos valores é " + soma  )
console.log("O maior valor é " + maiorValor )
console.log("O menor valor é " + menorValor )