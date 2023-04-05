module.exports = (sequelize, DataTypes) => {
    
    const Ingredientes = sequelize.define(
        'Ingredientes', 
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            timestamps: false,
            tableName: "ingredientes"
        }
    )
    
    Ingredientes.associate = (models) =>{
        Ingredientes.belongsToMany(
            models.Pizzas,
            {
                as: "pizzas",
                through: "pizza_ingredientes", // tabela ATRAVES da qual a associação acontece
                foreignKey: "ingrediente_id", // nome da coluna que é o id do model atual
                otherKey: "pizza_id", // nome da coluna que é o id do model relacionado
                timestamps: false
            }
        )
    }

    return Ingredientes;

}