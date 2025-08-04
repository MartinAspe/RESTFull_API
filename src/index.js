import express from 'express';
import usuarioRoutes from './routes/usuario.routes.js';
import libroRoutes from './routes/libro.routes.js';
import prestamoRoutes from './routes/prestamo.routes.js';
import reseniaRoutes from './routes/resenia.routes.js';

const app = express();
app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/libros', libroRoutes);
app.use('/prestamos', prestamoRoutes);
app.use('/resenias', reseniaRoutes);

app.listen(8080, () => {
  console.log('Servidor corriendo en puerto 8080');
});
