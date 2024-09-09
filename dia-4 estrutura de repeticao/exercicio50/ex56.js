//A prefeitura de uma cidade deseja fazer uma pesquisa entre seus habitantes. Faça um algoritmos
//para coletar dados sobre o salário e número de filhos de cada habitante e após as leituras, escrever:
//a) Média de salário da população
//b) Média do número de filhos
//c) Maior salário dos habitantes
//d) Total de pessoas com salário menor que R$ 150,00
//Obs.: O final da leituras dos dados se dará com a entrada de um “salário negativo”.

let mediaSalario = 0
let mediaNumerosFilhos = 0
let somaNumerosFilhos = 0
let somaSalario = 0
let contador = 0 
let maiorSalario = 0
let totMenorSalalario = 0

while(contador <= 10 ){

    let salario = Number(window.prompt("Informe o seu salário"))
    let numeroFilhos = parseInt(window.prompt("Informe o número de filhos"))

    somaNumerosFilhos = somaNumerosFilhos + numeroFilhos
    somaSalario = somaSalario + salario
    contador++

    if(salario < 150){
        totMenorSalalario++ 
    }
    else if (salario > maiorSalario){
        maiorSalario = salario
    }
}
mediaSalario = somaSalario/10
mediaNumerosFilhos =somaNumerosFilhos/10
document.write("A média dos salário dos habitantes é de: " + mediaSalario + " <br/> ")
document.write("A média de filhos dos habitantes é de: " + mediaNumerosFilhos + " <br/>")
document.write("O mairo salário dos habitantes é de " + maiorSalario + " reais <br/> ")
document.write("O total de habitantes com o salário menor que 150 reais é de: " + totMenorSalalario + " <br/> ")





