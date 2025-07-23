//para gerenciar todas as rotas 
//ponto de entrada de todas as rotas 

const express = require('express');
const pessoas = require('./pessoasRoutes.js'); 

module.exports = app => {
    //middlewares
    app.use(
        express.json(), 
        pessoas,
    );
};