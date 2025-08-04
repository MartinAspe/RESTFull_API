import pool from '../config/db.js';

export const getAllPrestamos = async () => {
  const [rows] = await pool.query('SELECT * FROM prestamo');
  return rows;
};

export const getPrestamoById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM prestamo WHERE id_prestamo = ?', [id]);
  return rows[0];
};
