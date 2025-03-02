class Notificacao {
    constructor(destinatario, conteudo) {
        this.destinatario = destinatario;
        this.conteudo = conteudo;
        this.lida = false;
    }
    
    ler() {
        this.lida = true;
    }
}
