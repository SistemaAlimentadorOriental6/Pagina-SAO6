const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos del build
app.use(express.static(path.join(__dirname, 'dist')));

// Redirigir todas las rutas a index.html (necesario para SPAs con Vue Router)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`✅ Aplicación SAO6 corriendo en puerto ${port}`);
});
