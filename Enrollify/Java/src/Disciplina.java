import java.util.List;

public class Disciplina {
    public int id;
    public String nome;
    public int creditos;
    public int vagasTotais;
    public int vagasOcupadas;
    public List<Aluno> alunosMatriculados;
    public Professor professor;

    public boolean adicionarAluno(Aluno aluno) {
        // TODO
        return false;
    }

    public void removerAluno(Aluno aluno) {
        // TODO
    }

    public boolean verificarDisponibilidade() {
        // TODO
        return false;
    }
}