const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const app = express();
const port = 3000;

const db = require('./db');
const homeRoutes = require('./routes/home')
const ingresosRoutes = require('./routes/ingresos');
const egresosRoutes = require('./routes/egresos');

//Config express
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

//Rutas
app.use('/',homeRoutes);

app.get('/ingresos', ingresosRoutes);
app.post('/addIngreso',ingresosRoutes);

app.get('/egresos', egresosRoutes);


//Archivos Estaticos
app.use(express.static(path.join(__dirname,'public')));

app.listen(port, ()=> console.log(`El servidor ha iniciado en el puerto ${port}`))