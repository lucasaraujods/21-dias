//Você deve criar um sistema de alunos que seja possível cadastrar um novo aluno, ordenar os alunos por nota, ordenar os alunos por idade, ordenar os alunos por nome, obter a média das notas e a quantidade de alunos cadastrados;

//Crie uma classe "Aluno" com as propriedades: Nome, Idade e Nota;
//Crie um construtor que preencha as 3 propriedades;
//Crie um array para armazenar os Alunos cadastrados;
//Crie uma função "CadastrarAluno()" que recebe três parâmetros: nome, idade e nota. Nesta função crie um novo objeto de aluno com as informações  recebidas via parâmetro, adicione esse objeto ao array de alunos e retorne o objeto Aluno. Antes de salvar no array, valide se já não existe um objeto com o mesmo Nome, para evitar duplicidade.

//Cria uma função "OrdenarPorNota()" que  recebe um array de alunos como parâmetro e ordene o array da menor para a maior nota e retorne o array ordenado;


//Crie uma função "OrdenarPorIdade()" que recebe um array de alunos como parâmetro e ordene o array da maior para a menor idade e retorne o array ordenado;


//Crie uma função "OrdenarPorNome()" que recebe um array de alunos como parâmetro e ordene o array em ordem alfabética com base no nome e retorne o array ordenado; (essa é um desafio, se necessário façam uma pesquisa)

//Crie uma função "CalcularMedia()" que recebe um array de alunos como parâmetro e calcule a média das notas e retorne a media calculada;

let arrayAlunos = [];

class Aluno {
    constructor(nome, idade, nota) {
        this.Nome = nome;
        this.Idade = idade;
        this.Nota = nota;
    }
}

function CadastrarAluno(nome, idade, nota) {
    let objetoAluno = new Aluno(nome, idade, nota);
    let alunoComMesmoNome = arrayAlunos.some(aluno => aluno.Nome === nome);

    if (alunoComMesmoNome) {
        console.log("O aluno: " + nome + " já está cadastrado.");
    } else {
        arrayAlunos.push(objetoAluno);
        console.log("Aluno " + nome + " cadastrado com sucesso.");
    }
}

function OrdenarPorNota(arrayAlunos) {
    return arrayAlunos.sort((a, b) => a.Nota - b.Nota);
}

function OrdenarPorIdade(arrayAlunos) {
    return arrayAlunos.sort((a, b) => b.Idade - a.Idade);
}

function OrdenarPorNome(arrayAlunos) {
    return arrayAlunos.sort((a, b) => {
        const nomeA = a.Nome.toUpperCase();
        const nomeB = b.Nome.toUpperCase();

        if (nomeA < nomeB) {
            return -1;
        }
        if (nomeA > nomeB) {
            return 1;
        }
        return 0;
    });
}

function CalcularMedia(arrayAlunos) {
    if (arrayAlunos.length === 0) {
        return 0; // retorna 0 se o array estiver vazio
    }

    let somaNotas = 0;
    arrayAlunos.forEach(aluno => {
        somaNotas += Number(aluno.Nota);
    });

    return somaNotas / arrayAlunos.length;
}

