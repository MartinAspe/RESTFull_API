import { getAllLibros, getLibroById } from '../model/libro.model.js';

export const obtenerLibros = async (req, res) => {
  try {
    const libros = await getAllLibros();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los libros' });
  }
};

export const obtenerLibroPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const libro = await getLibroById(id);
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el libro' });
  }
};
