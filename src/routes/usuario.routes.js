const express = require('express');
const router = express.Router();
const { obtenerUsuarios } = require('../controller/usuario.controller');

router.get('/', obtenerUsuarios);

module.exports = router;
