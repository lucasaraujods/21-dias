//1- Crie três arrays, um para guardar  os modelos, um para guardar os anos e um para guardar os valores do carro
//2 - Utilizando o WHILE, peça para o usuário cadastrar novos carros(modelo, ano e valor), popule os 3 arrays nas mesmas posições.
//3 - Seu usuário deve definir quando parar de inserir informações.



//[prisma,celta,porsche] [2015,2020,2022] [70.000,50.000,300.000] -> 
//-> [celta,prisma,porsche] [2020,2015,2022] [50.000,70.000,300.000]



let arrayModelo = []
let arrayAno = []
let arrayValor = []
let continuar = true 

while(continuar){

    for(let i = 0; i < 5; i++){

        let modelo = prompt("Informar o modelo do " + (i+1) + " º carro")
        arrayModelo[i] = modelo
    }

    for(let i=0; i<5; i++){

        let ano= parseInt(prompt("Informar o ano do " + (i+1) + " º do carro"))
        arrayAno[i] = ano
    }
    for(let i=0; i<5; i++){

        let valor= parseFloat(prompt("Informar o valor do" + (i+1) + " º carro"))
        arrayValor[i] = valor
    }

    continuar = parseInt(prompt("Informe se deseja continuar, sim ou não"))
    if(continuar != "sim"){

        continuar = false
    }

}
console.log("O vetor de modelo de carro: " + arrayModelo)
console.log("O vetor do ano de carro: " + arrayAno)
console.log("O vetor do valor do carro: " + arrayValor)




