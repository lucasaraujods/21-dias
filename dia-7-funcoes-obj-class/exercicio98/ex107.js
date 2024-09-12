//1 - Crie uma classe para representar o seu computador:


//Tipo - desktop ou notebook;
//Processador - nome do seu processador, ex: Ryzen 5
//Video - Integrado ou Dedicado;
//Armazenamento - número em GB de memória, ex: 500 ou 1000;
//MemoriaRam - número em GB de memória, ex: 4, 8 ou 16;
//SSD - True ou False


//2 - Implemente um método nessa classe para exibir as informações no console;


// Se você não souber todas essas informações do seu computador, não tem problema preencha com os valores de exemplo mesmo.

//criando a classe:

class Computador{

    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd 

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){

        this.Tipo = tipo
        this.Processador = processador 
        this.Video = video
        this.Armazenamento= armazenamento
        this.MemoriaRam = memoriaRam 
        this.Ssd = ssd   
    }

    apresentar(){

        console.log(`O tipo é: ${this.Tipo}, com processador: ${this.Processador} com o video de: ${this.Video} com o armazenamento de: ${this.Armazenamento} a memoriaRam de: ${this.MemoriaRam} e com Ssd de: ${this.Ssd}`)
    }
}

//usamos o new para instanciar a classe 

let componetes = []
let continuar = true
let contador = 0

while(continuar){

    let tipo = prompt("informe o tipo")
    let processador =  prompt("Informe o processador")
    let video = prompt("Informe o video")
    let armazenamento = prompt("Informe o tamanho do armazenamento")
    let memoriaRam = prompt("Informe o tomanho da memoria")
    let ssd = prompt("informe o ssd")
    let computador = new Computador (tipo, processador, video, armazenamento, memoriaRam, ssd)

    componetes[contador] = computador

    let desejaContinuar = prompt("Informe 1 para continuar se não, pare: ")
    if(desejaContinuar != 1){

        continuar = false
    }else{

        contador++
    }

}
