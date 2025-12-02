<script setup lang="ts">
import { ref } from 'vue'

interface Servicio {
  titulo: string
  descripcion: string
  imagen: string
  botonTexto: string
  rutaNombre: string
}

const servicios = ref<Servicio[]>([
  {
    titulo: 'Ruta C6-001',
    descripcion: 'Santa Rita - Estación Acevedo. Conecta con los principales puntos del norte de la ciudad con eficiencia y seguridad.',
    imagen: '/rutas/C6-001.png',
    botonTexto: 'Ver ruta',
    rutaNombre: 'Santa Rita - Estación Acevedo'
  },
  {
    titulo: 'Ruta C6-002',
    descripcion: 'Versalles - Punto Cero - Hospital. Una ruta directa para tus necesidades médicas y educativas en la zona centro-norte.',
    imagen: '/rutas/C6-002.png',
    botonTexto: 'Ver ruta',
    rutaNombre: 'Versalles - Punto Cero - Hospital'
  },
  {
    titulo: 'Ruta C6-002A',
    descripcion: 'Versalles - Estación Hospital. Conexión rápida y fluida con el sistema metro y la zona hospitalaria.',
    imagen: '/rutas/C6-002A.png',
    botonTexto: 'Ver ruta',
    rutaNombre: 'Versalles - Estación Hospital'
  }
])
</script>

<template>
  <section class="seccion-rutas" id="rutas">
    <div class="contenedor">
      
      <!-- Encabezado -->
      <div class="encabezado-seccion">
        <span class="tag-seccion">Nuestros Servicios</span>
        <h2 class="titulo-principal">Rutas y Transporte</h2>
      </div>

      <!-- Servicios -->
      <div class="servicios-lista">
        <div 
          v-for="(servicio, index) in servicios" 
          :key="index"
          class="servicio-item"
          :class="{ 'invertido': index % 2 !== 0 }"
        >
          <!-- Imagen con Overlay -->
          <div class="servicio-imagen">
            <div class="imagen-wrapper">
              <img :src="servicio.imagen" :alt="servicio.titulo" />
              <div class="imagen-overlay"></div>
            </div>
          </div>

          <!-- Contenido Lateral -->
          <div class="servicio-contenido">
            <div class="contenido-wrapper">
              <h3 class="servicio-titulo">{{ servicio.titulo }}</h3>
              <p class="servicio-descripcion">{{ servicio.descripcion }}</p>
              <button class="boton-servicio">
                {{ servicio.botonTexto }}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

.seccion-rutas {
  background: #ffffff;
  padding: 8rem 0;
  font-family: 'Outfit', sans-serif;
}

.contenedor {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Encabezado */
.encabezado-seccion {
  text-align: center;
  margin-bottom: 6rem;
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

/* Servicios Lista */
.servicios-lista {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

/* Servicio Item */
.servicio-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.servicio-item.invertido {
  direction: rtl;
}

.servicio-item.invertido > * {
  direction: ltr;
}

/* Imagen */
.servicio-imagen {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.imagen-wrapper {
  width: 100%;
  max-width: 550px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.imagen-wrapper:hover {
  transform: translateY(-8px);
  box-shadow: 0 35px 70px rgba(0, 0, 0, 0.15);
}

.imagen-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s ease;
}

.imagen-wrapper:hover img {
  transform: scale(1.05);
}

.imagen-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  opacity: 0.6;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

/* Info Ruta Overlay */
.info-ruta-overlay {
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
  z-index: 2;
  color: white;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
  max-width: 70%;
  pointer-events: none;
}

.codigo-overlay {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  line-height: 1;
}

.nombre-overlay {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  opacity: 0.95;
}

/* Contenido */
.servicio-contenido {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contenido-wrapper {
  max-width: 520px;
}

.servicio-titulo {
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 1.5rem 0;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.servicio-descripcion {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #64748b;
  margin: 0 0 2.5rem 0;
  font-weight: 400;
}

.boton-servicio {
  padding: 1rem 2.25rem;
  background: #4cc253;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 14px rgba(76, 194, 83, 0.3),
    0 1px 4px rgba(76, 194, 83, 0.2);
  font-family: 'Outfit', sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.boton-servicio svg {
  transition: transform 0.3s ease;
}

.boton-servicio:hover {
  background: #3da945;
  transform: translateY(-2px);
  box-shadow: 
    0 8px 24px rgba(76, 194, 83, 0.35),
    0 2px 8px rgba(76, 194, 83, 0.25);
}

.boton-servicio:hover svg {
  transform: translateX(4px);
}

.boton-servicio:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 1280px) {
  .servicio-item {
    gap: 4rem;
  }

  .servicios-lista {
    gap: 5rem;
  }

  .titulo-principal {
    font-size: 3.5rem;
  }
}

@media (max-width: 1024px) {
  .seccion-rutas {
    padding: 6rem 0;
  }

  .encabezado-seccion {
    margin-bottom: 4rem;
  }

  .titulo-principal {
    font-size: 3rem;
  }

  .servicio-item {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .servicio-item.invertido {
    direction: ltr;
  }

  .servicio-imagen {
    order: -1;
  }

  .imagen-wrapper {
    max-width: 100%;
  }

  .contenido-wrapper {
    max-width: 100%;
  }

  .servicios-lista {
    gap: 4rem;
  }
  
  .info-ruta-overlay {
    left: 2rem;
  }
}

@media (max-width: 768px) {
  .seccion-rutas {
    padding: 5rem 0;
  }

  .contenedor {
    padding: 0 1.5rem;
  }

  .encabezado-seccion {
    margin-bottom: 3.5rem;
  }

  .tag-seccion {
    font-size: 0.8rem;
    letter-spacing: 2px;
  }

  .titulo-principal {
    font-size: 2.5rem;
  }

  .servicios-lista {
    gap: 3.5rem;
  }

  .servicio-item {
    gap: 2.5rem;
  }

  .servicio-contenido {
    text-align: center;
  }

  .contenido-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .servicio-titulo {
    font-size: 1.875rem;
  }

  .servicio-descripcion {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .boton-servicio {
    padding: 0.875rem 2rem;
    font-size: 0.9375rem;
  }
  
  .codigo-overlay {
    font-size: 2.5rem;
  }
  
  .nombre-overlay {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .seccion-rutas {
    padding: 4rem 0;
  }

  .contenedor {
    padding: 0 1.25rem;
  }

  .encabezado-seccion {
    margin-bottom: 3rem;
  }

  .titulo-principal {
    font-size: 2rem;
  }

  .servicios-lista {
    gap: 3rem;
  }

  .servicio-item {
    gap: 2rem;
  }

  .servicio-titulo {
    font-size: 1.625rem;
    margin-bottom: 1.25rem;
  }

  .servicio-descripcion {
    font-size: 0.9375rem;
    line-height: 1.7;
    margin-bottom: 1.75rem;
  }

  .boton-servicio {
    width: 100%;
    justify-content: center;
    padding: 0.8rem 1.75rem;
  }
  
  .info-ruta-overlay {
    left: 1.5rem;
  }
  
  .codigo-overlay {
    font-size: 2rem;
  }
  
  .nombre-overlay {
    font-size: 1rem;
  }
}

/* Optimización de rendimiento */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
