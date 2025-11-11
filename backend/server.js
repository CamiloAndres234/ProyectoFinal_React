const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios');
const loginRoutes = require('./routes/login'); // 👈 importamos el login

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// 👇 Registramos las rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/login', loginRoutes); // 👈 ruta para login

// Ruta de prueba principal
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente ✅' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
