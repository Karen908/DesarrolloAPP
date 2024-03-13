const express = require('express');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');
const usersController = require('./controllers/usersController');
const usersRoutes = require('./src/routes/userRoutes'); 
const passport = require('passport');
const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3007;
app.set('port', port);

// Middleware
app.use(logger('dev')); // log requests to the console DEBUG
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ 
extended: true
})); // support encoded bodies
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.disable('x-powered-by'); // disable the X-Powered-By header in responses

app.set('port', port);


// Rutas
app.post('/api/users/create', usersController.register);

app.get('/', (req, res) => {
  res.send('Ruta raíz del Backend');

app.get('/test', (req, res) => {
  res.send('Estas en la ruta TEST');
    });
});

// Configuración de usuarios (assumiendo que usersRoutes es correcto)
usersRoutes(app);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.stack);
});

// Inicio del servidor
server.listen(port, '0.0.0.0' || 'localhost', () => {
  console.log('Aplicación de NodeJS ' + process.pid + ' ejecutando en  ' + 
  server.address().address + ':' + server.address().port);

});
