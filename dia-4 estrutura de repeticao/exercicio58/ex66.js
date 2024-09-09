//Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais de 40 alunos.

let quantidadeTurmas = 0
let quantidadeAlunos = 0 
let somaAlunos = 0
let media = 0 
let contador = 1

quantidadeTurmas = parseInt(window.prompt("Informe a quantidade de turmas: "))

do{
    quantidadeAlunos = parseInt(window.prompt("Informe a quantidade de alunos da : " + contador + " ª turma"))

    if(quantidadeAlunos < 40){
        somaAlunos = somaAlunos + quantidadeAlunos
        contador++ 
    }
    else {
        quantidadeAlunos = parseInt(window.prompt("Informe a quantidade de alunos da : " + contador + " ª turma com menos de 40 alunos"))
    }

}while(contador <= quantidadeTurmas)

    media = somaAlunos/quantidadeTurmas
    console.log("A média de alunos por turma é " + media )

