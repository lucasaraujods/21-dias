//Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será digitado pelo usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, o valor inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:

//Montar a tabuada de: 5
//Começar por: 4
//Terminar em: 7

//Vou montar a tabuada de 5 começando em 4 e terminando em 7:
//5 X 4 = 20
//5 X 5 = 25
//5 X 6 = 30
//5 X 7 = 35

let numero = parseInt(window.prompt("Informe o número para saber sua tabuada"))
let numeroComeco = parseInt(window.prompt("informe o número de onde começa"))
let numeroFim = parseInt(window.prompt("informe o número de onde termina"))

for(numeroComeco; numeroComeco<=numeroFim; numeroComeco++){

    console.log(`O número: ${numero} x ${numeroComeco} = ${numero * numeroComeco}`)
}

