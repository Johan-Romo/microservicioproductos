// controllers/ProductoController.js
const Producto = require('../models/Producto');

exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.getAllProductos();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.getProductoById(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

exports.createProducto = async (req, res) => {
  try {
    const result = await Producto.createProducto(req.body);
    res.status(201).json({ message: 'Producto creado', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

exports.updateProducto = async (req, res) => {
  try {
    const result = await Producto.updateProducto(req.params.id, req.body);
    res.status(200).json({ message: 'Producto actualizado', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
};

exports.deleteProducto = async (req, res) => {
  try {
    const result = await Producto.deleteProducto(req.params.id);
    res.status(200).json({ message: 'Producto eliminado', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};
