import Usuario from './Usuario.js';

class Professor extends Usuario {
    constructor(id, email, senha, nome) {
        super(id, email, senha, nome);
        this.disciplinas = [];
    }
    
    visualizarAlunos(disciplina) {
        return disciplina.alunosMatriculados;
    }
}