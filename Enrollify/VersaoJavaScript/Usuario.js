class Usuario {
    constructor(id, nome, login, senha) {
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.senha = senha;
    }
    autenticar(login, senha) {
        return this.login === login && this.senha === senha;
    }
}
export default Usuario;
