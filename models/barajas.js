const Sequelize = require("sequelize")
const Baraja = (sequelize)=>{
    sequelize.define('baraja',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombreDueno:Sequelize.STRING() //nombre
    })
}

module.exports = Baraja