module.exports = function (sequelize, DataTypes) {
    let gameObject = sequelize.define("gameObject", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    gameObject.associate = function (models) {
        gameObject.hasMany(models.Inventory);
    }
    return gameObject;
};