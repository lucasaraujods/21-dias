//Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
//80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
//o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

let velocidade = Number(window.prompt("Informe a velocidade do veículo"))
if(velocidade >80){
    let multa = (velocidade - 80) * 5 
    document.write("Você foi multado e o valor da multa é R$" + multa)
}

