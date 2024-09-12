//1 - Crie uma função que pergunte o nome e o salário de um colaborador;
//2 - Depois crie uma função que deve ser chamada dentro da função que solicita as informações, essa função irá calcular o aumento de salário conforme a seguinte tabela:
//- ATÉ R$1.500,00 : aumento de 20%
//- R$1.501,00 até R$2.000,00 : aumento de 15%
//- R$2.001,00 até R$3.000,00 : aumento de 10%
//- R$3.001,00 em diante : aumento de 5%



//Essa função tem que receber dois parâmetros: o salário e o nome do colaborador. Para calcular o aumente basta multiplicar o salário pela porcentagem.
let continuar

function Informacoes(){

    let nome = prompt("Informe o seu nome")
    let salario = parseFloat(prompt("Informe o seu salário"))

    CalcularAumentoSalario(nome,salario)
}

    function CalcularAumentoSalario(nome,salario){

       

        let aumentoSalario = 0

        if (salario<=1500){

            aumentoSalario = salario + (salario*0.20)
            console.log(`O ${nome} possui o salário atualizado de R$ ${aumentoSalario} com 20% de aumento`)
        }
        else if(salario>=1501 && salario<=2000){

            aumentoSalario = salario + (salario*0.15)
            console.log(`O ${nome} possui o salário atualizado de R$ ${aumentoSalario}  com 15% de aumento `)
        } 
        else if(salario>= 2001 && salario<=3000){

            aumentoSalario = salario + (salario*0.10)
            console.log(`O ${nome} possui o salário atualizado de R$ ${aumentoSalario} com 10% de aumento`)
        }
        else{

            aumentoSalario = salario + (salario*0.05)
            console.log(`O ${nome} possui o salário atualizado de R$ ${aumentoSalario} com 5% de aumento`)
        }

            CalcularNovamente(); // perguntar se deseja calcular novamente
        
 
    }

    function CalcularNovamente(){

        continuar = prompt("Deseja continuar calculando novamente com novas informações?")
        if(continuar === "sim"){

           Informacoes(); //reiniciar o processo
        }
        else{
            console.log("Programa encerrado !!")
        }
    }