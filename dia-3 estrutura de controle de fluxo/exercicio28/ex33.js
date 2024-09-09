//Elabore um algoritmo que leia o salário e profissão e caso a profissão seja de "Técnico", reajuste o salário informado em 15%; no caso de a profissão ser "Gerente" o reajuste do salário será de 13%, nos demais casos o aumento será de 11%. Como saída o algoritmo deverá mostrar a profissão, o salário atual e o salário reajustado.

let profissao = window.prompt("Informe a sua profissão")
let salario = Number(window.prompt("Informe o seu salário"))

switch(profissao){

    case "gerente":
        salarioNovo = salario + (salario*0.13)
        document.write(`A sua profissão é gerente o seu salário atual é ${salario} e seu salário novo é ${salarioNovo}`)
        break;
    case "tecnico":
        salarioNovo = salario + (salario*0.15)
        document.write(`A sua profissão é técnico o seu salário atual é ${salario} e seu salário novo é ${salarioNovo}`)
        break;
    default:
        salarioNovo = salario + (salario*0.11)
        document.write(`A sua profissão é ${profissao} o seu salário atual é ${salario} e seu salário novo é ${salarioNovo}`)
        break;
}

