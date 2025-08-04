import { getAllResenias, getReseniaById } from '../model/resenia.model.js';

export const obtenerResenias = async (req, res) => {
  try {
    const resenias = await getAllResenias();
    res.json(resenias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las reseñas' });
  }
};

export const obtenerReseniaPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const resenia = await getReseniaById(id);
    res.json(resenia);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la reseña' });
  }
};
