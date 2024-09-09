//crie um algoritimo para somar e exibir os valores que o usuario digitar, porem, quando ele digitar o número zero, o loop deve acabar e mostar o resultado final da soma
let digitar 
let soma = 0

while(digitar != 0){
    digitar = Number(window.prompt("Informe um número"))
    soma = soma + digitar
}
document.write("A soma dos valores digitados é " + soma)

