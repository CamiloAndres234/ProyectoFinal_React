const mysql = require('mysql2');

// Conexión con MySQL (desde XAMPP)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // usuario por defecto de XAMPP
  password: '',      // si pusiste contraseña en XAMPP, escríbela aquí
  database: 'usuarios_app'
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error conectando a la base de datos:', err);
    return;
  }
  console.log('✅ Conectado a MySQL');
});

module.exports = connection;
