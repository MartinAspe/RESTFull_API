import pool from '../config/db.js';

export const getAllResenias = async () => {
  const [rows] = await pool.query('SELECT * FROM resenia');
  return rows;
};

export const getReseniaById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM resenia WHERE id_resenia = ?', [id]);
  return rows[0];
};
