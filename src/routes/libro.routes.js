import express from 'express';
import { obtenerLibros, obtenerLibroPorId } from '../controller/libro.controller.js';

const router = express.Router();

router.get('/', obtenerLibros);
router.get('/:id', obtenerLibroPorId);

export default router;
