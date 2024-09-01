// models/Categoria.js
const oracledb = require('oracledb');
const dbConfig = require('../config/dbConfig');

async function getAllCategorias() {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(`SELECT * FROM Categoria`);
    return result.rows;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

async function getCategoriaById(idCategoria) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `SELECT * FROM Categoria WHERE idCategoria = :id`, 
      [idCategoria]
    );
    return result.rows[0];
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

async function createCategoria(categoriaData) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `INSERT INTO Categoria (nombreCategoria) 
       VALUES (:nombreCategoria)`,
      [
        categoriaData.nombreCategoria
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

async function updateCategoria(idCategoria, categoriaData) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `UPDATE Categoria 
       SET nombreCategoria = :nombreCategoria 
       WHERE idCategoria = :idCategoria`,
      [
        categoriaData.nombreCategoria,
        idCategoria
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

async function deleteCategoria(idCategoria) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `DELETE FROM Categoria WHERE idCategoria = :idCategoria`, 
      [idCategoria]
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
  getAllCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria
};
