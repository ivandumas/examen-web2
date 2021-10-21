const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const cartaController = require('../controllers/cartas')

//Servicio para procesar los datos del formulario  CREATE
router.post('/agregarCarta',cartaController.postAgregarCarta)
//Consulta de cartas READ
router.get('/consultarCartas',cartaController.getConsultarCartas)
//Eliminar carta DELETE
router.post('/borrarCarta',cartaController.postBorrarCarta)
//Actualizar carta UPDATE
router.post('/actualizarCarta',cartaController.postActualizarCarta)

module.exports = router