//Escreva um programa que leia várias notas (entre 0 e 10) e calcule a média dessas notas. O programa deve parar de ler notas quando uma nota fora do intervalo (0 a 10) for inserida. Use um loop do while para garantir que pelo menos uma nota seja lida.

let nota = 0
let soma = 0 
let quantidade = 0
let media = 0
let continuar 

do{
    nota = Number(window.prompt("Informe a nota"))
    
    if(nota >= 0 && nota<=10){
        soma = soma + nota
        quantidade++
        continuar = true
    }
    else{
        continuar = false 
    }

}while(continuar)

media= soma/quantidade
document.write(`A média das notas inseridas é: ${media}`);