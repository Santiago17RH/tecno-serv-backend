const express = require('express');
const ProveedorController = require('../../controller/ProveedorController');

const router = express.Router();

router.post('/create',ProveedorController.createNewProveedor);
router.get('/select',ProveedorController.getAllProveedores);
router.put('/update',ProveedorController.updateProveedor);

module.exports = router;
 