//Faça um Programa que peça as quatro notas de 6 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.

let vetorAluno=[]
let vetorNotas = []
let vetorAlunosAcimaMedia = []
let vetorMedia = []
let nota =0 
let media
let somaNotas
let totAlunosAcimaMedia = 0


for(let y= 0; y<6; y++){

    somaNotas=0
    media= 0

    for(let i=0; i<4; i++){

        
        nota = parseFloat(prompt("Informe a " + (i+1) + "º nota do aluno "))

        somaNotas+= nota
        media=somaNotas/4

    }

    vetorAluno[y] = media 

    if(media>=7){

        vetorAlunosAcimaMedia= [y]
        totAlunosAcimaMedia++
    }

}
console.log("A dos 6 alunos é de: " + vetorAluno)
console.log("O total de alunos com a media maior que 7 é de " + totAlunosAcimaMedia)


