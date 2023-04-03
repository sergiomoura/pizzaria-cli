module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Usuarios',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncremente: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tableName: 'usuarios',
            timestamps: false
        }
    )
}