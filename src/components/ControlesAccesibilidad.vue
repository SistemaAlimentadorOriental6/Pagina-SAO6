<template>
  <div class="controles-accesibilidad">
    <div class="barra-controles">
      <!-- Botón de información -->
      <button 
        @click="mostrarInfo = !mostrarInfo" 
        class="control-btn info-btn"
        :class="{ 'activo': mostrarInfo }"
        aria-label="Información de accesibilidad"
        title="Información"
      >
        <span class="texto-icono">?</span>
      </button>

      <!-- Aumentar tamaño de texto -->
      <button 
        @click="aumentarTexto" 
        class="control-btn"
        :disabled="nivelTexto >= 3"
        aria-label="Aumentar tamaño de texto"
        title="Aumentar texto"
      >
        <span class="texto-icono">+A</span>
      </button>

      <!-- Disminuir tamaño de texto -->
      <button 
        @click="disminuirTexto" 
        class="control-btn"
        :disabled="nivelTexto <= -2"
        aria-label="Disminuir tamaño de texto"
        title="Reducir texto"
      >
        <span class="texto-icono">-A</span>
      </button>

      <!-- Escala de grises -->
      <button 
        @click="toggleGrises" 
        class="control-btn"
        :class="{ 'activo': escalaGrises }"
        aria-label="Alternar escala de grises"
        title="Modo gris"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor"></path>
        </svg>
      </button>
    </div>

    <!-- Panel informativo -->
    <Transition name="slide-info">
      <div v-if="mostrarInfo" class="panel-info">
        <div class="info-header">
          <h4>Herramientas de Accesibilidad</h4>
          <button @click="mostrarInfo = false" class="cerrar-btn" aria-label="Cerrar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="info-content">
          <div class="info-item">
            <div class="info-icon">+A</div>
            <div class="info-texto">
              <strong>Aumentar texto</strong>
              <p>Incrementa el tamaño de la fuente para facilitar la lectura</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">-A</div>
            <div class="info-texto">
              <strong>Reducir texto</strong>
              <p>Disminuye el tamaño de la fuente según tu preferencia</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor"></path>
              </svg>
            </div>
            <div class="info-texto">
              <strong>Modo gris</strong>
              <p>Convierte todo el contenido a escala de grises</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const nivelTexto = ref(0)
const escalaGrises = ref(false)
const mostrarInfo = ref(false)

// Cargar preferencias guardadas
onMounted(() => {
  const preferencias = localStorage.getItem('preferencias-accesibilidad')
  if (preferencias) {
    const datos = JSON.parse(preferencias)
    nivelTexto.value = datos.nivelTexto || 0
    escalaGrises.value = datos.escalaGrises || false
    aplicarPreferencias()
  }
})

const aumentarTexto = () => {
  if (nivelTexto.value < 3) {
    nivelTexto.value++
    aplicarTamañoTexto()
  }
}

const disminuirTexto = () => {
  if (nivelTexto.value > -2) {
    nivelTexto.value--
    aplicarTamañoTexto()
  }
}

const toggleGrises = () => {
  escalaGrises.value = !escalaGrises.value
  aplicarEscalaGrises()
}

const aplicarTamañoTexto = () => {
  const porcentaje = 100 + (nivelTexto.value * 10)
  document.documentElement.style.fontSize = `${porcentaje}%`
  guardarPreferencias()
}

const aplicarEscalaGrises = () => {
  if (escalaGrises.value) {
    document.documentElement.classList.add('escala-grises')
  } else {
    document.documentElement.classList.remove('escala-grises')
  }
  guardarPreferencias()
}

const aplicarPreferencias = () => {
  aplicarTamañoTexto()
  aplicarEscalaGrises()
}

const guardarPreferencias = () => {
  const preferencias = {
    nivelTexto: nivelTexto.value,
    escalaGrises: escalaGrises.value
  }
  localStorage.setItem('preferencias-accesibilidad', JSON.stringify(preferencias))
}
</script>

<style scoped>
.controles-accesibilidad {
  position: fixed;
  top: 50%;
  right: 1.25rem;
  transform: translateY(-50%);
  z-index: 9998;
}

.barra-controles {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.control-btn {
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  background: #4cc253;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(76, 194, 83, 0.25);
}

.control-btn svg,
.control-btn .texto-icono {
  color: white;
  transition: color 0.2s ease;
}

.control-btn .texto-icono {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: -0.3px;
}

.control-btn:hover:not(:disabled) {
  background: #45b34a;
  box-shadow: 0 4px 12px rgba(76, 194, 83, 0.35);
}

.control-btn:active:not(:disabled) {
  transform: scale(0.96);
}

.control-btn.activo {
  background: #3da142;
  box-shadow: 0 4px 12px rgba(76, 194, 83, 0.4);
}

.control-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Panel informativo */
.panel-info {
  position: absolute;
  right: 4.25rem;
  top: 0;
  background: white;
  border-radius: 0.875rem;
  padding: 1.25rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  width: 280px;
  border: 1px solid rgba(76, 194, 83, 0.15);
}

.info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(76, 194, 83, 0.1);
}

.info-header h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #2d8a34;
}

.cerrar-btn {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: #6b7280;
}

.cerrar-btn:hover {
  background: #f3f4f6;
  color: #374151;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.info-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #4cc253;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.info-texto {
  flex: 1;
}

.info-texto strong {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.info-texto p {
  margin: 0;
  font-size: 0.75rem;
  color: #6b7280;
  line-height: 1.4;
}

/* Transición del panel */
.slide-info-enter-active {
  transition: all 0.25s ease-out;
}

.slide-info-leave-active {
  transition: all 0.2s ease-in;
}

.slide-info-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.slide-info-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

/* Responsive */
@media (max-width: 768px) {
  .controles-accesibilidad {
    right: 1rem;
  }

  .control-btn {
    width: 2.75rem;
    height: 2.75rem;
  }

  .control-btn .texto-icono {
    font-size: 0.8rem;
  }

  .control-btn svg {
    width: 18px;
    height: 18px;
  }

  .panel-info {
    right: 3.75rem;
    width: 260px;
    padding: 1rem;
  }
}
</style>

<style>
/* Estilos globales para las opciones de accesibilidad */
.escala-grises {
  filter: grayscale(100%);
}
</style>
