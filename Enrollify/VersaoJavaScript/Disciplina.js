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
    
    adicionarAluno(aluno) {
        if (this.alunosMatriculados.length < Disciplina.MAX_ALUNOS) {
            this.alunosMatriculados.push(aluno);
            return true;
        }
        return false;
    }
    
    removerAluno(aluno) {
        this.alunosMatriculados = this.alunosMatriculados.filter(a => a.id !== aluno.id);
        if (this.alunosMatriculados.length < Disciplina.MIN_ALUNOS) {
            this.status = EstadoDisciplina.CANCELADA;
        }
    }
}