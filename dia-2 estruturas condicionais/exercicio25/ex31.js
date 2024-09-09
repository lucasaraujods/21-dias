//Uma empresa precisa reajustar o salário dos seus funcionários, dando um
//aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
//o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
//No final, mostre o seu novo salário, baseado na tabela a seguir:
//- Mulheres
 //- menos de 15 anos de empresa: +5%
 //- de 15 até 20 anos de empresa: +12%
 //- mais de 20 anos de empresa: +23%
//- Homens
 //- menos de 20 anos de empresa: +3%
 //- de 20 até 30 anos de empresa: +13%
 //- mais de 30 anos de empresa: +25%

 let salario = Number(window.prompt("Informe o seu salario"))
 let genero = window.prompt("Informe o seu sexo")
 let ano = parseInt(window.prompt("Informe o ano de empresa"))
 let salarioNovo = 0

 if(genero === "F" ){
    if(ano<15){
        salarioNovo = salario + (salario*0.05)
        document.write("O seu salário novo é " + salarioNovo)
    }
    else if(ano>= 15 && ano <= 20){
        salarioNovo = salario + (salario*0.12)
        document.write("O seu salário novo é " + salarioNovo)
    }
    else {
    salarioNovo = salario + (salario*0.23)
    document.write("O seu salário novo é " + salarioNovo)
    }
 }
 if(genero === "M"){
    if(ano<20){
        salarioNovo = salario + (salario*0.03)
        document.write("O seu salário novo é " + salarioNovo )
    }
    else if(ano>= 20 && ano <= 30){
        salarioNovo = salario + (salario*0.13)
        document.write("O seu salário novo é " + salarioNovo)
    }
    else {
    salarioNovo = salario + (salario*0.25)
    document.write("O seu salário novo é " + salarioNovo)
    }
 }