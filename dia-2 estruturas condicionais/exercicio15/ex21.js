//Crie um programa que leia o tamanho de três segmentos de reta.
//Analise seus comprimentos e diga se é possível formar um triângulo com essas
//retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
//de cada lado deve ser menor que a soma dos outros dois.


let a = parseInt(window.prompt("Informe o primeiro lado"))
let b = parseInt(window.prompt("Informe o segundo lado"))
let c = parseInt(window.prompt("Informe o terceiro lado"))

if (a < b + c && b < a + c && c < a + b){
    document.write("Forma-se um triangulo")
}
else{
    document.write("Não forma um triangulo")
}