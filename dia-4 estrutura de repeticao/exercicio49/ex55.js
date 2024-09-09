//Faça um algoritmo para ler o código e o preço de 15 produtos, calcular e escrever:
//- o maior preço lido
//- a média aritmética dos preços dos produtos 

let contador = 0
let precoMaior=0
let codigo= 0
let preco = 0
let media = 0
let totalPreco = 0

while(contador<=15){

    codigo = Number (window.prompt("Informe o código do " + contador + " º produto"))
    preco = Number(window.prompt("Informe o preco do " + contador + " º produto"))

    contador++ 
    totalPreco = totalPreco + preco

    if(contador === 0 ){
        precoMaior = preco
    }
    if(preco> precoMaior){
        precoMaior = preco
    }

}
media = totalPreco/15
console.log(`O maior preço é R$${precoMaior} e a media é dos preços é de R$${media}`)