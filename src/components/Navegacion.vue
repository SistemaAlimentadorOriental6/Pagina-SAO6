<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRoute } from 'vue-router'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()

interface EnlaceNavegacion {
  texto: string
  ruta: string
  tipo: 'ruta' | 'ancla' | 'externo'
}

const enlaces = ref<EnlaceNavegacion[]>([
  { texto: 'Inicio', ruta: '/', tipo: 'ruta' },
  { texto: 'Nosotros', ruta: '/nosotros', tipo: 'ruta' },
  { texto: 'Noticias y comunicados', ruta: '/noticias', tipo: 'ruta' },
  { texto: 'Nuestras Rutas', ruta: '/rutas', tipo: 'ruta' },
  { texto: 'Portal del Colaborador', ruta: 'http://indicador-desempeno.sao6.com.co/', tipo: 'externo' },
  { texto: 'Administremos', ruta: 'https://admon.sao6.com.co/', tipo: 'externo' }
])

const navegar = (enlace: EnlaceNavegacion, e: Event) => {
  if (enlace.tipo === 'ancla' && enlace.ruta.startsWith('/#')) {
    // Si estamos en otra página y queremos ir a un ancla del home
    if (route.path !== '/') {
      // Dejar que el router-link o el href haga su trabajo
      return
    } else {
      // Estamos en home, hacer scroll suave
      e.preventDefault()
      const id = enlace.ruta.substring(2) // Quitar '/#'
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}

const menuAbierto = ref(false)

const toggleMenu = (e?: Event) => {
  // Solo activar en móvil (cuando el menú principal está oculto)
  if (window.innerWidth <= 968) {
    if (e) e.preventDefault()
    menuAbierto.value = !menuAbierto.value
    
    if (menuAbierto.value) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo('.menu-movil', 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      )
      gsap.fromTo('.enlace-movil', 
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, delay: 0.1 }
      )
    } else {
      document.body.style.overflow = ''
    }
  }
}

const cerrarMenu = () => {
  menuAbierto.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  // Animación de entrada del logo
  gsap.from('.logo', {
    opacity: 0,
    x: -50,
    duration: 0.8,
    ease: 'back.out(1.7)',
    delay: 0.2
  })

  // Animación de entrada de los enlaces con stagger
  gsap.from('.enlaces-navegacion li', {
    opacity: 0,
    y: -20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.5
  })

  // Transformación del header al hacer scroll (activa más temprano)
  ScrollTrigger.create({
    start: 'top -10',
    end: 99999,
    toggleClass: { className: 'scrolled', targets: '.navegacion' }
  })

  // Microanimación de hover para enlaces
  const enlaceElements = document.querySelectorAll('.enlace')
  enlaceElements.forEach(enlace => {
    enlace.addEventListener('mouseenter', () => {
      gsap.to(enlace, {
        y: -2,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(enlace.querySelector('.enlace-icon'), {
        rotation: 360,
        duration: 0.5,
        ease: 'back.out(1.7)'
      })
    })
    
    enlace.addEventListener('mouseleave', () => {
      gsap.to(enlace, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // Animación continua del logo
  gsap.to('.logo-imagen', {
    y: -3,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  // Efecto de brillo en el logo al hacer hover
  const logoElement = document.querySelector('.logo')
  if (logoElement) {
    logoElement.addEventListener('mouseenter', () => {
      gsap.to('.logo-imagen', {
        scale: 1.1,
        filter: 'drop-shadow(0 0 10px rgba(76, 194, 83, 0.6))',
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
    })
    
    logoElement.addEventListener('mouseleave', () => {
      gsap.to('.logo-imagen', {
        scale: 1,
        filter: 'drop-shadow(0 0 0px rgba(76, 194, 83, 0))',
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  }
})
</script>

<template>
  <nav :class="['navegacion', { 'en-nosotros': route.path === '/nosotros' || route.path.startsWith('/noticias') || route.path.startsWith('/rutas') }]">
    <div class="contenedor-navegacion">
      <a href="/" class="logo">
        <img src="/LOGOSAO6.svg" alt="SAO6 Logo" class="logo-imagen" />
      </a>

      <ul class="enlaces-navegacion">
        <li v-for="enlace in enlaces" :key="enlace.texto">
          <!-- Si es ruta interna (Inicio, Nosotros) -->
          <router-link 
            v-if="enlace.tipo === 'ruta'" 
            :to="enlace.ruta" 
            class="enlace"
            active-class="activo"
          >
            <span class="enlace-icon">•</span>
            <span>{{ enlace.texto }}</span>
          </router-link>

          <!-- Si es ancla -->
          <a 
            v-else-if="enlace.tipo === 'ancla'"
            :href="enlace.ruta" 
            class="enlace"
            @click="navegar(enlace, $event)"
          >
            <span class="enlace-icon">•</span>
            <span>{{ enlace.texto }}</span>
          </a>

          <!-- Si es enlace externo -->
          <a 
            v-else 
            :href="enlace.ruta" 
            class="enlace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="enlace-icon">•</span>
            <span>{{ enlace.texto }}</span>
          </a>
        </li>
      </ul>

      <!-- Botón Correo Desktop -->
      <a href="https://webmail.sao6.com.co/" target="_blank" class="boton-correo desktop-only">
        <span>Ver Correo</span>
        <div class="icono-flecha-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </a>

      <!-- Controles Móvil: Solo Hamburguesa -->
      <div class="controles-movil">
        <!-- Botón Hamburguesa -->
        <button 
          :class="['boton-hamburguesa', { 'activo': menuAbierto }]"
          @click="toggleMenu"
          aria-label="Menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Menú Móvil Overlay -->
      <div v-if="menuAbierto" class="menu-movil">
        <!-- Botón Cerrar -->
        <button class="boton-cerrar-menu" @click="cerrarMenu" aria-label="Cerrar menú">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="contenido-menu-movil">
          <ul class="enlaces-movil">
            <li v-for="enlace in enlaces" :key="enlace.texto">
              <router-link 
                v-if="enlace.tipo === 'ruta'" 
                :to="enlace.ruta" 
                class="enlace-movil"
                active-class="activo"
                @click="cerrarMenu"
              >
                {{ enlace.texto }}
              </router-link>
              <a 
                v-else-if="enlace.tipo === 'ancla'"
                :href="enlace.ruta" 
                class="enlace-movil"
                @click="(e) => { navegar(enlace, e); cerrarMenu(); }"
              >
                {{ enlace.texto }}
              </a>
              <a 
                v-else 
                :href="enlace.ruta" 
                class="enlace-movil"
                target="_blank"
                rel="noopener noreferrer"
                @click="cerrarMenu"
              >
                {{ enlace.texto }}
              </a>
            </li>
          </ul>

          <div class="separador-menu"></div>

          <a href="https://webmail.sao6.com.co/" target="_blank" class="boton-correo movil-btn" @click="cerrarMenu">
            <span>Ver Correo</span>
            <div class="icono-flecha-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>
        </div>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.navegacion {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: transparent;
  backdrop-filter: none;
  border-bottom: 1px solid transparent;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0;
}

/* Estilos específicos para la página Nosotros (texto blanco antes de scroll) */
.navegacion.en-nosotros:not(.scrolled) .enlace {
  color: rgba(255, 255, 255, 0.9);
}

.navegacion.en-nosotros:not(.scrolled) .enlace:hover {
  color: #ffffff;
}

.navegacion.en-nosotros:not(.scrolled) .logo-imagen {
  filter: brightness(0) invert(1); /* Logo blanco */
}

/* Estado scrolled: píldora flotante compacta */
.navegacion.scrolled {
  background-color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border-bottom: none;
  border-radius: 0 0 32px 32px;
  left: 7.5%;
  transform: translateX(0);
  max-width: 85%;
  right: 7.5%;
}

.navegacion.scrolled .enlace {
  color: #374151; /* Vuelve a color oscuro al hacer scroll */
}

.navegacion.scrolled .logo-imagen {
  height: 36px;
  filter: none; /* Restaura el color original del logo */
}

.navegacion.scrolled .contenedor-navegacion {
  padding: 0.6rem 2.5rem;
}

.contenedor-navegacion {
  max-width: 1500px;
  margin: 0 auto;
  padding: 1.1rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: padding 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-imagen {
  height: 52px;
  width: auto;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, filter;
}

.enlaces-navegacion {
  display: flex;
  list-style: none;
  gap: 1.75rem;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
}

.enlace {
  color: #374151;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  position: relative;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.3s ease;
}

.enlace-icon {
  color: #4cc253;
  font-size: 1.2rem;
  line-height: 1;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s ease;
  display: inline-block;
}

.enlace:hover {
  color: #4cc253;
}

.enlace:hover .enlace-icon {
  opacity: 1;
  transform: scale(1);
}

.enlace::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #4cc253 0%, #2c5f5d 100%);
  transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.enlace:hover::after {
  width: 100%;
}

/* Ocultar controles móviles en desktop */
.controles-movil {
  display: none;
}

@media (max-width: 1200px) {
  .enlaces-navegacion {
    gap: 1.25rem;
  }

  .enlace {
    font-size: 0.8rem;
  }
}

@media (max-width: 968px) {
  .enlaces-navegacion {
    display: none;
  }

  .contenedor-navegacion {
    padding: 0.75rem 1.5rem;
    justify-content: space-between;
  }

  .logo-imagen {
    height: 45px;
  }

  /* Controles Móvil */
  .controles-movil {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* Botón Hamburguesa Mejorado */
  .boton-hamburguesa {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    width: 44px;
    height: 44px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;
    border-radius: 8px;
    transition: background 0.3s ease;
  }

  .boton-hamburguesa:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .boton-hamburguesa span {
    width: 100%;
    height: 4px;
    background: #1f2937;
    border-radius: 4px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
  }

  .navegacion.en-nosotros:not(.scrolled) .boton-hamburguesa span {
    background: white;
  }

  .navegacion.en-nosotros:not(.scrolled) .boton-hamburguesa:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .boton-hamburguesa.activo span:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }

  .boton-hamburguesa.activo span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }

  .boton-hamburguesa.activo span:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }
}
.menu-movil {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow-y: auto;
  animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Botón Cerrar */
.boton-cerrar-menu {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  background: #f3f4f6;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
}

.boton-cerrar-menu:hover {
  background: #e5e7eb;
  transform: rotate(90deg);
}

.boton-cerrar-menu svg {
  color: #374151;
  transition: color 0.3s ease;
}

.boton-cerrar-menu:active {
  transform: scale(0.95) rotate(90deg);
}

/* Contenido del menú */
.contenido-menu-movil {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 80px 2rem 40px 2rem;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
}

.enlaces-movil {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
  width: 100%;
}

.enlace-movil {
  font-size: 1.25rem;
  color: #374151;
  text-decoration: none;
  font-weight: 600;
  display: block;
  padding: 16px 20px;
  transition: all 0.3s ease;
  border-radius: 12px;
  text-align: center;
  position: relative;
}

.enlace-movil:hover {
  background: #f9fafb;
  color: #4cc253;
  transform: translateX(4px);
}

.enlace-movil.activo {
  color: #4cc253;
  background: #f0fdf4;
}

.enlace-movil.activo::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: #4cc253;
  border-radius: 0 4px 4px 0;
}

/* Separador */
.separador-menu {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #e5e7eb 50%, transparent 100%);
  margin: 24px 0;
}

/* Botón Correo en Móvil */
.movil-btn {
  margin: 0;
  width: 100%;
  max-width: 280px;
  background: #4cc253;
  padding: 16px 16px 16px 28px;
  font-size: 1.1rem;
  box-shadow: 0 8px 24px rgba(76, 194, 83, 0.25);
  justify-content: space-between;
}

.movil-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(76, 194, 83, 0.35);
}

.movil-btn .icono-flecha-btn {
  width: 44px;
  height: 44px;
}

/* Estilos Botón Correo */
.boton-correo {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #4cc253;
  padding: 5px 5px 5px 20px;
  border-radius: 50px;
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 4px 12px rgba(76, 194, 83, 0.3);
  transition: all 0.3s ease;
  margin-left: 1rem;
}

.icono-flecha-btn {
  width: 34px;
  height: 34px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4cc253;
  transition: transform 0.3s ease;
}

.boton-correo:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(76, 194, 83, 0.4);
  background: #3da542;
}

.boton-correo:hover .icono-flecha-btn {
  background: white;
  transform: rotate(45deg);
  color: #3da542;
}

@media (max-width: 968px) {
  .desktop-only {
    display: none;
  }

  .controles-movil {
    display: flex !important;
  }
}
</style>
