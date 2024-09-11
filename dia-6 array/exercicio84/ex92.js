//Crie um programa que preencha automaticamente (usando lógica, não apenas
  //  atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
  //  5 3 5 3 5 3 5 3 5 3
  //  0 1 2 3 4 5 6 7 8 9

  let vetor = new Array(10);

  for(let i=0;i<10; i++){

    if(i % 2 === 0){

        vetor[i] =5;
    }
    else{
        vetor[i] = 3;
    }
  }

  for (let i = 0; i < 10; i++) {
    console.log("indice " + i + " = " + vetor[i]);
  }

