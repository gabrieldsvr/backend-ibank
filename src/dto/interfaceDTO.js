class InterfaceDTO {


    serializar() {
        return JSON.stringify(this);
    }

    static desserializar(jsonString,classDTO) {
    const data = JSON.parse(jsonString);
    return new classDTO(data);
}
}

module.exports = InterfaceDTO;