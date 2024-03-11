const express = require('express');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');
const usersRoutes = require('./src/routes/userRoutes');
const usersController = require('../DesarrolloAPP/controllers/usersController'); // Asegúrate de importar el controlador adecuadamente

const port = process.env.PORT || 3000;

const app = express();

// Configuración de middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');

app.set('port', port);

// Importar y usar las rutas
app.use(usersRoutes);

// Configuración de escucha del servidor
const server = http.createServer(app);

server.listen(port, '192.168.226.71' || 'localhost', function() {
  console.log('Aplicación de NodeJS ' + process.pid + ' inicio en el puerto ' + port);
});

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Ruta raíz del Backend');
});

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});
