<template>
  <div class="controles-accesibilidad">
    <div class="barra-controles">
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

      <!-- Botón de YouTube -->
      <a 
        href="https://www.youtube.com/@Sao6." 
        target="_blank"
        rel="noopener noreferrer"
        class="control-btn youtube-btn"
        aria-label="Visitar nuestro canal de YouTube"
        title="YouTube"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </a>

      <!-- Botón de Instagram -->
      <a 
        href="https://www.instagram.com/sao6oficial" 
        target="_blank"
        rel="noopener noreferrer"
        class="control-btn instagram-btn"
        aria-label="Visitar nuestro perfil de Instagram"
        title="Instagram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>

      <!-- Botón de Facebook -->
      <a 
        href="https://www.facebook.com/alimentadoresmetrosao6" 
        target="_blank"
        rel="noopener noreferrer"
        class="control-btn facebook-btn"
        aria-label="Visitar nuestra página de Facebook"
        title="Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const nivelTexto = ref(0)

// Cargar preferencias guardadas
onMounted(() => {
  const preferencias = localStorage.getItem('preferencias-accesibilidad')
  if (preferencias) {
    const datos = JSON.parse(preferencias)
    nivelTexto.value = datos.nivelTexto || 0
    aplicarTamañoTexto()
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

const aplicarTamañoTexto = () => {
  const porcentaje = 100 + (nivelTexto.value * 10)
  document.documentElement.style.fontSize = `${porcentaje}%`
  guardarPreferencias()
}

const guardarPreferencias = () => {
  const preferencias = {
    nivelTexto: nivelTexto.value
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
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: #4cc253;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(76, 194, 83, 0.25);
  text-decoration: none;
}

.control-btn svg,
.control-btn .texto-icono {
  color: white;
  transition: color 0.2s ease;
}

.control-btn .texto-icono {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: -0.3px;
}

.control-btn:hover:not(:disabled) {
  background: #45b34a;
  box-shadow: 0 4px 12px rgba(76, 194, 83, 0.35);
  transform: scale(1.05);
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

/* Botón de YouTube */
.youtube-btn {
  background: #FF0000;
  box-shadow: 0 2px 8px rgba(255, 0, 0, 0.3);
}

.youtube-btn:hover {
  background: #CC0000 !important;
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.45) !important;
}

/* Botón de Instagram */
.instagram-btn {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  box-shadow: 0 2px 8px rgba(225, 48, 108, 0.35);
}

.instagram-btn:hover {
  background: linear-gradient(45deg, #e08322 0%, #d5572b 25%, #cb1632 50%, #bb1255 75%, #ab0777 100%) !important;
  box-shadow: 0 4px 12px rgba(225, 48, 108, 0.5) !important;
}

/* Botón de Facebook */
.facebook-btn {
  background: #1877F2;
  box-shadow: 0 2px 8px rgba(24, 119, 242, 0.35);
}

.facebook-btn:hover {
  background: #0d65d9 !important;
  box-shadow: 0 4px 12px rgba(24, 119, 242, 0.5) !important;
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
    right: 0.75rem;
  }

  .barra-controles {
    gap: 0.5rem;
  }

  .control-btn {
    width: 2.25rem;
    height: 2.25rem;
  }

  .control-btn .texto-icono {
    font-size: 0.7rem;
  }

  .control-btn svg {
    width: 14px;
    height: 14px;
  }

  .panel-info {
    right: 3rem;
    width: 240px;
    padding: 0.875rem;
  }
}
</style>

<style>
/* Estilos globales para las opciones de accesibilidad */
.escala-grises {
  filter: grayscale(100%);
}
</style>
