const {categoriasService} = require('../services/categoriasService.js');
const CategoriaDTO = require('../dto/categoriaDTO');

class ContasController {
    async createConta(req, res) {
        try {
            const dataJson = req.body;

            const categoriaDTO = new CategoriaDTO(dataJson);

            const novaCategoria = await categoriasService.criarCategoria(categoriaDTO);
            res.status(201).json(novaCategoria);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ContasController;