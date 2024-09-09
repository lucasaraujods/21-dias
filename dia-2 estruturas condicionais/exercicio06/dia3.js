let nome = ""
let idade= 0
let altura= 0
let peso= 0 

nome = prompt("Informe o seu nome")
idade= parseInt(prompt("informe a sua idade"))
altura= parseFloat(prompt("Informe a sua altura"))
peso= parseInt(prompt("Informe o seu peso"))

let anoNascimento= 0 
anoNascimento = 2023 - idade

let imc= 0
imc= peso / (altura * altura)

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu no ano de " + anoNascimento + ", tem " +altura+ " de altura, pesa " +peso+ " kgs e seu imc é " +imc+ " kgs/m² ")