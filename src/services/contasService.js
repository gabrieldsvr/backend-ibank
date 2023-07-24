const  Contas = require('../models/contasModels'); // Importe o modelo Contas do arquivo models.js que contém a definição do modelo usando Sequelize
const  {Logger,EnumLogs} = require('logger-sequelize/src/app');
const { Op } = require('sequelize');

class ContasService {

    constructor() {
        if (!ContasService.instance) {
            // Coloque aqui toda a lógica de inicialização do serviço, se necessário
            ContasService.instance = this;
        }

        return ContasService.instance;
    }

    // Método para criar uma conta
    async criarConta(dados) {
        try {
            const { nome, tipo, saldo, cor, banco, status } = dados;

            if (!nome || !tipo || !saldo || !cor) {
                  throw new Error('Esta faltando dados.');
            }

            const novaConta = await Contas.create({
                nome,
                tipo,
                banco,
                saldo,
                cor,
                status,
            });

            // Aqui, obtemos o ID da conta criada usando novaConta.id
            await Logger.createLog(
                "ContasService.criarConta",
                `Conta ${novaConta.id} - Salvo com sucesso!`,
                EnumLogs.CREATED
            );

            return novaConta;
        } catch (error) {
            await Logger.createLog(
                "ContasService.criarConta",
                `Erro ao criar a conta: ${error.message}`,
                EnumLogs.ERROR
            );
            throw new Error( error);
        }
    }

    // Método para buscar todas as contas
    async buscarContas() {
        try {
            return await Contas.findAll();
        } catch (error) {
            throw new Error('Não foi possível buscar as contas.');
        }
    }

    // Método para buscar uma conta pelo ‘ID’
    async buscarContaPorId(id) {
        try {
            return await Contas.findByPk(id);
        } catch (error) {
            throw new Error('Não foi possível buscar a conta.');
        }
    }

    // Método para atualizar uma conta
    async atualizarConta(id, dadosAtualizados) {
        try {
            const conta = await Contas.findByPk(id);
            if (conta) {
                await conta.update(dadosAtualizados);
                return conta;
            }
            return null;
        } catch (error) {
            throw new Error('Não foi possível atualizar a conta.');
        }
    }

    // Método para excluir uma conta
    async excluirConta(id) {
        try {
            const conta = await Contas.findByPk(id);
            if (conta) {
                await conta.destroy();
                return true;
            }
            return false;
        } catch (error) {
            throw new Error('Não foi possível excluir a conta.');
        }
    }

    // Método para buscar contas com saldo maior que um valor especificado
    async buscarContasComSaldoMaiorQue(valor) {
        try {
            return await Contas.findAll({
                where: {
                    saldo: {
                        [Op.gte]: valor,
                    },
                },
            });
        } catch (error) {
            throw new Error('Não foi possível buscar as contas com saldo maior que o valor especificado.');
        }
    }

    async descontarValorDaConta(contaId, valorTransacao) {
        try {
            // Buscar a conta pelo ID no banco de dados
            const conta = await Contas.findByPk(contaId);

            if (!conta) {
                throw new Error('Conta não encontrada.');
            }


            // Realizar o desconto do valor da transação da conta
            conta.saldo -= valorTransacao;

            // Salvar a conta atualizada no banco de dados
            await conta.save();

            // Retornar a conta atualizada
            return conta;
        } catch (error) {
            await Logger.createLog(
                "ContasService.descontarValorDaConta",
                `Erro ao descontar valor da conta: ${error.message}`,
                EnumLogs.ERROR
            );
            throw new Error('Erro ao descontar valor da conta: ' + error.message);
        }
    }

    async depositarValorDaConta(contaId, valorTransacao) {
        try {
            // Buscar a conta pelo ID no banco de dados
            const conta = await Contas.findByPk(contaId);

            if (!conta) {
                throw new Error('Conta não encontrada.');
            }


            // Realizar o depósito do valor da transação da conta
            conta.saldo += valorTransacao;

            // Salvar a conta atualizada no banco de dados
            await conta.save();

            // Retornar a conta atualizada
            return conta;
        } catch (error) {
            await Logger.createLog(
                "ContasService.depositarValorDaConta",
                `Erro ao depositar valor da conta: ${error.message}`,
                EnumLogs.ERROR
            );
            throw new Error('Erro ao depositar valor da conta: ' + error.message);
        }
    }
}


const ContasServiceInstance = new ContasService();
Object.freeze(ContasServiceInstance);

module.exports = {"contasService": ContasServiceInstance};
