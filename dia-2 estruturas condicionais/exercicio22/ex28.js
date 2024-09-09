//Elabore um algoritmo que dada a idade de um nadador classifique-o em uma das seguintes categorias:
//• Infantil A = 5 a 7 anos
//• Infantil B = 8 a 11 anos
//• Juvenil A = 12 a 13 anos
//• Juvenil B = 14 a 17 anos
//• Adultos = Maiores de 18 anos

let idade = parseInt(window.prompt("Informe a sua idade"))

if(idade>= 5 && idade <= 7){
    document.write("está na categoria Infantil A")
}
else if(idade>= 8 && idade <= 11){
    document.write("está na categoria Infantil B")
}
else if(idade>= 12 && idade <= 13){
    document.write("está na categoria Juvenil A ")
}
else if(idade>= 14 && idade <= 17){
    document.write("está na categoria Juvenil B")
}
else {
        document.write("está na categoria Adultos ")

}