const express = require('express');
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require("./src/controllers/contatoController")

//rotas home
route.get('/', homeController.paginaInicial);
route.post('/enviado', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;