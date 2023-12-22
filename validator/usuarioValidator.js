const { check } = require('express-validator')
const { validationResultFn } = require('./validateHelper')

const validateCreate = [
    check('nombreUsuario')
    .exists()
    .not()
    .isEmpty(),
    (req, res, next) => {
        validationResultFn(req, res, next)
    }
]

module.exports = { validateCreate }