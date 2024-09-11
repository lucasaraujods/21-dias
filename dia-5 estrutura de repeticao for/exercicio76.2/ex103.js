//imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o aumento de salário de seus clientes.
//1 - Peça para seu cliente informar seu nome, idade e salário atual e exiba essas informações em tela.
//2 - Peça para que seu cliente confirme as informações, se ele informar que digitou errado, peça para colocar TODAS as informações novamente, repita as perguntas até o usuário informar que digitou as informações corretamente.
//3 - Faça a previsão do salário dele para os próximos 10 anos considerando que:
//   - O cliente recebe anualmente aumento salarial. 
// - Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o seu salário atual; A partir do segundo ano, os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior. Apresente todos os valores com o ano correspondente. Ex: 2024 - R$1600.

let nome =""
let idade = 0
let salarioAtual = 0
let continuar = true
let aumento = 0
let salarioTotal = 0
let ano=2024
let vetorAno = []

while(continuar){

    nome= prompt("Informe o seu nome: ")
    idade = parseInt(prompt("Informe a sua idade"))
    salarioAtual = parseFloat(prompt("Inorme o seu salário atual"))

    console.log(`O ${nome} com idade ${idade} com salario ${salarioAtual}`)

    continuar= prompt("As informações estão corrtas: (s/n)")
    if(continuar === "s")break; 
}

aumentoPercentual = 0.015

for(let i=1; i<=10; i++){

   
   aumento = salarioAtual * aumentoPercentual
   salarioAtual = salarioAtual + aumento

   console.log("No ano de " + ano + " com i = " + (i) + "o aumento foi de: " + aumento.toFixed(2) + " reais e o salario total foi de: " + salarioAtual.toFixed(2) + " reais")

   aumentoPercentual = aumentoPercentual * 2;
   ano++

}

