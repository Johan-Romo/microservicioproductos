// server.js
const express = require('express');
const oracledb = require('oracledb');  // Importamos oracledb para conectarnos a Oracle
const proveedorRoutes = require('./routes/ProveedorRoutes');
const productoRoutes = require('./routes/ProductoRoutes');
const marketingRoutes = require('./routes/MarketingRoutes');
const categoriaRoutes = require('./routes/CategoriaRoutes');
const dbConfig = require('./config/dbConfig');  // Importamos la configuración de la base de datos
const app = express();

app.use(express.json());  // Middleware para manejar JSON
app.use('/api', proveedorRoutes); 
app.use('/api', productoRoutes); 
app.use('/api', categoriaRoutes); 
app.use('/api', marketingRoutes); 

// Función para validar la conexión a la base de datos Oracle
async function validateOracleConnection() {
  try {
    // Intentamos establecer la conexión a la base de datos Oracle
    const connection = await oracledb.getConnection(dbConfig);
    
    // Si la conexión es exitosa
    console.log('Conexión a la base de datos Oracle establecida correctamente.');
    
    // Cerramos la conexión porque solo estamos validando en este momento
    await connection.close();
  } catch (err) {
    // Si ocurre un error, lo mostramos en la consola
    console.error('Error al conectar a la base de datos Oracle:', err.message);
    // En este punto, puedes decidir si prefieres detener el servidor o seguir adelante.
    process.exit(1);  // Terminamos la ejecución si hay error en la conexión
  }
}

// Validar la conexión antes de iniciar el servidor
validateOracleConnection().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  });
});
