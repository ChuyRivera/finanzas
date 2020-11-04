const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    fecha : {type: Date, required: true},
    descripcion: {type: String, required: true},
    cantidad: {type: Number, required: true},
    tipo: {type: Number, required:true}
});

module.exports = mongoose.model('Transaction',transactionSchema);
//module.exports = mongoose.model('User',userSchema);
//{fecha: new Date("2014, 10, 21")}