<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import Navegacion from './components/Navegacion.vue'
import SeccionAdmin from './components/SeccionAdmin.vue'
import Footer from './components/Footer.vue'
import BotonSubir from './components/BotonSubir.vue'
import ControlesAccesibilidad from './components/ControlesAccesibilidad.vue'

const route = useRoute()
// Canonical URL sin parámetros de consulta para evitar contenido duplicado
const canonicalUrl = computed(() => {
  const baseUrl = 'https://www.sao6.com'
  // Aseguramos que no haya slash final a menos que sea la raíz
  const path = route.path.endsWith('/') && route.path !== '/' ? route.path.slice(0, -1) : route.path
  return `${baseUrl}${path}`
})

useHead({
  titleTemplate: (title) => title ? `${title} | SAO6` : 'SAO6 - Sistema Alimentador Oriental',
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ],
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `
    }
  ]
})

const mostrarAdmin = ref(false)

onMounted(() => {
  // Detectar clic en el enlace "Administremos"
  const checkHash = () => {
    if (window.location.hash === '#administremos') {
      mostrarAdmin.value = true
      // Scroll suave a la sección
      setTimeout(() => {
        const adminSection = document.getElementById('administremos')
        if (adminSection) {
          adminSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      mostrarAdmin.value = false
    }
  }

  // Escuchar cambios en el hash
  window.addEventListener('hashchange', checkHash)
  
  // Verificar el hash inicial
  checkHash()

  // Guardar posición de scroll antes de recargar
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString())
  })
})
</script>

<template>
  <div class="app-container">
    <Navegacion />
    
    <!-- Vista del Router (Home o Nosotros) -->
    <main v-show="!mostrarAdmin">
      <router-view />
    </main>
    
    <!-- Sección de Administración (solo se muestra cuando se hace clic) -->
    <SeccionAdmin v-show="mostrarAdmin" />
    
    <Footer v-show="!mostrarAdmin" />
    
    <!-- Botón para subir -->
    <BotonSubir />
    
    <!-- Controles de accesibilidad -->
    <ControlesAccesibilidad />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
}

main {
  width: 100%;
}

/* Transición suave para imágenes con carga diferida (v-lazy) */
img {
  transition: opacity 0.5s ease-in-out;
}

img:not(.loaded):not([loading="eager"]) {
  opacity: 0;
}

img.loaded {
  opacity: 1;
}
</style>
