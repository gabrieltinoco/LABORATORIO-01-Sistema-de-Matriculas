import Usuario from './Usuario.js';

class Aluno extends Usuario {
    static MAX_DISCIPLINA_OBRIGATORIAS = 4;
    static MAX_OPTATIVAS = 2;
    
    constructor(id, email, senha, nome, matricula, curso) {
        super(id, email, senha, nome);
        this.matricula = matricula;
        this.curso = curso;
        this.disciplinasMatriculadas = [];
        this.notificacoes = [];
    }
    
    matricular(id) {}
    cancelarDisciplina(id) {}
}

export default Aluno;