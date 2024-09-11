//Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida

let vetorIdade = []
let vetorAltura = []
let vetorIdadeInverso = []
let vetorAlturaInverso = []
let contador 

for(let i=0; i<5; i++){

    let idade = parseInt(prompt("Informe a " + (i+1) + " ª idade:"))
    vetorIdade[i] = idade

    let altura = parseFloat(prompt("informe a " + (i+1) + " altura"))
    vetorAltura[i] = altura
}

console.log("Ordem original do vetor idade: " + vetorIdade)
console.log("Ordem original do vetor altura: " + vetorAltura)

contador=4

for(let i=0; i<5; i++){

    vetorIdadeInverso[i] = vetorIdade[contador]
    vetorAlturaInverso[i] = vetorAltura[contador]
    contador--
}

console.log("A ordem inversa da idade: " + vetorIdadeInverso)
console.log("A ordem inversa da altura: " + vetorAlturaInverso)