const express = require('express');

const EquipoController = require('../../controller/EquipoController');

const router = express.Router();

router.post('/create',EquipoController.createNewEquipo);
router.get('/select',EquipoController.getAllEquipos);
router.put('/update',EquipoController.updateEquipo);

module.exports = router;
 