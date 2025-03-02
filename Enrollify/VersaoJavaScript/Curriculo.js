class Curriculo {
    constructor(id, semestre) {
        this.id = id;
        this.semestre = semestre;
        this.disciplinas = [];
    }
    
    adicionarDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
    }
    removerDisciplina(disciplina) {
        this.disciplinas = this.disciplinas.filter(d => d.id !== disciplina.id);
    }
}
