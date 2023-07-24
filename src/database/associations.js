// associations.js
// Relacionamentos da tabela de transações
// Uma transação pertence a uma categoria
import Transacoes from "../models/transacoesModels";
import Categorias from "../models/categoriasModels";
import Contas from "../models/contasModels";



Transacoes.belongsTo(Categorias, { foreignKey: 'categoriaId', allowNull: false });
Transacoes.belongsTo(Contas, { foreignKey: 'contaId', allowNull: false });



// Definindo a relação hasMany entre MusicsModel e AudiosModel
Contas.hasMany(Transacoes, { foreignKey: 'conta' });
Transacoes.belongsTo(Contas, { foreignKey: 'conta', as: 'contaAssociation'  });

// Definindo a relação hasMany entre MusicsModel e AudiosModel
Categorias.hasMany(Transacoes, { foreignKey: 'categoria' });
Transacoes.belongsTo(Categorias, { foreignKey: 'categoria', as: 'categoriaAssociation'  });