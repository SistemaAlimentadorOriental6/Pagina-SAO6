import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToOptimize = [
    // src/assets/images
    {
        input: 'src/assets/images/FotosOperadores.jpeg.jpg',
        output: 'src/assets/images/FotosOperadores.webp',
        width: 1200
    },
    {
        input: 'src/assets/images/FotosOperadores2.jpg',
        output: 'src/assets/images/FotosOperadores2.webp',
        width: 1200
    },
    {
        input: 'src/assets/images/FotosOperadores3.jpg',
        output: 'src/assets/images/FotosOperadores3.webp',
        width: 1200
    },
    {
        input: 'src/assets/images/Trabajadores.jpg',
        output: 'src/assets/images/Trabajadores.webp',
        width: 1200
    },
    {
        input: 'src/assets/images/Trabajadores2.jpg',
        output: 'src/assets/images/Trabajadores2.webp',
        width: 1200
    },
    // Imágenes de NosotrosView
    {
        input: 'src/assets/images/runnersao6.JPG',
        output: 'src/assets/images/runnersao6.webp',
        width: 1920
    },
    {
        input: 'src/assets/images/pasajeros-sao6.jpg',
        output: 'src/assets/images/pasajeros-sao6.webp',
        width: 1200
    },
    {
        input: 'src/assets/images/runner-sao6.jpg',
        output: 'src/assets/images/runner-sao6.webp',
        width: 1200
    },
    {
        input: 'src/assets/images/buselectricosao6.jpg',
        output: 'src/assets/images/buselectricosao6.webp',
        width: 1200
    },
    // public/images
    {
        input: 'public/images/imagenSAO6.jpg',
        output: 'public/images/imagenSAO6.webp',
        width: 1200
    },
    {
        input: 'public/images/imagenSAO65.jpg',
        output: 'public/images/imagenSAO65.webp',
        width: 1200
    },
    {
        input: 'public/images/imagenSAO67.JPG',
        output: 'public/images/imagenSAO67.webp',
        width: 1200
    },
    {
        input: 'public/images/imagenSAO69.JPG',
        output: 'public/images/imagenSAO69.webp',
        width: 1200
    }
];

async function optimizeImages() {
    console.log('Iniciando optimización de imágenes...');

    for (const img of imagesToOptimize) {
        const inputPath = path.join(__dirname, img.input);
        const outputPath = path.join(__dirname, img.output);

        try {
            if (!fs.existsSync(inputPath)) {
                console.warn(`⚠️ Archivo no encontrado: ${img.input}`);
                continue;
            }

            await sharp(inputPath)
                .resize(img.width, null, { // Maintain aspect ratio
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .webp({ quality: 80 })
                .toFile(outputPath);

            console.log(`✅ Optimizado: ${img.output}`);
        } catch (error) {
            console.error(`❌ Error optimizando ${img.input}:`, error);
        }
    }

    console.log('Optimización completada.');
}

optimizeImages();
