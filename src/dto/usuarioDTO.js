const bcrypt = require('bcrypt');
const InterfaceDTO = require("./interfaceDTO");

class UsuarioDTODTO extends InterfaceDTO {
    _id;
    _nome;
    _email;
    _senha;
    _status;


    constructor({id, nome, email, senha, status}) {
        super();
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._senha = senha;
        this._status = status;
        this._senha = senha;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get senha() {
        return this._senha;
    }

    set senha(value) {
        bcrypt.hash(value, 10)
            .then((hash) => {
                this._senha = hash;
            }).catch((error) => {
                console.error('Erro ao criar hash da senha:', error);
            });
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}

module.exports = UsuarioDTODTO;