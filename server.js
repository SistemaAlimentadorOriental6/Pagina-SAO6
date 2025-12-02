import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Necesario para obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
