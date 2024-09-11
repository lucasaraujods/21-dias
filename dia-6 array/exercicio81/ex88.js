//Faça um Programa que leia um vetor de 5 números reais e mostre-os na ordem inversa.

let array = []
let arrayInvertido = []

//popular o array 

for(let i = 0; i<5; i++){

    let numero = parseInt(prompt("Digite o " + (1 + i) + "º número"))
    array[i] = numero 
}

console.log("Array original: " + array)

//invertendo o array:

let contador = 4 
for(let i= 0; i<5; i++){

    arrayInvertido[i] = array[contador]
    contador--

}

console.log("Array invetido é " + arrayInvertido)
