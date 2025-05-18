const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
  console.log(`Para ver el sitio, abre un navegador y visita: http://localhost:${port}`);
  console.log('Para detener el servidor, presiona Ctrl+C');
});
