const express = require('express');
const router = express.Router();
const db = require('../config/database');

// 📘 Obtener todos los usuarios
router.get('/', (req, res) => {
  const query = 'SELECT * FROM usuarios ORDER BY id DESC';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// 📗 Crear un nuevo usuario
router.post('/', (req, res) => {
  const { nombre, email, telefono } = req.body;
  const query = 'INSERT INTO usuarios (nombre, email, telefono) VALUES (?, ?, ?)';
  db.query(query, [nombre, email, telefono], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: '✅ Usuario creado', id: result.insertId });
  });
});

// 📙 Actualizar usuario por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, email, telefono } = req.body;
  const query = 'UPDATE usuarios SET nombre = ?, email = ?, telefono = ? WHERE id = ?';
  db.query(query, [nombre, email, telefono, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: '✏️ Usuario actualizado correctamente' });
  });
});

// 📕 Eliminar usuario por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM usuarios WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: '🗑️ Usuario eliminado correctamente' });
  });
});

module.exports = router;
