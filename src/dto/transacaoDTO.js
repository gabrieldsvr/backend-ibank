const InterfaceDTO = require("./interfaceDTO");

class TransacaoDTO extends InterfaceDTO {
    _id;
    _conta;
    _descricao;
    _data;
    _valor;
    _anexo;
    _tipo;
    _categoria;
    _efetivado;
    _status;


    constructor({id, conta, descricao, data, valor, anexo, tipo, categoria, efetivado, status}) {
        super();
        this._id = id;
        this._conta = conta;
        this._descricao = descricao;
        this._data = data;
        this._valor = valor;
        this._anexo = anexo;
        this._tipo = tipo;
        this._categoria = categoria;
        this._efetivado = efetivado;
        this._status = status;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get conta() {
        return this._conta;
    }

    set conta(value) {
        this._conta = value;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(value) {
        this._descricao = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get valor() {
        return this._valor;
    }

    set valor(value) {
        this._valor = value;
    }

    get anexo() {
        return this._anexo;
    }

    set anexo(value) {
        this._anexo = value;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(value) {
        this._tipo = value;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(value) {
        this._categoria = value;
    }

    get efetivado() {
        return this._efetivado;
    }

    set efetivado(value) {
        this._efetivado = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}
module.exports = TransacaoDTO;