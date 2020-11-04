const express = require('express');
const router = express.Router();
const egresosController = require('../controllers/egresosController');


router.get('/egresos',egresosController.list);

module.exports = router;