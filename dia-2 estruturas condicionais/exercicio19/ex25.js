//Desenvolva um programa que leia o nome de um funcionário, seu salário,
//quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
//acordo com a tabela a seguir:
 //- Até 3 anos de empresa: aumento de 3%
 //- entre 3 e 10 anos: aumento de 12.5%
 //- 10 anos ou mais: aumento de 20

 let nome = window.prompt("Informe o sue nome")
 let salario = Number(window.prompt("Informe o seu salario"))
 let anosEmpresa = parseInt(window.prompt("Informe os anos de empresa"))
 let novoSalario = 0 

 if(anosEmpresa < 3){
    novoSalario= salario + (salario*0.03)
    document.write("O seu novo salário é de " + novoSalario + " reais")
 }
 else if(anosEmpresa>=3 && anosEmpresa<10){
    novoSalario= salario + (salario*0.0125)
    document.write("O seu novo salário é de " + novoSalario + " reais")
 }
 else {
    novoSalario= salario + (salario*0.20)
    document.write("O seu novo salário é de " + novoSalario + " reais")
 }

