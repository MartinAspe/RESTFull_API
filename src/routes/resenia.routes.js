import express from 'express';
import { obtenerResenias, obtenerReseniaPorId } from '../controller/resenia.controller.js';

const router = express.Router();

router.get('/', obtenerResenias);
router.get('/:id', obtenerReseniaPorId);

export default router;
