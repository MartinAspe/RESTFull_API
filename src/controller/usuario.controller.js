const usuarioModel = require('../model/usuario.model');

const obtenerUsuarios = (req, res) => {
  usuarioModel.getUsuarios((err, usuarios) => {
    if (err) {
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      res.json(usuarios);
    }
  });
};

module.exports = { obtenerUsuarios };
