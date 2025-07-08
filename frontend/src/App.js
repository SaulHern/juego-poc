import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Usaremos axios para llamar a la API

function App() {
  // Un estado para guardar el mensaje que recibamos del backend
  const [message, setMessage] = useState('Cargando...');

  // useEffect se ejecuta cuando el componente se carga por primera vez
  useEffect(() => {
    // La URL de tu API, tomada de las variables de entorno
    const apiUrl = process.env.REACT_APP_API_URL;

    // Hacemos la petición GET a la raíz de nuestra API
    axios.get(apiUrl)
      .then(response => {
        // Si todo sale bien, guardamos el mensaje del servidor
        setMessage(response.data);
      })
      .catch(error => {
        // Si hay un error, lo mostramos
        console.error("Hubo un error al conectar con la API:", error);
        setMessage('Error al conectar con el servidor.');
      });
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Prueba de Conexión Frontend-Backend</h1>
      <p>Respuesta del servidor:</p>
      <h2 style={{ color: '#007bff' }}>{message}</h2>
    </div>
  );
}

export default App;
