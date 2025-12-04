<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import imgFotosOperadores from '../assets/images/FotosOperadores.webp'
import imgFotosOperadores2 from '../assets/images/FotosOperadores2.webp'
import imgFotosOperadores3 from '../assets/images/FotosOperadores3.webp'
import imgTrabajadores2 from '../assets/images/Trabajadores2.webp'

interface ImagenCarousel {
  src: string
  position: string
}

const form = ref({
  nombre: '',
  email: '',
  area: '',
  cv: null as File | null,
  mensaje: '',
  aceptaPolitica: false
})

const errorArchivo = ref('')
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB en bytes

const imagenes: ImagenCarousel[] = [
  { src: imgFotosOperadores, position: 'center top' },
  { src: imgFotosOperadores2, position: 'center top' },
  { src: imgFotosOperadores3, position: 'center top' },
  { src: imgTrabajadores2, position: 'center top' },
  { src: '/images/imagenSAO62.webp', position: 'center top' },
  { src: '/images/imagenSAO65.webp', position: 'center top' },
  { src: '/images/imagenSAO67.webp', position: 'center top' },
  { src: '/images/imagenSAO69.webp', position: 'center top' }
]

const imagenActual = ref(0)
const imagenesPreCargadas = ref<Set<number>>(new Set([0])) // Precargar primera imagen
let intervalo: number | null = null

const siguienteImagen = () => {
  const nuevaImagen = (imagenActual.value + 1) % imagenes.length
  imagenesPreCargadas.value.add(nuevaImagen)
  imagenActual.value = nuevaImagen
}

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  errorArchivo.value = ''
  
  if (target.files && target.files[0]) {
    const file = target.files[0]
    
    // Validar tamaño del archivo (máximo 5MB)
    if (file.size > MAX_FILE_SIZE) {
      errorArchivo.value = 'El archivo debe ser menor a 5MB'
      form.value.cv = null
      target.value = ''
      return
    }
    
    // Validar tipo de archivo
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowedTypes.includes(file.type)) {
      errorArchivo.value = 'Solo se permiten archivos PDF, DOC o DOCX'
      form.value.cv = null
      target.value = ''
      return
    }
    
    form.value.cv = file
  }
}

const isFormValid = computed(() => {
  return (
    form.value.nombre.trim() !== '' &&
    form.value.email.trim() !== '' &&
    form.value.area.trim() !== '' &&
    form.value.cv !== null &&
    form.value.aceptaPolitica &&
    errorArchivo.value === ''
  )
})

// Precargar imágenes de manera progresiva
const precargarImagenes = () => {
  imagenes.forEach((imagen, index) => {
    // Precargar las primeras 3 imágenes inmediatamente
    if (index < 3) {
      const img = new Image()
      img.src = imagen.src
      imagenesPreCargadas.value.add(index)
    }
  })
}

onMounted(() => {
  precargarImagenes()
  // Iniciar carousel automático
  intervalo = window.setInterval(siguienteImagen, 4000)
})

onBeforeUnmount(() => {
  if (intervalo) {
    clearInterval(intervalo)
  }
})
</script>

<template>
  <section class="seccion-trabaja" id="trabajo">
    <div class="contenedor-principal">
      
      <!-- Encabezado Centrado -->
      <div class="encabezado-seccion">
        <span class="tag-seccion">Talento Humano</span>
        <h2 class="titulo-principal">Trabaja con Nosotros</h2>
      </div>

      <!-- Tarjeta Única -->
      <div class="tarjeta-unica">
        <div class="layout-interno">
          
          <!-- Columna Izquierda: Formulario -->
          <div class="columna-formulario">
            <form action="https://usebasin.com/f/1996f9790bcc" method="POST" enctype="multipart/form-data" class="formulario">
              
              <div class="fila-doble">
                <div class="grupo-input floating-label">
                  <input 
                    type="text" 
                    id="nombre"
                    name="nombre"
                    v-model="form.nombre" 
                    placeholder=" "
                    class="input-linea"
                    required
                  >
                  <label for="nombre">Nombre Completo <span class="required">*</span></label>
                </div>
                <div class="grupo-input floating-label">
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    v-model="form.email" 
                    placeholder=" "
                    class="input-linea"
                    required
                  >
                  <label for="email">Correo Electrónico <span class="required">*</span></label>
                </div>
              </div>

              <div class="fila-doble">
                <div class="grupo-input floating-label">
                  <input 
                    type="text" 
                    id="area"
                    name="area"
                    v-model="form.area" 
                    placeholder=" "
                    class="input-linea"
                    required
                  >
                  <label for="area">Área de Interés <span class="required">*</span></label>
                </div>

                <div class="grupo-input">
                  <label class="label-static">Hoja de Vida (PDF/DOC - Máx 5MB) <span class="required">*</span></label>
                  <div class="file-input-wrapper">
                    <input 
                      type="file" 
                      id="cv" 
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      @change="handleFileUpload"
                      class="input-file"
                      required
                    >
                    <label for="cv" class="file-label">
                      <span v-if="!form.cv">Adjuntar archivo...</span>
                      <span v-else class="file-selected">{{ form.cv.name }}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                      </svg>
                    </label>
                  </div>
                  <span v-if="errorArchivo" class="error-mensaje">{{ errorArchivo }}</span>
                </div>
              </div>

              <div class="grupo-input floating-label">
                <textarea 
                  id="mensaje"
                  name="mensaje"
                  v-model="form.mensaje" 
                  placeholder=" "
                  rows="1"
                  class="input-linea textarea-auto"
                ></textarea>
                <label for="mensaje">Cuéntanos sobre ti (Opcional)</label>
              </div>

              <!-- Campo honeypot anti-spam (oculto) -->
              <input type="hidden" name="_gotcha" style="display:none !important">

              <div class="grupo-checkbox">
                <label class="checkbox-container">
                  <input 
                    type="checkbox" 
                    name="acepta_politica"
                    v-model="form.aceptaPolitica" 
                    required
                  >
                  <span class="checkmark"></span>
                  <span class="texto-politica">
                    He leído y acepto la <a href="/pdf/PO-SGI-05-Politica-de-tratamiento-de-la-informacion.pdf" target="_blank" class="link-politica">Política de Tratamiento de la Información</a> y el tratamiento de mis datos personales para la gestión de esta solicitud de empleo
                  </span>
                </label>
              </div>

              <div class="footer-form">
                <button 
                  type="submit" 
                  class="boton-verde"
                  :class="{ 'boton-deshabilitado': !isFormValid }"
                  :disabled="!isFormValid"
                >
                  <span>Enviar Solicitud</span>
                  <div class="circulo-flecha">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>

          <!-- Columna Derecha: Carousel de Imágenes -->
          <div class="columna-carousel">
            <div class="carousel-imagenes">
            <TransitionGroup name="slide">
              <div 
                v-for="(imagen, index) in imagenes" 
                :key="index"
                v-show="index === imagenActual"
                class="carousel-imagen"
              >
                <img 
                  :src="imagen.src" 
                  :alt="`Equipo SAO ${index + 1}`" 
                  loading="lazy"
                  decoding="async"
                  :fetchpriority="index === 0 ? 'high' : 'low'"
                  :style="{ objectPosition: imagen.position }"
                />
                <div class="overlay-gradiente"></div>
              </div>
            </TransitionGroup>
          </div>
        </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.seccion-trabaja {
  padding: 6rem 2rem 6rem 2rem;
  background-color: #ffffff;
  font-family: 'Outfit', sans-serif;
  overflow: hidden;
  position: relative;
}

.contenedor-principal {
  max-width: 1300px;
  margin: 0 auto;
}

/* Encabezado */
.encabezado-seccion {
  text-align: center;
  margin-bottom: 6rem;
  padding-top: 2rem;
  position: relative;
  z-index: 10;
}

.tag-seccion {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 700;
  color: #2c5f5d;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 1rem;
  background: rgba(44, 95, 93, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 50px;
}

.titulo-principal {
  font-family: 'Outfit', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

/* Tarjeta Única */
.tarjeta-unica {
  background: white;
  border-radius: 32px;
  padding: 3rem;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0,0,0,0.05);
}

.layout-interno {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.columna-formulario {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Formulario */
.formulario {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.fila-doble {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

/* Floating Labels */
.floating-label {
  position: relative;
  margin-bottom: 0.5rem;
}

.input-linea {
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 0.75rem 0;
  font-size: 1.05rem;
  color: #1a1a1a;
  background: transparent;
  border-radius: 0;
  transition: all 0.3s ease;
  font-family: 'Outfit', sans-serif;
}

.input-linea:focus {
  outline: none;
  border-bottom-color: #4CAF50;
}

.floating-label label {
  position: absolute;
  top: 0.75rem;
  left: 0;
  font-size: 1rem;
  color: #999;
  pointer-events: none;
  transition: all 0.3s ease;
}

.input-linea:focus ~ label,
.input-linea:not(:placeholder-shown) ~ label {
  top: -1.2rem;
  font-size: 0.8rem;
  color: #4CAF50;
  font-weight: 600;
  font-weight: 600;
}

.required {
  color: #ef4444;
  margin-left: 2px;
}

.error-mensaje {
  display: block;
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

.label-static {
  font-size: 0.8rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  display: block;
}

/* Select */
.select-wrapper {
  position: relative;
}

.icono-chevron {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #a0a0a0;
}

/* File Input */
.file-input-wrapper {
  position: relative;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
}

.input-file {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
}

.file-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 1rem;
  cursor: pointer;
}

.file-selected {
  color: #1a1a1a;
  font-weight: 500;
}

/* Textarea */
.textarea-auto {
  resize: none;
  min-height: 35px;
}

/* Checkbox */
.grupo-checkbox {
  margin-top: 0.5rem;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;
  position: relative;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: relative;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  flex-shrink: 0;
  transition: all 0.2s ease;
  margin-top: 2px;
}

.checkbox-container:hover input ~ .checkmark {
  border-color: #4CAF50;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #4CAF50;
  border-color: #4CAF50;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.texto-politica {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

.link-politica {
  color: #4CAF50;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.link-politica:hover {
  color: #388E3C;
  text-decoration: underline;
}

/* Botón Verde */
.boton-verde {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  min-width: 220px;
}

.boton-verde:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4);
  background: #43A047;
}

.circulo-flecha {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4CAF50;
  transition: transform 0.3s ease;
}

.boton-verde:hover .circulo-flecha {
  transform: translateX(2px);
}

.boton-deshabilitado {
  background: #ccc;
  cursor: not-allowed;
  box-shadow: none;
  opacity: 0.7;
}

.boton-deshabilitado:hover {
  transform: none;
  box-shadow: none;
  background: #ccc;
}

.boton-deshabilitado .circulo-flecha {
  color: #999;
}

/* Carousel */
.columna-carousel {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  min-height: 500px;
  height: 100%;
}

.carousel-imagenes {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-imagen {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.carousel-imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: translateZ(0);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.overlay-gradiente {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
  pointer-events: none;
}

/* Transiciones del Carousel */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.8s ease, opacity 0.8s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%) translateZ(0);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%) translateZ(0);
}



/* Responsive */
@media (max-width: 1024px) {
  .layout-interno {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .titulo-principal {
    font-size: 2.5rem;
  }

  .columna-carousel {
    min-height: 400px;
  }

  .tarjeta-unica {
    padding: 2.5rem;
  }
}

@media (max-width: 768px) {
  .seccion-trabaja {
    padding: 4rem 1.5rem;
  }
  
  .encabezado-seccion {
    margin-bottom: 2.5rem;
  }

  .tarjeta-unica {
    padding: 2rem;
    border-radius: 20px;
  }

  .columna-carousel {
    border-radius: 20px;
    min-height: 350px;
  }
  
  .fila-doble {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .formulario {
    gap: 2rem;
  }
}
</style>
