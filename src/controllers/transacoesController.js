const {transacoesService} = require('../services/transacoesService');
const TranscaoDTO = require('../dto/transacaoDTO');

class TransacoesController {
    constructor() {
        if (!TransacoesController.instance) {
            TransacoesController.instance = this;
        }
        return TransacoesController.instance;
    }
    async criarTransacao(req, res) {
        try {
            const dataJson = req.body;

            const transcaoDTO = new TranscaoDTO(dataJson);
            const novaTransacao = await transacoesService.criarTransacao(transcaoDTO);
            res.status(201).json(novaTransacao);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

const TransacoesControllerInstance = new TransacoesController();
Object.freeze(TransacoesControllerInstance);

module.exports = {"transacaoController": TransacoesControllerInstance};