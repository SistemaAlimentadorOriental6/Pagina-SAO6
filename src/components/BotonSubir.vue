<template>
  <Transition name="fade-slide">
    <button 
      v-if="mostrarBoton"
      @click="irArriba"
      class="boton-subir"
      aria-label="Volver al inicio de la página"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        role="img"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const mostrarBoton = ref(false)

const manejarScroll = () => {
  mostrarBoton.value = window.scrollY > 300
}

const irArriba = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', manejarScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', manejarScroll)
})
</script>

<style scoped>
.boton-subir {
  position: fixed;
  bottom: 2rem;
  right: 1.25rem;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  background: #4cc253;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(76, 194, 83, 0.25);
  transition: all 0.2s ease;
  z-index: 9999;
}

.boton-subir:hover {
  background: #45b34a;
  box-shadow: 0 4px 12px rgba(76, 194, 83, 0.35);
}

.boton-subir:active {
  transform: scale(0.96);
}

.boton-subir svg {
  position: relative;
  z-index: 1;
}

/* Animaciones de transición */
.fade-slide-enter-active {
  transition: all 0.25s ease-out;
}

.fade-slide-leave-active {
  transition: all 0.2s ease-in;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Responsive */
@media (max-width: 768px) {
  .boton-subir {
    width: 2.75rem;
    height: 2.75rem;
    bottom: 1.5rem;
    right: 1rem;
  }
  
  .boton-subir svg {
    width: 20px;
    height: 20px;
  }
}
</style>
