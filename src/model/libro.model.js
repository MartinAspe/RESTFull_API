import pool from '../config/db.js';

export const getAllLibros = async () => {
  const [rows] = await pool.query('SELECT * FROM libro');
  return rows;
};

export const getLibroById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM libro WHERE id_libro = ?', [id]);
  return rows[0];
};
