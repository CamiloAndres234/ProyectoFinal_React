// Importamos dependencias
const express = require('express');
const router = express.Router();
const db = require('../config/database');

// 📘 Ruta para iniciar sesión
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Consulta para buscar el usuario en la base de datos
  const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('❌ Error en la consulta:', err);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }

    if (results.length > 0) {
      // ✅ Usuario encontrado y contraseña coincide
      res.json({ success: true, message: 'Login exitoso', user: results[0] });
    } else {
      // ❌ Usuario no encontrado o contraseña incorrecta
      res.json({ success: false, message: 'Credenciales incorrectas' });
    }
  });
});

module.exports = router;
