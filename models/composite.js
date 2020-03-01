module.exports = function (sequelize, DataTypes) {
    let Composite = sequelize.define("Composite", {
        state: {
            type: DataTypes.BOOLEAN
        }
    });

    Composite.associate = function (models) {
        Composite.hasMany(models.gameObject);
        Composite.belongsTo(models.Dialog);
    }

    return Composite;
};