const path = require('path')
const Carta = require('../utils/database').models.carta

exports.postAgregarCarta = (req, res)=>{
    console.log(req.body)
    const found = Carta.findOne({
        where : { 
            val : req.body.val,
            palo : req.body.palo
        }
    });
    if (found === null) {
        Carta.create(req.body)
        .then(result=>{
            console.log("Carta creada exitosamente")
            res.json({estado:"aceptado"})
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"error"})
        })   
    } else {
        console.log("La Carta ya existe")
        res.json({estado:"ya existe"})
    }
}


exports.getConsultarCartas = (req, res)=>{
    Carta.findAll()
        .then(carta=>{
            console.log(carta)
            res.json(carta)
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"error"})
        })
}

exports.postBorrarCarta = (req, res)=>{
    console.log(req.body)
    Carta.destroy({
        where:{
            id:req.body.id
        }
    })
    .then(()=>{
        console.log("Registro de carta eliminado")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}
exports.postActualizarCarta = (req, res)=>{
    console.log(req.body)
    
    Carta.update({
        val: req.body.val,
        palo: req.body.palo
    },{
        where:{
            id:req.body.id
        }
    })
    .then(()=>{
        console.log("Registro de carta actualizado")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}