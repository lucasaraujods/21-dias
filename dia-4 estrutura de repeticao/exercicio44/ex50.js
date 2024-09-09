//Escreva um algoritmo para ler 10 números. Todos os números lidos com valor inferior a 40 devem ser somados. Escreva o valor final da soma efetuada

let contador = 0
let numero = 0 
let contadorMenos40 = 0
let soma = 0

while(contador <=10){
    numero = Number(window.prompt("Informe o número"))
    contador++ 
    
    if (numero < 40){
        soma = soma + numero
    }
}
console.log("A soma dos números inferiores a 40 é " + soma)