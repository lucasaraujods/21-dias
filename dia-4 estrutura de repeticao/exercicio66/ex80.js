//Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:

 //- A média geral dos alunos
 //- Quantos homens enviaram as notas
 //- Quantas mulheres tiveram nota acima de 7
 //- Qual a maior nota entre os homens

let contadorAlunos = 0
let contadorHomens = 0
let contadorMulheresAcima7 = 0
let maiorNotaHomens = Number.MIN_SAFE_INTEGER
let mediaAlunos = 0
let somaNotas = 0 
let continuar = true
let nota = 0
let sexo = ""


while(continuar){

    nota = Number(window.prompt("Informe a sua nota"))
    sexo = window.prompt("Informe o seu sexo com (M/F)")

    somaNotas = somaNotas + nota
    contadorAlunos++ 

    if(sexo === "M"){
        contadorHomens++

        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
    }
    else if( sexo === "F"){

        if(nota > 7){
            contadorMulheresAcima7++
        }
    }

    let opcao = window.prompt("Deseja continuar, digite sim ou não").toLowerCase()
    continuar = (opcao === "sim")
}

mediaAlunos= somaNotas/contadorAlunos
console.log("A média da turma foi de " + mediaAlunos.toFixed(2))
console.log("A quantidade de homens cadastrados foi de " + contadorHomens)
console.log("A maior nota dos homens foi de " + maiorNotaHomens)
console.log("A quantidade de mulhres acima de 7 foi de " + contadorMulheresAcima7)







