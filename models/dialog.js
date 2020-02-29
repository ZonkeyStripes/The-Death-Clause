module.exports = function(sequelize, DataTypes) {
    let Dialog = sequelize.define("Dialog", {
    text : {
        type: DataTypes.STRING,
        allowNull: false
        }
    }); 

    Dialog.associate = function(models){
        Dialog.hasMany(models.Composite);
    }

    return Dialog;
  };