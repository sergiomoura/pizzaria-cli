module.exports = (sequelize, DataTypes) => {

    const Pedidos = sequelize.define(
        'Pedidos', // nome da model
        
        {          // objeto descrevendo as colunas da tabela que está sendo representada
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            usuario_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            obs:{
                type: DataTypes.TEXT,
                allowNull: true
            },
            total:{
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            data:{
                type: DataTypes.DATE,
                allowNull: false
            },
            forma_pagamento_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },

        {          // objeto carregando algumas peculiaridades
            tableName: 'pedidos',
            timestamps: false
        }
    );

    return Pedidos;

}