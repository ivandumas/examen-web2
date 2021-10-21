const Sequelize = require("sequelize")

const Carta = (sequelize)=>{
    sequelize.define('carta',{
        id:{
            type:Sequelize.INTEGER, // numero id del 1 al 52
            allowNull: false,
            primaryKey: true
        },
        val:{
            type: Sequelize.STRING(2), // valor (1-10 y J Q K)
            allowNull:false
        },
        palo:{
            type:Sequelize.STRING(30), 
            allowNull:false
        },
        color:{
            type:Sequelize.STRING(7), //pal aleman
            allowNull:true
        }
    })
}

module.exports = Carta