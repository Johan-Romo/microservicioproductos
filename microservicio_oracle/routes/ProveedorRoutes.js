// routes/ProveedorRoutes.js
const express = require('express');
const router = express.Router();
const ProveedorController = require('../controllers/ProveedorController');

router.get('/proveedores', ProveedorController.getAllProveedores);
router.get('/proveedores/:id', ProveedorController.getProveedorById);
router.post('/proveedores', ProveedorController.createProveedor);
router.put('/proveedores/:id', ProveedorController.updateProveedor);
router.delete('/proveedores/:id', ProveedorController.deleteProveedor);

module.exports = router;
