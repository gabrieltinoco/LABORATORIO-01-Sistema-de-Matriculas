class Disciplina {
    static MIN_ALUNOS = 3;
    static MAX_ALUNOS = 60;
    
    constructor(id, nome, credito, valor, professor) {
        this.id = id;
        this.nome = nome;
        this.credito = credito;
        this.valor = valor;
        this.alunosMatriculados = [];
        this.professor = professor;
        this.status = EstadoDisciplina.ATIVA;
    }
    
    adicionarAluno(aluno) {}
    removerAluno(aluno) {}
}
