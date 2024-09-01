// routes/ProductoRoutes.js
const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/ProductoController');

router.get('/productos', ProductoController.getAllProductos);
router.get('/productos/:id', ProductoController.getProductoById);
router.post('/productos', ProductoController.createProducto);
router.put('/productos/:id', ProductoController.updateProducto);
router.delete('/productos/:id', ProductoController.deleteProducto);

module.exports = router;
