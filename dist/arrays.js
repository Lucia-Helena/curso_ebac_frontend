"use strict";

var alunos = [{
  nome: 'João',
  nota: 7
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 8
}, {
  nome: 'Ana',
  nota: 6
}, {
  nome: 'Lucas',
  nota: 4
}];

// Função para retornar apenas os alunos com nota maior ou igual a 6
function alunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Chamando a função e armazenando o resultado em uma variável
var alunosAprovadosArray = alunosAprovados(alunos);

// Imprimindo o resultado
console.log(alunosAprovadosArray);