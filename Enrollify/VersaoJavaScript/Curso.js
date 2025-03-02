class Curso {
    constructor(id, nome, creditos) {
        this.id = id;
        this.nome = nome;
        this.creditos = creditos;
        this.disciplinas = [];
    }
    
    adicionarDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
    }
    removerDisciplina(disciplina) {
        this.disciplinas = this.disciplinas.filter(d => d.id !== disciplina.id);
    }
}