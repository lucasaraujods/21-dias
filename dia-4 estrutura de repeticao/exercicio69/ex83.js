//Solicite o nome e o cpf do seu cliente.
//Pergunte um valor.
//Ofereça a opção de saque ou depósito.
//Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
//Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
//Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
//Exiba o saldo total.
//Exiba o maior valor inserido(independente de ser depósito ou saque).
//Exiba a média dos valores inseridos(independente de ser depósito ou saque).


//REGRAS: 
  //  1- Considere iniciar a variável saldo com algum valor

  //  1- Não deve ser permitido sacar um valor não disponível no saldo.

  //  2- Não deve ser permitido sacar nem depositar um valor negativo.

  let saldoTotal = 0
  let contador =0
  let somaValores = 0
  let continuar = 1
  let nome= ""
  let cpf = 0 
  let valor = 0
  let opcao = 0
  let saldo = 2000
  let maiorValor = Number.MIN_SAFE_INTEGER
  let media = 0

  do{

     nome = window.prompt("Informe seu nome")
     cpf = Number(window.prompt("Informe seu cpf: "))
     valor = Number(window.prompt("Informe um valor: "))
     opcao = parseInt(window.prompt("Informe se deseja sacar-1 ou depositar-2 ? "))

     

     
     if(opcao === 1 && valor>saldo ){

        console.log("Não é possivel sacar este valor, o seu saldo é de " + saldo)
     }
     if(opcao === 1 || opcao === 2 && valor < 0){

        console.log("Não é possivel sacar ou depositar um valor negativo ")
     }

     if(opcao === 1 || opcao === 2 ){

        if(opcao === 1){

            saldoTotal = saldo - valor 
         }
         else if(opcao === 2 ){
            saldoTotal= saldo + valor 
         }

         contador++
     }
     else{
        console.log("A opção escolhida é inválida ")
     }

     if(valor>maiorValor){

        maiorValor = valor 
     }

     somaValores = somaValores + valor 

     continuar= parseInt(window.prompt("Informe se deseja continuar com 1- continuar e 2-Parar"))

  }while(continuar === 1)

    media = somaValores/contador

    console.log("A média dos valores digitados é " + media)
    console.log("O seu saldo total é " + saldoTotal)
    console.log("O maior valor inserido é " + maiorValor)
