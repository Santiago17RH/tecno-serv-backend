const express = require('express');
const UbicacionController = require('../../controller/UbicacionController');
const ValidacionToken = require('../../middleware/ValidacionToken');

const router = express.Router();

router.post('/create',UbicacionController.createNewUbicacion);
router.get('/select', UbicacionController.getAllUbicaciones);
router.put('/update',UbicacionController.updateUbicacion);

module.exports = router;
 