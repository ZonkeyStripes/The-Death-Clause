module.exports = function(sequelize, DataTypes) {
    var gameObject = sequelize.define("gameObject", {
    name : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        },
    description : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
    });   
    return Post;
  };