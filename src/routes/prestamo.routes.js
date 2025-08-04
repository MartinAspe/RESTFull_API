import express from 'express';
import { obtenerPrestamos, obtenerPrestamoPorId } from '../controller/prestamo.controller.js';

const router = express.Router();

router.get('/', obtenerPrestamos);
router.get('/:id', obtenerPrestamoPorId);

export default router;
