//A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
//um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
//quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
//sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

let quantidadeKm = window.prompt("Informe a quantidade KM rodados")
let quantidadeDias = window.prompt("Informe a quantidade de dias que utilizou o veículo")
let precototal = (quantidadeDias * 90) + (quantidadeKm * 0.20)

document.write(`O preço total a pagar é de R$${precototal} `)
