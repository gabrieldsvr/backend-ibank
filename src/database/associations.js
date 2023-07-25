// associations.js
// Relacionamentos da tabela de transações
// Uma transação pertence a uma categoria
import Transacoes from "../models/transacoesModels";
import Categorias from "../models/categoriasModels";
import Contas from "../models/contasModels";
import Usuarios from "../models/usuariosModels";



Contas.hasMany(Transacoes, { foreignKey: 'conta' });
Transacoes.belongsTo(Contas, { foreignKey: 'conta', as: 'contaAssociation'  });


Categorias.hasMany(Transacoes, { foreignKey: 'categoria' });
Transacoes.belongsTo(Categorias, { foreignKey: 'categoria', as: 'categoriaAssociation'  });


Usuarios.hasMany(Contas, { foreignKey: 'usuarios' });
Contas.belongsTo(Usuarios, { foreignKey: 'usuarios', as: 'usuariosAssociation'  });