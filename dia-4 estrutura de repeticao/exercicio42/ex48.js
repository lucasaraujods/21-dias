//Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS
let contador = 0
let numero = 0 
let contadorneg =0
let numeroneg = 0 
while(contador <=10){
    numero = Number(window.prompt("Informe um número"))
    contador++ 

    if(numero < 0){
       
        contadorneg++ 
    }
   
}
console.log("o o total de números negativos é de " + contadorneg )