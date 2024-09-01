// routes/CategoriaRoutes.js
const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriaController');

router.get('/categorias', CategoriaController.getAllCategorias);
router.get('/categorias/:id', CategoriaController.getCategoriaById);
router.post('/categorias', CategoriaController.createCategoria);
router.put('/categorias/:id', CategoriaController.updateCategoria);
router.delete('/categorias/:id', CategoriaController.deleteCategoria);

module.exports = router;
