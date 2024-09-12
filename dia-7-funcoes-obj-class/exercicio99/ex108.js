// sempre inicia a classe com letras maiusculas 

class Aluno{

    nome 
    idade 
    areaAtuacao

    constructor(nome, idade){

    // this siginifca que eu estou acessando a propriedades da classe, ou seja, estou acessando como nome e idade, usando o thi, sendo que
    //vai ser igual ao paramento colocado no metodo construtor!!

        this.nome = nome
        this.idade = idade
    }

    //criamos uma função para apresentar o resultando, assim, nõa precisa da palara funciotion antes, precisa omente abrir um parenteses
    // vale ressaltar que as variaveis usandos, são aquelas que estão dentro da classe com a palavra THIS antes !!
    apresentar(){

        console.log(`Ola meu nome é ${this.nome} tenho idade: ${this.idade} e a raea de atuação é de ${this.areaAtuacao}`)
    }
}


let alunos = []; 
let continuar = true
let indexAluno = 0

console.log("==========CADASTRO DE ALUNOS=======")
while(continuar){

    let nome = prompt("Insiro o nome do aluno:")
    let idade = parseInt(prompt("Informe a idade do aluno:"))
    let aluno = new Aluno(nome , idade)

    let areaAtuacao = prompt("Informe a sua area de atuação do aluno: ")
    aluno.areaAtuacao = areaAtuacao

    alunos[indexAluno] = aluno 
    let desejaContinuar = prompt("Insara 1 se deseja cadastra um novo aluno")
    if(desejaContinuar != 1 ){
        continuar = false
        
    }else{

        indexAluno++
    }

}