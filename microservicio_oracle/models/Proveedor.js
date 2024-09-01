// models/Proveedor.js
const oracledb = require('oracledb');
const dbConfig = require('../config/dbConfig');

async function getAllProveedores() {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(`SELECT * FROM Proveedor`);
    return result.rows;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

async function getProveedorById(idProveedor) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `SELECT * FROM Proveedor WHERE idProveedor = :id`, 
      [idProveedor]
    );
    return result.rows[0];
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

async function createProveedor(proveedorData) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `INSERT INTO Proveedor (nombreProveedor, emailProveedor, telefonoProveedor, ciudadProveedor) 
       VALUES (:nombreProveedor, :emailProveedor, :telefonoProveedor, :ciudadProveedor)`,
      [
        proveedorData.nombreProveedor, 
        proveedorData.emailProveedor, 
        proveedorData.telefonoProveedor, 
        proveedorData.ciudadProveedor
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

async function updateProveedor(idProveedor, proveedorData) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `UPDATE Proveedor 
       SET nombreProveedor = :nombreProveedor, emailProveedor = :emailProveedor, 
           telefonoProveedor = :telefonoProveedor, ciudadProveedor = :ciudadProveedor 
       WHERE idProveedor = :idProveedor`,
      [
        proveedorData.nombreProveedor, 
        proveedorData.emailProveedor, 
        proveedorData.telefonoProveedor, 
        proveedorData.ciudadProveedor,
        idProveedor
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

async function deleteProveedor(idProveedor) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `DELETE FROM Proveedor WHERE idProveedor = :idProveedor`, 
      [idProveedor]
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
  getAllProveedores,
  getProveedorById,
  createProveedor,
  updateProveedor,
  deleteProveedor
};
