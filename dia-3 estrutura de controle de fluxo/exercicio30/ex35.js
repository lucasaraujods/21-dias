//Escreva um algoritmo que receba o código, o preço e o tamanho da camiseta. Sabe-se que de acordo com o tamanho há um desconto conforme tabela abaixo. Informar o código, e o valor do desconto. TAMANHO DESCONTO “G” 10%, “M” 20%, “P” 30%. O algoritmo deverá informar como saída o código, o tamanho da camisa, valor da camisa sem o desconto e com o desconto.

let tamanho = window.prompt("Informe o tamanho da camiseta com M,P ou G").toUpperCase()
let codigo = Number(window.prompt("informe o código da camiseta"))
let preco = Number(window.prompt("Informe o preço"))

let valorCamisetaDesconto=0 

switch (tamanho)
{
    case "G": 
        valorCamisetaDesconto = preco - (preco * 0.10)
        document.write(`O código da camiseta: ${codigo}, com o tamanho G possui o valor de: ${preco} reais e com desconto é ${valorCamisetaDesconto} reais`)
    break;

    case "M":
        valorCamisetaDesconto = preco - (preco * 0.20)
        document.write(`O código da camiseta: ${codigo}, com o tamanho M possui o valor de: ${preco} reais e com desconto é ${valorCamisetaDesconto } reais`)
    break;

    case "P":
        valorCamisetaDesconto = preco - (preco * 0.30)
        document.write(`O código da camiseta: ${codigo}, com o tamanho P possui o valor de: ${preco} reais e com desconto é ${valorCamisetaDesconto } reais`)
    break;

    default:
        document.write("Tamanho de camiseta inválido.")
    break;
}
