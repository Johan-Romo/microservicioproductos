// controllers/ProveedorController.js
const Proveedor = require('../models/Proveedor');

exports.getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.getAllProveedores();
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener proveedores' });
  }
};

exports.getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.getProveedorById(req.params.id);
    if (!proveedor) {
      return res.status(404).json({ error: 'Proveedor no encontrado' });
    }
    res.status(200).json(proveedor);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el proveedor' });
  }
};

exports.createProveedor = async (req, res) => {
  try {
    const result = await Proveedor.createProveedor(req.body);
    res.status(201).json({ message: 'Proveedor creado', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear proveedor' });
  }
};

exports.updateProveedor = async (req, res) => {
  try {
    const result = await Proveedor.updateProveedor(req.params.id, req.body);
    res.status(200).json({ message: 'Proveedor actualizado', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar proveedor' });
  }
};

exports.deleteProveedor = async (req, res) => {
  try {
    const result = await Proveedor.deleteProveedor(req.params.id);
    res.status(200).json({ message: 'Proveedor eliminado', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar proveedor' });
  }
};
