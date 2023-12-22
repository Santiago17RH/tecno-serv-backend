const express = require('express');
const AreaController = require('../../controller/AreaController');

const router = express.Router();

router.post('/create',AreaController.createNewArea);
router.get('/select',AreaController.getAllAreas);
router.put('/update',AreaController.updateArea);

module.exports = router;
 