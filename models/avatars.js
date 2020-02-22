module.exports = function (sequelize, Datatypes){
let avatars = sequelize.define("avatars",{
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
}