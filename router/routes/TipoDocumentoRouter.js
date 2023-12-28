const express = require('express');
const TipoDocumentoController = require('../../controller/TipoDocumentoController');

const router = express.Router();

router.post('/create',TipoDocumentoController.createNewTipoDocumento);
router.get('/select',TipoDocumentoController.getAllTipoDocumentos);
router.put('/update',TipoDocumentoController.updateTipoDocumento);

module.exports = router;
 