//Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
//situação em relação ao alistamento militar.
// - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
//alistamento.
// - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
//alistamento!!

let anoNascimento = parseInt(window.prompt("Informe o ano de nascimento"))
let idade = 2024 - anoNascimento 

if(idade >= 18){
    let anospassados = idade - 18
    document.write(`Já se passaram ${anospassados} anos do alistamento`)
}else{
    let anospassados = 18 - idade
    document.write(`Faltam ${anospassados} anos para o alistamento`)
}