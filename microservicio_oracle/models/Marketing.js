const oracledb = require('oracledb');
const dbConfig = require('../config/dbConfig');

// Obtener todos los registros de Marketing
async function getAllMarketing() {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(`SELECT idMarketing, tipoMarketing, gastoMarketing, TO_CHAR(fechaPago, 'YYYY-MM-DD') AS fechaPago, descripcionMarketing FROM Marketing`);
    return result.rows;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

// Obtener un registro de Marketing por ID
async function getMarketingById(idMarketing) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `SELECT idMarketing, tipoMarketing, gastoMarketing, TO_CHAR(fechaPago, 'YYYY-MM-DD') AS fechaPago, descripcionMarketing 
       FROM Marketing WHERE idMarketing = :id`, 
      [idMarketing]
    );
    return result.rows[0];
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

// Crear un nuevo registro de Marketing
async function createMarketing(marketingData) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `INSERT INTO Marketing (tipoMarketing, gastoMarketing, fechaPago, descripcionMarketing) 
       VALUES (:tipoMarketing, :gastoMarketing, TO_DATE(:fechaPago, 'YYYY-MM-DD'), :descripcionMarketing)`,
      {
        tipoMarketing: marketingData.tipoMarketing, 
        gastoMarketing: marketingData.gastoMarketing, 
        fechaPago: marketingData.fechaPago, 
        descripcionMarketing: marketingData.descripcionMarketing
      }
    );
    await connection.commit();
    return result;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

// Actualizar un registro de Marketing
async function updateMarketing(idMarketing, marketingData) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `UPDATE Marketing 
       SET tipoMarketing = :tipoMarketing, gastoMarketing = :gastoMarketing, 
           fechaPago = TO_DATE(:fechaPago, 'YYYY-MM-DD'), descripcionMarketing = :descripcionMarketing 
       WHERE idMarketing = :idMarketing`,
      {
        tipoMarketing: marketingData.tipoMarketing, 
        gastoMarketing: marketingData.gastoMarketing, 
        fechaPago: marketingData.fechaPago, 
        descripcionMarketing: marketingData.descripcionMarketing,
        idMarketing: idMarketing
      }
    );
    await connection.commit();
    return result;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

// Eliminar un registro de Marketing
async function deleteMarketing(idMarketing) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `DELETE FROM Marketing WHERE idMarketing = :idMarketing`, 
      [idMarketing]
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
  getAllMarketing,
  getMarketingById,
  createMarketing,
  updateMarketing,
  deleteMarketing
};
