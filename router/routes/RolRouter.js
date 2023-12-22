const express = require('express');
const RolController = require('../../controller/RolController');

const router = express.Router();

router.post('/create',RolController.createNewRol);
router.get('/select',RolController.getAllRoles);
router.put('/update',RolController.updateRol);

module.exports = router;
 