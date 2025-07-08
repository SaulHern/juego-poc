require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// El puerto que Render nos asignará. Es muy importante usar process.env.PORT
const PORT = process.env.PORT || 3001;

// Configuración de CORS para permitir peticiones desde tu frontend
// Asegúrate de haber configurado la variable de entorno FRONTEND_URL en Render
const corsOptions = {
  origin: process.env.FRONTEND_URL
};

app.use(cors(corsOptions));
app.use(express.json());

// Una ruta de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send('¡La API del juego está funcionando correctamente!');
});

// Esta es la línea que inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
