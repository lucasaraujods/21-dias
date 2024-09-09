//Faça um algoritmo para ler uma quantidade e a seguir ler esta quantidade de números. Depois de
//ler todos os números o algoritmo deve apresentar na tela o maior dos números lidos e a média dos
//números lidos. 

let quantidade = parseInt(window.prompt("Informe a quantidade devezes deseja ler as quantidades de números"))
let contador = 0
let numero = 0
let numeroMaior = 0 
let media = 0
let soma = 0 

while(contador < quantidade){
    numero = Number(window.prompt("Informe o " + contador + " º número: "))
    contador++ 
    soma = soma + numero

    if (contador === 0 ){
        numeroMaior = numero
    }
    if(numero > numeroMaior){
        numeroMaior = numero
    }
}
media = soma/quantidade 
console.log(`O maior número lido é ${numeroMaior} e a média dos números digitados é ${media}`)