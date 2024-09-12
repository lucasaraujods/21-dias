//1 - Crie uma classe Carro com as seguintes propriedades:


//Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
//Potencia - número de cavalos de potência do carro;
//VelocidadeMaxima - qual a maior velocidade que o carro pode alcançar;
//Aceleracao - o tempo em segundos que o carro leva para ir de 0 a 100 km/h


//2 - Adicione na classe carro um método que recebe como parâmetro uma distância em metros e calcula o tempo em segundos para percorrer essa distância. Use a seguinte fórmula para o cálculo: 


//resultado = distância / (VelocidadeMaxima / Aceleracao). 
// A função deve retornar esse resultado;

//3 - Crie uma classe Corrida com as seguintes propriedades:
//Nome - nome do local da corrida;
//Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
//Distancia - o total em metros da corrida;
//Participantes - um array de objetos da classe Carro
//Vencedor - qual a equipe que ganhou a corrida;

//4 - Adicione na classe Corrida um método que verifica qual foi o carro que completou a corrida em menor tempo, para isso utilize o método criado na classe carro. Salve o nome do carro que fez o menor tempo na propriedade “Vencedor”.


//5 - Adicione na classe Corrida um método que exibe na tela quem é o vencedor da corrida.


//6 - Crie um objeto da classe Corrida e preencha a propriedade Participantes com alguns objetos da calsse Carro.


//7 - Chame o método para verificar quem fez o menor tempo e por fim o método que exibe o vencedor.


class Carro{

    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao){

        this.Nome = nome
        this.Potencia = potencia 
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    calcularTempo(distancia){

        let resultado = distancia / (this.VelocidadeMaxima/this.Aceleracao)
        return resultado
    }
    
}

let vetorCarros = []
let i 
let tempo = 0

for(i = 0; i < 2; i++){

    
    let nome= prompt("Informe a equipe do carro:")
    let potencia = prompt("Informe a potencia do carro ")
    let velocidadeMaxima = parseFloat(prompt("Informe a velocidade maxima que o carro pode alcançar"))
    let aceleracao = parseInt(prompt("Informe a aceleração em segundos em segundos que o carro leva de 0 a 100 km/h: "))

    let carro = new Carro(nome, potencia, velocidadeMaxima, aceleracao)

    let distancia = parseFloat(prompt("Informe a distancia da corrida em metros:"))
    tempo = carro.calcularTempo(distancia)

    console.log(`O carro: ${carro.Nome} tem a potencia de: ${carro.Potencia} com a velecidade maxima de: ${carro.VelocidadeMaxima} com a aceleração de: ${carro.Aceleracao} e consegue fazer a distancia de: ${distancia} de metros com o tempo de : ${tempo.toFixed(2)} segundos`)
    

    vetorCarros[i] = carro

}


class Corrida{

    Nome
    Tipo 
    Distancia
    Participates
    Vencedor 

    constructor(nome, tipo, distancia){

        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Partipantes = []
        this.Vencedor = ""
    }

    DefinirVencedor(){

        let menorTempo = this.Partipantes[0].calcularTempo(this.Distancia)
        let vencedor = this.Participates[0]

        for(let index = 1; index< this.Participates.lenght; index++){

            let tempo = this.Participates[index].calcularTempo(this.Distancia)
            if(tempo < menorTempo){

                menorTempo = tempo
                venecedor = this.Participates[index]
            }
        }

        return this.Vencedor = vencedor
    }

    ExibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.Nome)
    }
}


let corrida = new Corrida ("ferrari", "Formula1", 60000)
corrida.Participates[0] = new Carro("Kicks", 120, 160, 5) 
corrida.Participates[0] = new Carro("Puro sangue", 210, 200, 9) 
corrida.Participates[0] = new Carro("Camaro", 300, 220, 10) 

corrida.DefinirVencedor()
corrida.ExibirVencedor()




