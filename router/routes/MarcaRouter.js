const express = require('express');
const MarcaController = require('../../controller/MarcaController');

const router = express.Router();

router.post('/create',MarcaController.createNewMarca);
router.get('/select',MarcaController.getAllMarcas);
router.put('/update',MarcaController.updateMarca);

module.exports = router;
 