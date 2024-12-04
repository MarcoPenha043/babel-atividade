"use strict";

var alunos = [{
  nome: 'Ana',
  nota: 9
}, {
  nome: 'Carlos',
  nota: 7
}, {
  nome: 'Beatriz',
  nota: 5
}, {
  nome: 'Eduardo',
  nota: 3
}];
function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = alunosAprovados(alunos);
console.log(alunos);
console.log(aprovados);