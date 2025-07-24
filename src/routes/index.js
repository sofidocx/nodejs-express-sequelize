//para gerenciar todas as rotas 
//ponto de entrada de todas as rotas 

const express = require('express');
const pessoas = require('./pessoasRoutes.js'); 
const categorias = require('./categoriaRoutes.js'); 
const cursos = require('./cursoRoutes.js'); 


module.exports = app => {
    //middlewares
    app.use(
        express.json(), 
        pessoas,
        categorias, 
        cursos
    );
};