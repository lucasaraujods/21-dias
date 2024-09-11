//Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

let nota = [4];
let mediaNotas = 0
let somaNotas= 0
let totNotas= 0

for(let i=0; i<4; i++){

    nota[i] = parseFloat(prompt("Informe a " + (i+1) + "º nota: "))
    somaNotas += nota[i]
    totNotas++   
}

mediaNotas=somaNotas/totNotas

console.log("as notas foram: " + nota)
console.log("A media das notas é de " + mediaNotas)
