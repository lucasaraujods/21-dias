//Faça um algoritmo que pergunte a distância que um passageiro deseja
//percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
//viagens até 200Km e R$0.45 para viagens mais longas.

let distancia = Number(window.prompt("Informe a distancia em Km"))
let preco
if(distancia<=200){
    preco = distancia * 0.50
    
}else {
    preco = distancia * 0.45
}
document.write(`O preço da viagem foi de R$${preco.toFixed(2)}`)



