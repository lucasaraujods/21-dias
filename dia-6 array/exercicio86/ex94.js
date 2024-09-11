//Escreva um programa que leia 15 números e guarde-os em um vetor. No final, mostre o vetor inteiro na tela e em seguida mostre em que posições foram digitados valores que são múltiplos de 10.

let vetor = new Array(5)
let vetorPosicoes = [];

for(let i=0; i < 5; i++){

    let numero = parseInt(window.prompt("Informe o númeor " + (i+1) + "º"))
    vetor[i] = numero 

    if(numero % 10 === 0){

        vetorPosicoes[i] = i
        
    }
}
console.log("A posições em que aparece um multiplo de 10 são: " + vetorPosicoes)
console.log("Os números os vetor são: " + vetor)

