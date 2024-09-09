//Crie um programa que leia duas notas de um aluno e calcule a sua média,
//mostrando uma mensagem no final, de acordo com a média atingida:
// - Média até 4.9: REPROVADO
// - Média entre 5.0 e 6.9: RECUPERAÇÃO
// - Média 7.0 ou superior: APROVADO

let nota1 = Number(window.prompt("Informe o priemira nota"))
let nota2 = Number(window.prompt("Informe o segunda nota"))
let media = (nota1+nota2)/2

if(media>=7){
    document.write("O aluno está aprovado")
}
else if(media>= 5 && media<= 6.9){
    document.write("O aluno está de recuperação")
}
else{
    document.write("o aluno está reprovado")
}