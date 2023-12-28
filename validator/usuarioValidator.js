const { check } = require('express-validator')
const { validationResultFn } = require('./validateHelper')

const validateUsuario = [
    check('docIdentidadUsuario')
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 20 })
    .withMessage('El minimo de dijitos en el documento de identidad es 5 y el maximo 20'),

    check('nombreUsuario')
    .exists()
    .not()
    .notEmpty()
    .withMessage('Ingrese el nombre'),

    check('correo')
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage('Ingrese bien el correo'),

    check('rolUsuario')
    .exists()
    .notEmpty()
    .withMessage('Elija el rol'),

    check('areaUsuario')
    .exists()
    .notEmpty()
    .withMessage('Elija el área'),

    check('ubicacionUsuario')
    .exists()
    .notEmpty()
    .withMessage('Elija la ubicacion'),

    check('contraseña')
    .exists()
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage('La contraseña debe ser mayor a 8 dígitos'),
    
    (req, res, next) => { 
        validationResultFn(req, res, next)
    }
]

module.exports = { validateUsuario }    