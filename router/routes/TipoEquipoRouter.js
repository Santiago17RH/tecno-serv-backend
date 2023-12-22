const express = require('express');
const TipoEquipoController = require('../../controller/TipoEquipoController');

const router = express.Router();

router.post('/create',TipoEquipoController.createNewTipoEquipo);
router.get('/select',TipoEquipoController.getAllTipoEquipos);
router.put('/update',TipoEquipoController.updateTipoEquipo);

module.exports = router;
 