// O cardápio de uma lanchonete é o seguinte: Especificação Código Preço 
//Cachorro Quente 100 R$ 1,20 
//Bauru Simples 101 R$ 1,30 
//Bauru com ovo 102 R$ 1,50 
//Hambúrguer 103 R$ 1,20 
//Cheeseburguer 104 R$ 1,30 
//Refrigerante 105 R$ 1,00 
//Faça um programa que leia o código dos itens pedidos e as quantidades desejadas. Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do pedido. Considere que o cliente deve informar quando o pedido deve ser encerrado.

let preco = 0
let quantidade = 0
let opcao = 0 
let continuar = true
let somaPreco = 0

while(continuar){

    opcao = parseInt(window.prompt("Informe o código do produto desejado"))
    quantidade = parseInt(window.prompt("Informe a quantidade deste produto"))

    preco = 0

    switch(opcao){

        case 100:
            preco = 1.20 * quantidade 
            break;
        case 101:
            preco = 1.30 * quantidade
            break;
        case 102: 
            preco = 1.50 * quantidade
            break;
        case 103:
            preco = 1.20 * quantidade
            break;
        case 104:
            preco = 1.30 * quantidade
            break;
        case 105: 
            preco = 1.00 * quantidade
            break;
        default:
            console.log("Uma escolha uma opção não foi válida, os números são de e 100 até 105")
            break;
    }

    somaPreco = somaPreco + preco

    continuar = window.prompt("Deseja continuar informaar algo a mais ao pedido? ").toLowerCase()

    if(continuar === "sim"){
        continuar = true
    }
    else{
        continuar = false 
    }
}
console.log("O valor total é de R$" + somaPreco.toFixed(2))