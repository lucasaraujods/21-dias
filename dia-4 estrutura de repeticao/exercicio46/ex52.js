//Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um algoritmo que permita a entrada das seguintes informações: a) o número total de mercadorias no estoque; b) o valor de cada mercadoria. Ao final imprimir o valor total em estoque e a média de valor das mercadorias. O mesmo exercício anterior, mas agora não será informado o número de mercadorias em estoque. Então o funcionamento deverá ser da seguinte forma: ler o valor da mercadoria e perguntar ‘MAIS MERCADORIAS (S/N)?’. Ao final, imprimir o valor total em estoque e a média de valor das mercadorias em estoque. 

let contador = 0
let valorMercadoria = 0
let valorTotal= 0
let media = 0 
let continuar = ""

do{
    valorMercadoria = Number(window.prompt(`Informe o valor da ${contador} ª mercadoria`))

    contador++ 
    valorTotal = valorTotal + valorMercadoria

    continuar = window.prompt("Mais mercadorias ? (S/N) ")

}while(continuar === "S")

media = valorTotal/contador
console.log(`O valor total em estoque é de R$${valorTotal} com a média de do valor das mercadorias de R$${media}`)
