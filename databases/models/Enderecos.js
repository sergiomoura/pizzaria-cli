module.exports = (sequelize, DataTypes) => {

    return sequelize.define(
        'Enderecos',
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            usuario_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            endereco:{
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tableName: "enderecos",
            timestamps: false
        }
    )

}