const {contasService} = require('../services/contasService.js');


class ContasController {
    async createConta(req, res) {
        try {
            const novaConta = await contasService.criarConta(req.body);
            res.status(201).json(novaConta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findContas(req, res) {
        try {
            const contas = await contasService.buscarContas(req.usuario);
            res.json(contas);
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível buscar as contas.' });
        }
    }

    async buscarContaPorId(req, res) {
        try {
            const { id } = req.params;
            const conta = await contasService.buscarContaPorId(id,req.usuario);
            if (!conta) {
                return res.status(404).json({ error: 'Conta não encontrada.' });
            }
            res.json(conta);
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível buscar a conta.' });
        }
    }

    async atualizarConta(req, res) {
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body;
            const contaAtualizada = await contasService.atualizarConta(id, dadosAtualizados);
            if (!contaAtualizada) {
                return res.status(404).json({ error: 'Conta não encontrada.' });
            }
            res.json(contaAtualizada);
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível atualizar a conta.' });
        }
    }

    async excluirConta(req, res) {
        try {
            const { id } = req.params;
            const excluido = await contasService.excluirConta(id);
            if (!excluido) {
                return res.status(404).json({ error: 'Conta não encontrada.' });
            }
            res.json({ message: 'Conta excluída com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível excluir a conta.' });
        }
    }

    async buscarContasComSaldoMaiorQue(req, res) {
        try {
            const { valor } = req.params;
            const contas = await contasService.buscarContasComSaldoMaiorQue(valor);
            res.json(contas);
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível buscar as contas com saldo maior que o valor especificado.' });
        }
    }
}

module.exports = ContasController;