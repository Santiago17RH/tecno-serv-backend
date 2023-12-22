const express = require('express');
const UsuarioController = require('../../controller/UsuarioController');
const ValidacionToken = require('../../middleware/ValidacionToken');
const { validateCreate } = require('../../validator/usuarioValidator')

const router = express.Router();

router.post('/create' , /* validateCreate, */ UsuarioController.createNewUser);
router.get('/select', ValidacionToken, UsuarioController.getAllUsers);
router.post('/validacion-login',UsuarioController.loginUsuario);
router.put('/update', ValidacionToken, UsuarioController.updateUsuario);
module.exports = router;
 