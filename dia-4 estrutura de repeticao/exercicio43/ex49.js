//Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] (inlcuindo os valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo. 

let contador = 0
let numero = 0
let contadorIncluso =0
let contadorNaoIncluso =0
while(contador <10){
    numero = Number(window.prompt("Informe um número"))
    contador++
    
    if (numero >= 10 && numero <= 20){
        contadorIncluso++ 
    }
    else {
        contadorNaoIncluso++ 
    }
}
console.log("o total de número entre 10 e 20 é de " + contadorIncluso)
console.log("o total de número que não estão entre 10 e 20 é de " + contadorNaoIncluso)