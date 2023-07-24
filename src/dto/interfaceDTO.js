class InterfaceDTO {


    serializar() {
        return JSON.stringify(this);
    }

    static desserializar(jsonString) {
    const data = JSON.parse(jsonString);
    return new CategoriaDTO(data);
}
}

module.exports = InterfaceDTO;