//Cria um algoritimo que não permita que o usuario informe um valor menor que 100, se ele informar um valor menor deve
//mostrar uma mensagem solicitando novamente, se informar maior mostrar mensagem de sucesso!

let numero = Number(window.prompt("Informe um número menor que 100"))

while(numero<100){
   numero = Number(window.prompt("Informe um número novamente"))
}
document.write("Voce informou um valor maior que 100, parabéns!! ")