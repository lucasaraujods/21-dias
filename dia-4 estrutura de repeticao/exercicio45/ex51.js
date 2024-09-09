//Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um algoritmo que permita a entrada das seguintes informações: a) o número total de mercadorias no estoque; b) o valor de cada mercadoria. Ao final imprimir o valor total em estoque e a média de valor das mercadorias.
let numeroTotalMercadorias=0
let contador = 0
let valorMercadoria = 0
let valorTotal= 0
let media = 0 

numeroTotalMercadorias = Number(window.prompt("Informe o número total de mercadorias no estoque"))

while(contador <= numeroTotalMercadorias){

    valorMercadoria = Number(window.prompt("Informe o valor da" + contador + " ª de cada mercadoria no estoque"))
    contador++
    valorTotal = valorTotal + valorMercadoria
}
media = valorTotal/numeroTotalMercadorias
console.log(`O valor total em estoque é de ${valorTotal} reais e a média de valor das mercadorias é igual a ${media} reais por produto`)
