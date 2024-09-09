//Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
//ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
//ultrapassar este valor, calcular e escrever o seu salário total. 

let salario = Number(window.prompt("Informe um salario fixo"))
let valorVendas = Number(window.prompt("Informe o valor das vendas"))
let salarioNovo = 0 
let comissao = 0
let comissao5=0
let diferenca= 0

if(valorVendas < 1500.00){
    comissao = valorVendas*0.03
    salarioNovo = salario + comissao
    document.write(`O seu salário sem a comissão das vendas é ${salario} e com a comissão é ${salarioNovo}`)
}
else if(valorVendas>1500){
    diferenca = valorVendas - 1500
    comissao5 = diferenca *0.05
    comissao =  valorVendas*0.03
    salarioNovo = salario + comissao5 + comissao 
    document.write(`O seu salário sem a comissão das vendas é ${salario} e com a comissão é ${salarioNovo}`)

}