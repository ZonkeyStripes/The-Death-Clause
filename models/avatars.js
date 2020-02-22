module.exports = function (sequelize, Datatypes){
let Avatar = sequelize.define("Avatar",{
    name: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    motivation: {
        type: Datatypes.TEXT,
        allowNull: false,
    },
    image: {
        type: Datatypes.STRING,
        allowNull: false,
    }
})
return Avatar;
}