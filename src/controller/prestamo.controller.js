import { getAllPrestamos, getPrestamoById } from '../model/prestamo.model.js';

export const obtenerPrestamos = async (req, res) => {
  try {
    const prestamos = await getAllPrestamos();
    res.json(prestamos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los préstamos' });
  }
};

export const obtenerPrestamoPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const prestamo = await getPrestamoById(id);
    res.json(prestamo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el préstamo' });
  }
};
