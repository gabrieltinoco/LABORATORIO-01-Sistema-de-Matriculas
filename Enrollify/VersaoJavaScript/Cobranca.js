class Cobranca {
    constructor(dt_emissao, validade, valor, metodoPagamento) {
        this.dt_emissao = dt_emissao;
        this.validade = validade;
        this.valor = valor;
        this.pago = false;
        this.metodoPagamento = metodoPagamento;
    }
    
    pagar() {}
}