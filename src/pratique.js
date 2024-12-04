const alunos = [
    { nome: 'Ana', nota: 9},
    { nome: 'Carlos', nota: 7},
    { nome: 'Beatriz', nota: 5},
    { nome: 'Eduardo', nota: 3}
];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}
const aprovados = alunosAprovados(alunos);
console.log(alunos);
console.log(aprovados);