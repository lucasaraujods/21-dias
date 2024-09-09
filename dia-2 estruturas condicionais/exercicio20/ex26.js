//Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
//de triângulo será formado:
// - EQUILÁTERO: todos os lados iguais
// - ISÓSCELES: dois lados iguais
// - ESCALENO: todos os lados diferentes

let ladoA = parseInt(window.prompt("Informe o primeiro lado do trinagulo"))
let ladoB = parseInt(window.prompt("Informe o segundo lado do trinagulo"))
let ladoC = parseInt(window.prompt("Informe o terceiro lado do trinagulo"))

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    
    if((ladoA == ladoB) && (ladoB == ladoC) && (ladoC == ladoA))
        {
            document.write("O triangulo possui todos os lados iguais, portanto é equilatero");
        }
    else if ((ladoA == ladoB) && (ladoC != ladoB) && (ladoC != ladoA))
        {
            document.write("O trinagulo possui dois lados iguais, portanto é isoceles");
        }
        else if ((ladoB == ladoC) && (ladoA != ladoB) && (ladoA != ladoC))
        {
            document.write("O triangulo possui dois lados iguais, portanto é isoceles");
        }
        else if ((ladoC == ladoA) && (ladoB != ladoA) && (ladoB != ladoC))
        {
            document.write("O triangulo possui dois lados iguais, portanto é isoceles");
        }
        else
        {
            document.write("O triangulo possui todos os lados diferentes, portanto é escaleno");
        }
    }
        else{
            document.write("os valores fornecidos não formam um triangulo");
        }

