const express = require('express');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');
const usersController = require('./controllers/usersController');
const usersRoutes = require('./src/routes/userRoutes'); 

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3007;
app.set('port', port);

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');

// Rutas
app.post('/api/users/create', usersController.register);
app.get('/', (req, res) => {
  res.send('Ruta raíz del Backend');
});

// Configuración de usuarios (assumiendo que usersRoutes es correcto)
usersRoutes(app);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.stack);
});

// Inicio del servidor
server.listen(port, '192.168.128.13' || 'localhost', () => {
  console.log('Aplicación de NodeJS ' + process.pid + ' iniciada en el puerto ' + port);
});
