// let User = require("./user");
module.exports = function(sequelize, DataTypes) {
    let Inventory = sequelize.define("Inventory", {
       state: {
        type: DataTypes.BOOLEAN
      }
    });

    Inventory.assiciate = function(models){
      Inventory.belongsTo(models.User);

      Inventory.hasMany(models.gameObject, {
        foreignKey: "gob_id"
      });
    }
    
    return Inventory;
  };
  