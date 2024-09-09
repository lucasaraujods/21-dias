//Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
//para todos, mas especialmente para mulheres. Faça um programa que leia nome,
//sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
//que:
 //- Homens ganham 5% de desconto
 //- Mulheres ganham 13% de desconto

 let nome =  window.prompt("Informe o seu nome")
 let sexo = window.prompt("Informe o seu sexo com M ou F")
 let valor = Number(window.prompt("Informe o valor das compras"))

 if(sexo === "M"){
    let desconto = valor - (valor * 0.05)
    document.write(`O ${nome} com o sexo ${sexo} ganhou um desconto de 5% assim o valor total é R$${desconto}`)
 }else{
    let desconto = valor - (valor * 0.13)
    document.write(`O ${nome} com o sexo ${sexo} ganhou um desconto de 13% assim o valor total é R$${desconto}`)
 }


