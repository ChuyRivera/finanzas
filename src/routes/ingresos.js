const express = require('express');
const router = express.Router();
const ingresosController = require('../controllers/ingresosController');


router.get('/ingresos',ingresosController.list);
router.post('/addIngreso',ingresosController.save);

module.exports = router;