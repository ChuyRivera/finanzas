const mongoose = require('mongoose');
const db = require('../db');

var Transaction = require('../models/transaction.model')

const controller = {};

//ingresos métodos
controller.list = (req,res)=>{

    Transaction.find((err,transactions)=>{
        if(err) console.log('Error: '+err);

        console.log(transactions);
    })

    res.render('ingresos');
}

//Guardar una transacción como ingreso
controller.save = (req, res)=>{
    var newTransaction = Transaction({
        fecha: new Date(),
        descripcion: 'pago de nomina',
        cantidad: req.body.cantidad,
        tipo: 1
    });

    newTransaction.save((err,transactionsaved)=>{
        if(err) console.log(err);
        console.log('Guardado con exito!... ',transactionsaved)
        res.redirect('/ingresos');
    })
}


module.exports = controller;