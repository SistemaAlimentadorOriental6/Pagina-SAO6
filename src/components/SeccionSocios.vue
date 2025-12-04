<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

interface Rail {
  nombre: string
  imagen: string
  tipo: 'enlace' | 'modal' | 'none'
  url?: string
}

// Control del modal
const mostrarModal = ref(false)

// Referencia al swiper
const swiperInstance = ref<SwiperType | null>(null)

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

// Guardar instancia del swiper
const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper
}

// Pausar el autoplay
const pausarAutoplay = () => {
  if (swiperInstance.value?.autoplay) {
    swiperInstance.value.autoplay.stop()
  }
}

// Reanudar el autoplay
const reanudarAutoplay = () => {
  if (swiperInstance.value?.autoplay) {
    swiperInstance.value.autoplay.start()
  }
}

const manejarClickRail = (rail: Rail, event: Event) => {
  event.preventDefault()
  event.stopPropagation()
  
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
      <div 
        class="swiper-container-wrapper"
        @mouseenter="pausarAutoplay"
        @mouseleave="reanudarAutoplay"
      >
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
          :allowTouchMove="true"
          :freeMode="true"
          :freeModeMomentum="false"
          class="rails-swiper"
          @swiper="onSwiper"
        >
          <SwiperSlide v-for="(rail, index) in rails" :key="`rail-${index}`" class="slide-item">
            <button 
              type="button"
              class="rail-contenedor" 
              :class="{ 'clickable': rail.tipo !== 'none' }"
              @click="manejarClickRail(rail, $event)"
              :title="rail.nombre"
              :aria-label="rail.nombre"
            >
              <img 
                :src="rail.imagen" 
                :alt="rail.nombre"
                class="rail-imagen"
                draggable="false"
              />
            </button>
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
              <img src="/rails/image 6.svg" alt="ISO 9001" class="iso-badge" width="80" height="80" loading="lazy" />
              <img src="/rails/image 7.svg" alt="ISO 14001" class="iso-badge" width="80" height="80" loading="lazy" />
            </div>
            <h3 class="modal-titulo">Excelencia Certificada</h3>
            <p class="modal-subtitulo">Comprometidos con la calidad y el medio ambiente</p>
          </div>

          <div class="modal-body">
            <div class="modal-mensaje-final">
              <p>Nuestras certificaciones respaldan algo que para nosotros es esencial: que cada persona que usa nuestros servicios pueda viajar con tranquilidad, en vehículos que funcionan bien, conducidos por equipos preparados y protegidos. Significan que trabajamos todos los días para reducir riesgos en la vía, respetar a los demás actores viales y operar de manera responsable con el medio ambiente. No son solo sellos; son la garantía de que hacemos las cosas bien para cuidar a quienes confían en nosotros y también cuidar el entorno que compartimos.</p>
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
  width: 140px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  background: transparent;
  border: none;
  padding: 0;
  outline: none;
}

.rail-contenedor.clickable {
  cursor: pointer;
}

.rail-imagen {
  max-width: 100%;
  max-height: 65px;
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
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.modal-contenido {
  background: white;
  border-radius: 24px;
  max-width: 700px;
  width: 100%;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  font-family: 'Outfit', sans-serif;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
}

.btn-cerrar {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f3f4f6;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
  color: #6b7280;
}

.btn-cerrar:hover {
  background: #e5e7eb;
  color: #111827;
  transform: rotate(90deg);
}

.modal-header {
  padding: 2.5rem 2rem 1.5rem;
  text-align: center;
  background: linear-gradient(to bottom, #f9fafb, white);
}

.iso-badges {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.iso-badge {
  height: 70px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.05));
  transition: transform 0.3s ease;
}

.iso-badge:hover {
  transform: scale(1.05);
}

.modal-titulo {
  font-size: 2rem;
  font-weight: 800;
  color: #111827;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.modal-subtitulo {
  font-size: 1.1rem;
  color: #6b7280;
  margin: 0;
  font-weight: 500;
}

.modal-body {
  padding: 1.5rem 2.5rem;
  overflow-y: auto;
}

.certificaciones-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.cert-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
}

.cert-card:hover {
  border-color: #4cc253;
  box-shadow: 0 10px 30px rgba(76, 194, 83, 0.1);
  transform: translateY(-4px);
}

.cert-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #f0fdf4;
  color: #4cc253;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.cert-content h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.5rem 0;
}

.cert-content p {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.5;
  margin: 0;
}

.modal-mensaje-final {
  text-align: center;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 12px;
  color: #374151;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 600;
}

.modal-mensaje-final p {
  margin: 0;
}

.modal-footer {
  padding: 1.5rem 2.5rem 2rem;
  display: flex;
  justify-content: center;
  background: white;
  border-top: 1px solid #f3f4f6;
}

.btn-entendido {
  padding: 0.875rem 3rem;
  background: #4cc253;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(76, 194, 83, 0.25);
}

.btn-entendido:hover {
  background: #3da542;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(76, 194, 83, 0.35);
}

.btn-entendido:active {
  transform: translateY(0);
}

/* Transiciones */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-contenido,
.modal-leave-active .modal-contenido {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-enter-from .modal-contenido,
.modal-leave-to .modal-contenido {
  transform: scale(0.95) translateY(10px);
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .modal-contenido {
    max-height: 85vh;
  }

  .modal-header {
    padding: 2rem 1.5rem 1rem;
  }

  .iso-badges {
    gap: 1rem;
  }

  .iso-badge {
    height: 50px;
  }

  .modal-titulo {
    font-size: 1.5rem;
  }

  .certificaciones-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .cert-card {
    flex-direction: row;
    align-items: flex-start;
    padding: 1.25rem;
  }

  .cert-icon-wrapper {
    width: 40px;
    height: 40px;
    margin-bottom: 0;
    flex-shrink: 0;
  }

  .cert-icon-wrapper svg {
    width: 20px;
    height: 20px;
  }

  .modal-body {
    padding: 1.5rem;
  }

  .modal-mensaje-final {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>
