//Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
//média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
//não um bom aproveitamento (se ficou acima da média 7.0).

let nota1 = Number(window.prompt("Informe a primeira nota"))
let nota2 = Number(window.prompt("Informe a segunda nota"))
let media = (nota1 + nota2 )/2

if (media >= 7){
    document.write("O aluno obteve um bom aproveitamento, com a média de " + media)
}
else{
    document.write("O aluno não obteve um bom aproveitamento, com a média de " + media)
}