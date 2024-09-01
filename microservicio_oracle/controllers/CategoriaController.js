// controllers/CategoriaController.js
const Categoria = require('../models/Categoria');

exports.getAllCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.getAllCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
};

exports.getCategoriaById = async (req, res) => {
  try {
    const categoria = await Categoria.getCategoriaById(req.params.id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
};

exports.createCategoria = async (req, res) => {
  try {
    const result = await Categoria.createCategoria(req.body);
    res.status(201).json({ message: 'Categoría creada', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear categoría' });
  }
};

exports.updateCategoria = async (req, res) => {
  try {
    const result = await Categoria.updateCategoria(req.params.id, req.body);
    res.status(200).json({ message: 'Categoría actualizada', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar categoría' });
  }
};

exports.deleteCategoria = async (req, res) => {
  try {
    const result = await Categoria.deleteCategoria(req.params.id);
    res.status(200).json({ message: 'Categoría eliminada', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar categoría' });
  }
};
