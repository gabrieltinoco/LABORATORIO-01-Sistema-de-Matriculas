class Secretaria {
    constructor() {
        this.disciplinas = [];
        this.alunos = [];
        this.professores = [];
    }
    
    gerarCurriculo(disciplinas) {
        return new Curriculo(Date.now(), 'Atual', disciplinas);
    }
    atualizarInformacoesCurso(curso) {
        // Atualiza informações do curso
    }
    encerrarDisciplina(disciplina) {
        disciplina.status = EstadoDisciplina.ENCERRADA;
    }
    cancelarDisciplina(disciplina) {
        disciplina.status = EstadoDisciplina.CANCELADA;
    }
}