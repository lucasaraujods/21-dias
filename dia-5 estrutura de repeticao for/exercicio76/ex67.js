//O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas.
//Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu uma tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta.
//Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços.
//Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:
//Lojas Quase Dois - Tabela de preços
//1 - R$ 1.99
//2 - R$ 3.98
//...
//50 - R$ 99.50

const precoPorItem = 1.99;

// Imprime o cabeçalho da tabela
console.log("Lojas Quase Dois - Tabela de preços");

// Usa um loop para gerar a tabela de preços de 1 a 50 produtos
for (let quantidade = 1; quantidade <= 50; quantidade++) {
    // Calcula o preço total para a quantidade atual de itens
    let precoTotal = quantidade * precoPorItem;
    
    // Imprime a quantidade de itens e o preço total formatado
    console.log(`${quantidade} - R$ ${precoTotal.toFixed(2)}`);
}