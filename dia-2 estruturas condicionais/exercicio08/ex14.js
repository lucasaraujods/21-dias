//Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
//dela e depois mostre se ela pode ou não votar.

let anoNascimento = parseInt(window.prompt("Informe o seu ano de nascimento"))
let idade = 2024 - anoNascimento 

if (idade<16){
    document.write("Você tem " + idade + " anos e não pode votar")
}
else{
    document.write("Você tem " + idade + " anos e pode votar")
}
