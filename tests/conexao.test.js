// 1 - Importando o sequelize
const sequelize = require('sequelize');

// 2 - Importar configurações
const config = require('../databases/config').development;

// 3 - Criar a conexão com o banco de dados
const conexao = new sequelize(config);

// 4 executar uma consulta: RAW QUERY
const sql = `SELECT
                p.id,
                p.nome,
                ifnull(SUM(pp.quantidade), 0) as quantidade
            FROM
                pizzas as p
                LEFT JOIN pedido_pizza as pp ON p.id = pp.pizza_id
            group by p.id, p.nome;`;

const promessa = conexao.query(sql, {type: sequelize.QueryTypes.SELECT});

promessa
.then(
    dados => {console.log(dados);}
).then(
    ()=>{conexao.close();}
)

