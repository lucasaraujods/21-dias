//Faça um algoritmo que leia três números inteiros e determine qual dos três é maior

let numero1 = parseInt(window.prompt("Informe o primeiro número"))
let numero2 = parseInt(window.prompt("Informe o segundo número"))
let numero3 = parseInt(window.prompt("Informe o terceiro número"))

if(numero1> numero2 && numero1 > numero3){
    document.write("O numero maior é " + numero1)
}
else if(numero2> numero1 && numero2 > numero3){
    document.write("O numero maior é " + numero2)
}
else if(numero3 > numero2 && numero3 > numero1){
    document.write("O numero maior é " + numero3)
}
else{
    document.write("Existem dois ou mais números iguais digitados")
}