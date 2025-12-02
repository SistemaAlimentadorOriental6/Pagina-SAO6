<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

interface Rail {
  nombre: string
  imagen: string
  tipo: 'enlace' | 'modal' | 'none'
  url?: string
}

// Control del modal
const mostrarModal = ref(false)

// Datos base de los socios con acciones
const baseRails: Rail[] = [
  { 
    nombre: 'Metro de Medellín', 
    imagen: '/rails/Group.svg',
    tipo: 'enlace',
    url: 'https://www.metrodemedellin.gov.co/'
  },
  { 
    nombre: 'SITVA - Área Metropolitana', 
    imagen: '/rails/image 4.svg',
    tipo: 'enlace',
    url: 'https://www.metropol.gov.co/la-movilidad/transporte-p%C3%BAblico/sitva'
  },
  { 
    nombre: 'Supertransporte', 
    imagen: '/rails/image 5.svg',
    tipo: 'enlace',
    url: 'https://www.supertransporte.gov.co/index.php/objetivos-y-funciones/'
  },
  { 
    nombre: 'Certificación ISO 9001', 
    imagen: '/rails/image 6.svg',
    tipo: 'modal'
  },
  { 
    nombre: 'Certificación ISO 14001', 
    imagen: '/rails/image 7.svg',
    tipo: 'modal'
  },
]

// Duplicamos múltiples veces para asegurar un loop fluido
const rails = ref<Rail[]>([
  ...baseRails, 
  ...baseRails, 
  ...baseRails, 
  ...baseRails,
  ...baseRails,
  ...baseRails
])

const modules = [Autoplay]

const manejarClickRail = (rail: Rail) => {
  if (rail.tipo === 'enlace' && rail.url) {
    // Abrir enlace en nueva pestaña
    window.open(rail.url, '_blank', 'noopener,noreferrer')
  } else if (rail.tipo === 'modal') {
    // Mostrar modal de certificaciones
    mostrarModal.value = true
    // Pausar el scroll del body cuando se abre el modal
    document.body.style.overflow = 'hidden'
  }
}

const cerrarModal = () => {
  mostrarModal.value = false
  // Restaurar scroll del body
  document.body.style.overflow = ''
}
</script>

<template>
  <section class="seccion-socios">
    <div class="contenedor-socios">
      <div class="swiper-container-wrapper">
        <Swiper
          :modules="modules"
          :slides-per-view="'auto'"
          :space-between="40"
          :loop="true"
          :speed="3000"
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false
          }"
          :allowTouchMove="false"
          :freeMode="true"
          :freeModeMomentum="false"
          class="rails-swiper"
        >
          <SwiperSlide v-for="(rail, index) in rails" :key="`rail-${index}`" class="slide-item">
            <div 
              class="rail-contenedor" 
              :class="{ 'clickable': rail.tipo !== 'none' }"
              @click="manejarClickRail(rail)"
              :title="rail.nombre"
            >
              <img 
                :src="rail.imagen" 
                :alt="rail.nombre"
                class="rail-imagen"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="fade-left"></div>
        <div class="fade-right"></div>
      </div>
    </div>

    <!-- Modal de Certificaciones ISO -->
    <Transition name="modal">
      <div v-if="mostrarModal" class="modal-overlay" @click="cerrarModal">
        <div class="modal-contenido" @click.stop>
          <button class="btn-cerrar" @click="cerrarModal" aria-label="Cerrar modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <div class="modal-header">
            <div class="iso-badges">
              <img src="/rails/image 6.svg" alt="ISO 9001" class="iso-badge" />
              <img src="/rails/image 7.svg" alt="ISO 14001" class="iso-badge" />
            </div>
            <h3 class="modal-titulo">Certificaciones ISO</h3>
          </div>

          <div class="modal-body">
            <p class="modal-texto">
              Nuestras certificaciones respaldan algo que para nosotros es esencial: 
              que cada persona que usa nuestros servicios pueda viajar con tranquilidad, 
              en vehículos que funcionan bien, conducidos por equipos preparados y protegidos. 
              Significan que trabajamos todos los días para reducir riesgos en la vía, 
              respetar a los demás actores viales y operar de manera responsable con el medio ambiente.
            </p>
            <p class="modal-texto">
              No son solo sellos; son la garantía de que hacemos las cosas bien para cuidar 
              a quienes confían en nosotros y también cuidar el entorno que compartimos.
            </p>

            <div class="certificaciones-info">
              <div class="cert-item">
                <div class="cert-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4cc253" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div class="cert-texto">
                  <h4>ISO 9001</h4>
                  <p>Sistema de Gestión de Calidad</p>
                </div>
              </div>

              <div class="cert-item">
                <div class="cert-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4cc253" stroke-width="2">
                    <path d="M3 3h18v18H3zM12 8v8m-4-4h8"/>
                  </svg>
                </div>
                <div class="cert-texto">
                  <h4>ISO 14001</h4>
                  <p>Sistema de Gestión Ambiental</p>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn-entendido" @click="cerrarModal">
              Entendido
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

.seccion-socios {
  padding: 1.5rem 0 3rem;
  background: #ffffff;
  overflow: hidden;
}

.contenedor-socios {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.swiper-container-wrapper {
  position: relative;
  width: 100%;
}

.rails-swiper {
  width: 100%;
}

:deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
}

.slide-item {
  width: auto !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rail-contenedor {
  width: 120px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.rail-contenedor.clickable {
  cursor: pointer;
}

.rail-imagen {
  max-width: 100%;
  max-height: 55px;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.6);
  transition: all 0.3s ease;
}

.rail-contenedor:hover .rail-imagen {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.1);
}

.rail-contenedor.clickable:hover {
  transform: translateY(-2px);
}

/* Fades laterales */
.fade-left,
.fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 120px;
  z-index: 2;
  pointer-events: none;
}

.fade-left {
  left: 0;
  background: linear-gradient(to right, #ffffff 0%, transparent 100%);
}

.fade-right {
  right: 0;
  background: linear-gradient(to left, #ffffff 0%, transparent 100%);
}

/* ========== MODAL ========== */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  overflow-y: auto;
}

.modal-contenido {
  background: white;
  border-radius: 24px;
  max-width: 600px;
  width: 100%;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Outfit', sans-serif;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.btn-cerrar {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f5f5f5;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 1;
}

.btn-cerrar:hover {
  background: #e5e5e5;
  transform: rotate(90deg);
}

.btn-cerrar svg {
  color: #666;
}

.modal-header {
  padding: 3rem 2.5rem 2rem;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
}

.iso-badges {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.iso-badge {
  height: 80px;
  object-fit: contain;
  filter: grayscale(0);
  animation: badgeBounce 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes badgeBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.modal-titulo {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.02em;
}

.modal-body {
  padding: 2rem 2.5rem;
}

.modal-texto {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #4b5563;
  margin: 0 0 1.5rem 0;
}

.modal-texto:last-of-type {
  margin-bottom: 2rem;
}

.certificaciones-info {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.cert-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem;
  background: #f9fafb;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.cert-item:hover {
  background: #f0fdf4;
  border-color: #4cc253;
  transform: translateX(4px);
}

.cert-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(76, 194, 83, 0.1);
}

.cert-texto h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.25rem 0;
}

.cert-texto p {
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
}

.modal-footer {
  padding: 1.5rem 2.5rem 2.5rem;
  display: flex;
  justify-content: center;
}

.btn-entendido {
  padding: 0.875rem 2.5rem;
  background: #4cc253;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(76, 194, 83, 0.25);
  font-family: 'Outfit', sans-serif;
}

.btn-entendido:hover {
  background: #3da542;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(76, 194, 83, 0.3);
}

.btn-entendido:active {
  transform: translateY(0);
}

/* Transiciones del modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-contenido,
.modal-leave-active .modal-contenido {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from .modal-contenido,
.modal-leave-to .modal-contenido {
  transform: translateY(-20px) scale(0.95);
}

/* Responsive */
@media (max-width: 768px) {
  .contenedor-socios {
    padding: 0 1rem;
  }
  
  .rail-contenedor {
    width: 100px;
    height: 60px;
  }
  
  .rail-imagen {
    max-height: 45px;
  }
  
  .fade-left,
  .fade-right {
    width: 80px;
  }

  .modal-contenido {
    border-radius: 20px;
  }

  .modal-header {
    padding: 2.5rem 1.5rem 1.5rem;
  }

  .iso-badges {
    gap: 1rem;
  }

  .iso-badge {
    height: 60px;
  }

  .modal-titulo {
    font-size: 1.5rem;
  }

  .modal-body {
    padding: 1.5rem;
  }

  .modal-texto {
    font-size: 1rem;
  }

  .certificaciones-info {
    gap: 1rem;
  }

  .cert-item {
    padding: 1rem;
  }

  .cert-icon {
    width: 40px;
    height: 40px;
  }

  .cert-icon svg {
    width: 24px;
    height: 24px;
  }

  .cert-texto h4 {
    font-size: 1rem;
  }

  .cert-texto p {
    font-size: 0.875rem;
  }

  .modal-footer {
    padding: 1rem 1.5rem 2rem;
  }

  .btn-entendido {
    width: 100%;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .modal-overlay {
    padding: 0.5rem;
  }

  .modal-header {
    padding: 2rem 1.25rem 1.25rem;
  }

  .iso-badge {
    height: 50px;
  }

  .modal-titulo {
    font-size: 1.375rem;
  }

  .modal-body {
    padding: 1.25rem;
  }

  .modal-texto {
    font-size: 0.9375rem;
  }
}
</style>
