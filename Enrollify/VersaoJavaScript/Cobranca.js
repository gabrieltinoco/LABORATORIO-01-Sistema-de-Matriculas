class Cobranca {
    constructor(dt_emissao, validade, valor, metodoPagamento, aluno, disciplina) {
        this.dt_emissao = dt_emissao;
        this.validade = validade;
        this.valor = valor;
        this.pago = false;
        this.metodoPagamento = metodoPagamento;
        this.aluno = aluno;
        this.disciplina = disciplina;
    }
    
    pagar() {
        this.pago = true;
    }
}