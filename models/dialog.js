module.exports = function(sequelize, DataTypes) {
    var dialog = sequelize.define("dialog", {
    npc : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        },
    part : {
        type: DataTypes.INT,
        allowNull: false,
        unique: true
    },
    dialect : {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
    });   
    return Post;
  };