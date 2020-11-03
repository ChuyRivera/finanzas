const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const app = express();
const port = 3000;

const db = require('./db');

//Config express
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine','ejs');
app.set('view', path.join(__dirname,'views'));

//Rutas cambio

//Archivos Estaticos
app.use(express.static(path.join(__dirname,'public')));

app.listen(port, ()=> console.log(`El servidor ha iniciado en el puerto ${port}`))