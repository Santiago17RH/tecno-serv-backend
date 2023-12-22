const express = require('express');
const EstadoController = require('../../controller/EstadoController');

const router = express.Router();

router.post('/create',EstadoController.createNewEstado);
router.get('/select',EstadoController.getAllEstados);
router.put('/update',EstadoController.updateEstado);

module.exports = router;
 