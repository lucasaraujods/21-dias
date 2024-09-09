//Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

let totA = 80000
let totB = 200000
let anos= 0

while(totA<=totB){
    totA = totA + totA * 0.03
    totB = totB + totB * 0.0015
    anos++
}
console.log("A quantidade de anos para a população A passar a população B é de " + anos + " anos")