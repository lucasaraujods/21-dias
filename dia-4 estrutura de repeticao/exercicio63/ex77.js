//Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de trânsito.

//Foram obtidos os seguintes dados: Código da cidade; Número de veículos de passeio (em 1999); Número de acidentes de trânsito com vítimas (em 1999).

//Deseja-se saber: Qual o maior e menor índice de acidentes de transito e a que cidade pertence; Qual a média de veículos nas cinco cidades juntas; Qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.

let contador = 0
let contadorCidadeComMenos200Veiculos= 0
let codigoCidade = 0
let numeroVeiculos = 0
let numeroAcidentes = 0
let numeroMaiorAcidentes = Number.MIN_SAFE_INTEGER
let numeroMenorAcidentes =  Number.MAX_SAFE_INTEGER
let cidadeMaiorAcidentes = 0
let cidadeMenorAcidentes = 0
let somaVeiculos = 0
let mediaVeiculos = 0
let somaAcidentes = 0
let mediaAcidentes = 0
let somaAcidentesMenos2000Veiculos = 0
let mediaAcidentesMenos2000Veiculos = 0

while(contador<5){

        codigoCidade = window.prompt("Informe o código da " + contador + " ª cidade ")
        numeroVeiculos = parseInt(window.prompt("Informe o número de veículos de passeio da " + contador + " contagem: "))
        numeroAcidentes = parseInt(window.prompt("Informe o número de acidentes da " + contador + " contagem: "))

        somaVeiculos = somaVeiculos + numeroVeiculos
        contador++ 

        if(numeroVeiculos < 2000){

            somaAcidentesMenos2000Veiculos = somaAcidentesMenos2000Veiculos + numeroAcidentes
            contadorCidadeComMenos200Veiculos++ 
        }

        if(numeroAcidentes > numeroMaiorAcidentes){
            numeroMaiorAcidentes = numeroAcidentes
            cidadeMaiorAcidentes = codigoCidade
        }
        if(numeroAcidentes < numeroMenorAcidentes){
            numeroMenorAcidentes = numeroAcidentes
            cidadeMenorAcidentes = codigoCidade 
        }
}
mediaVeiculos = somaVeiculos/contador
console.log("A media de veiculos nas 5 cidades juntas é de " + mediaVeiculos + " veiculos")
mediaAcidentesMenos2000Veiculos = somaAcidentesMenos2000Veiculos/contadorCidadeComMenos200Veiculos
console.log("A media de acidentes nas cidades com menos de 2000 veiculos é de " + mediaAcidentesMenos2000Veiculos + " acidentes ")
console.log("O maior indice da a cidantes registrado foi entre as 5 cidades foi de " + numeroMaiorAcidentes + " na cidade do código: " + cidadeMaiorAcidentes)
console.log("O menor número de acidentes registrados entre as 5 cidades foi de " + numeroMenorAcidentes + " na cidade do código: " + cidadeMenorAcidentes)