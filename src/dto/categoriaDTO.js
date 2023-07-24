class CategoriaDTO {
    constructor({id, nome, cor, icone, tipo, status}) {
        this._id = id;
        this._nome = nome;
        this._cor = cor;
        this._icone = icone;
        this._tipo = tipo;
        this._status = status;
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

    get cor() {
        return this._cor;
    }

    set cor(value) {
        this._cor = value;
    }

    get icone() {
        return this._icone;
    }

    set icone(value) {
        this._icone = value;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(value) {
        this._tipo = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    serializar() {
        return JSON.stringify(this);
    }

    static desserializar(jsonString) {
        const data = JSON.parse(jsonString);
        return new CategoriaDTO(data);
    }
}

module.exports = CategoriaDTO;