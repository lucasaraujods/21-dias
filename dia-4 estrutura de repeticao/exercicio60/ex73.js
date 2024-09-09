//O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.

let temperaturaMenor = 1000
let temperaturaMaior = 0
let temperatura = 0
let somaTemperatura = 0
let media = 0
let contador = 0
let continuar = true

while(continuar){

    temperatura = Number(window.prompt("Informe a temperatura"))
    somaTemperatura += temperatura 
    contador++
    
    if(temperatura > temperaturaMaior){
        temperaturaMaior = temperatura
    }
    if(temperatura < temperaturaMenor){
        temperaturaMenor = temperatura
    }

    let opcao = window.prompt("Deseja continuar informando as temperaturas: (s/n) ").toLowerCase()
    continuar = (opcao === "s")
}
media = somaTemperatura/contador
console.log("Foram informadas: " + contador + " e a média é de: " + media + " A maior temperatura informada foi de: " + temperaturaMaior + " e a menor foi de " + temperaturaMenor)