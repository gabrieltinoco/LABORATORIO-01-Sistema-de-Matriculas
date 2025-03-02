class SistemaCobranca {
    processarCobrancaMatricula(aluno, disciplina) {
        return new Cobranca(new Date(), new Date(), disciplina.valor, MetodoPagamento.BOLETO, aluno, disciplina);
    }
}