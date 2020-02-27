module.exports = function(sequelize, DataTypes) {
    let dialog = sequelize.define("dialog", {
    npc : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        },
    part : {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    dialect : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
    });   
    return dialog;
  };