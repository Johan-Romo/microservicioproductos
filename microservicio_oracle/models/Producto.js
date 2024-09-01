// models/Producto.js
const oracledb = require('oracledb');
const dbConfig = require('../config/dbConfig');

async function getAllProductos() {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(`SELECT * FROM Producto`);
    return result.rows;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

async function getProductoById(idProducto) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `SELECT * FROM Producto WHERE idProducto = :id`, 
      [idProducto]
    );
    return result.rows[0];
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

async function createProducto(productoData) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `INSERT INTO Producto (idProveedor, idCategoria, idMarketing, nombreProducto, precioUnitario, stock, descripcionProducto, peso) 
       VALUES (:idProveedor, :idCategoria, :idMarketing, :nombreProducto, :precioUnitario, :stock, :descripcionProducto, :peso)`,
      [
        productoData.idProveedor, 
        productoData.idCategoria, 
        productoData.idMarketing,
        productoData.nombreProducto,
        productoData.precioUnitario,
        productoData.stock,
        productoData.descripcionProducto,
        productoData.peso
      ]
    );
    await connection.commit();
    return result;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

async function updateProducto(idProducto, productoData) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `UPDATE Producto 
       SET idProveedor = :idProveedor, idCategoria = :idCategoria, idMarketing = :idMarketing, nombreProducto = :nombreProducto, 
           precioUnitario = :precioUnitario, stock = :stock, descripcionProducto = :descripcionProducto, peso = :peso
       WHERE idProducto = :idProducto`,
      [
        productoData.idProveedor, 
        productoData.idCategoria, 
        productoData.idMarketing,
        productoData.nombreProducto,
        productoData.precioUnitario,
        productoData.stock,
        productoData.descripcionProducto,
        productoData.peso,
        idProducto
      ]
    );
    await connection.commit();
    return result;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

async function deleteProducto(idProducto) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `DELETE FROM Producto WHERE idProducto = :idProducto`, 
      [idProducto]
    );
    await connection.commit();
    return result;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

module.exports = {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};
