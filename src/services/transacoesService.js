const Transacoes = require('../models/transacoesModels');
const {contasService} = require('../services/contasService');
const {Logger, EnumLogs} = require('logger-sequelize/src/app');
const {Op} = require('sequelize');

class TransacoesService {
    constructor() {
        if (!TransacoesService.instance) {
            // Coloque aqui toda a lógica de inicialização do serviço, se necessário
            TransacoesService.instance = this;
        }

        return TransacoesService.instance;
    }

    // Método para criar uma Transacao
    async criarTransacao(dados) {
        try {
            const {conta, descricao, data, valor, anexo, tipo, categoria, efetivado, status} = dados;

            if (!conta || !descricao || !data || !valor || !tipo || !categoria) {
                console.log(dados)
                throw new Error('Esta faltando dados.');
            }

            const novaTrasacao = await Transacoes.create({
                conta,
                descricao,
                data,
                valor,
                anexo,
                tipo,
                categoria,
                efetivado,
                status
            }).then( await this.processarTransacao(conta,valor, tipo));

            // Aqui, obtemos o ID da conta criada usando novaConta.id
            await Logger.createLog(
                "TransacoesService.criarTransacao",
                `Transacao ${novaTrasacao.id} - Salvo com sucesso!`,
                EnumLogs.CREATED
            );

            return novaTrasacao;
        } catch (error) {
            await Logger.createLog(
                "TransacoesService.criarTransacao",
                `Erro ao criar a transacao: ${error.message}`,
                EnumLogs.ERROR
            );
            throw new Error(error);
        }
    }

    async processarTransacao(conta,valor, tipo) {
        if (tipo.toUpperCase() === 'DESPESA') {
            await contasService.descontarValorDaConta(conta, valor);
        } else {
            await contasService.depositarValorDaConta(conta, valor);
        }
    }
}

const TransacoesServiceInstance = new TransacoesService();
Object.freeze(TransacoesServiceInstance);

module.exports = {"transacoesService": TransacoesServiceInstance};