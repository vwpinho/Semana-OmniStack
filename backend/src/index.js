const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://vwpinho:159753@cluster0-o7uxc.mongodb.net/week10?retryWrites=true&w=majority', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

app.use(express.json());

// Métodos HTTP: get, post, put, delete


// Tipos de parametros:
// Query Params: request.query(Filtros, ordenação, paginacao, ...)
// Route Params: request.params (Indetificar recurso na alteracao ou remocao)
// Body: request.body (Dados para criacao ou alteracao de um registro)


// MongoDB (Nao-relacional)

app.use(routes);

app.listen(3333);

