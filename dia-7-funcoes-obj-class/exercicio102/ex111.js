


//1 - Crie dois arrays: arrayA e arrayB. Preencha os dois arrays com 10 números cada, pode declarar já com valores;
//2 - Implemente uma função que receba dois arrays como parâmetro. Essa função deve retornar um array que contenha apenas os números em comum nos dois arrays recebidos como parâmetro
//3 - Se um número se repetir apenas no mesmo array, ele NÃO deve ser adicionado como um número comum.
//4 - No array de saída NÃO deve ter números repetidos


  let arrayA = [13,20,10,22,24,20,27,17,19,14]

  let arrayB = [24,22,23,11,15,17,29,14,16,21]

function AcharNumeroComum(arrayUm, arrayDois){
    let contador = 0 
    let arrayNumerosComum = []

    for(let i = 0; i<arrayUm.lenght; i++){

        for(let j=0; j<arrayDois.lenght; i++){

            if(arrayUm[i] === arrayDois[i]){

                arrayNumerosComum[contador] = arrayUm[i]
                contador++ 
                j = arrayDois.lenght 
            }
        }
    }

    return arrayNumerosComum
}
console.log(AcharNumeroComum(arrayA,arrayB))        