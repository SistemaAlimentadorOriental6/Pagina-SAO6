<script setup lang="ts">
import { onMounted, ref, computed, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBgImage from '../assets/images/pasajeros-sao6.jpg' 
import { useHead } from '@vueuse/head'
import { RUTAS } from '../data/rutas'

useHead({
  title: 'Nuestras Rutas',
  meta: [
    { name: 'description', content: 'Explora todas las rutas de buses de SAO6. Conectamos barrios como Santa Rita, Versalles, Campo Valdés y más con el sistema Metro.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "C6-001 Santa Rita - Estación Acevedo",
            "url": "https://www.sao6.com/rutas/santa-rita-estacion-acevedo"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "C6-002 Versalles - Punto Cero - Hospital",
            "url": "https://www.sao6.com/rutas/versalles-punto-cero-hospital"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "C6-014 La Ladera - Prado",
            "url": "https://www.sao6.com/rutas/la-ladera-prado"
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://www.sao6.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Rutas",
            "item": "https://www.sao6.com/rutas"
          }
        ]
      })
    }
  ]
})

gsap.registerPlugin(ScrollTrigger)

const tituloHero = ref<HTMLElement | null>(null)
const busqueda = ref('')

// Filtrado de rutas
const rutasFiltradas = computed(() => {
  return RUTAS.filter(ruta => 
    ruta.codigo.toLowerCase().includes(busqueda.value.toLowerCase()) ||
    ruta.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
  )
})

onMounted(async () => {
  // Animación Hero
  if (tituloHero.value) {
    gsap.from(tituloHero.value, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })
  }

  // Esperar a que el DOM se actualice para animar las cards
  await nextTick()
  
  // Animación Grid más robusta
  const cards = document.querySelectorAll('.card-ruta')
  if (cards.length > 0) {
    gsap.from(cards, {
      scrollTrigger: {
        trigger: '.grid-rutas',
        start: 'top 90%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      clearProps: 'all'
    })
  }
})
</script>

<template>
  <div class="pagina-rutas">
    
    <!-- Hero Section -->
    <section class="hero-rutas">
      <div class="hero-bg-wrapper">
        <img 
          :src="heroBgImage" 
          alt="Buses de SAO6 recorriendo las rutas de Medellín" 
          class="hero-bg" 
          width="1920" 
          height="1080"
          loading="eager"
        />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="hero-content">
        <div class="hero-text-container">
          <span class="tag-hero">Cobertura & Servicio</span>
          <h1 ref="tituloHero">Nuestras Rutas</h1>
          <div class="linea-decorativa"></div>
          <p class="hero-description">
            Conectamos el oriente de Medellín con eficiencia y seguridad. Encuentra tu ruta ideal.
          </p>
        </div>
      </div>
    </section>

    <!-- Buscador y Grid -->
    <section class="contenido-rutas">
      <div class="contenedor">
        
        <!-- Buscador -->
        <div class="buscador-wrapper">
          <div class="input-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icono-busqueda">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input 
              type="text" 
              v-model="busqueda" 
              placeholder="Buscar por código o barrio..." 
              class="input-busqueda"
            />
          </div>
        </div>

        <!-- Grid de Rutas -->
        <div class="grid-rutas" v-if="rutasFiltradas.length > 0">
          <router-link 
            v-for="(ruta, index) in rutasFiltradas" 
            :key="index" 
            :to="`/rutas/${ruta.slug}`"
            class="card-ruta"
          >
            <div class="card-header">
              <span class="ruta-badge">Ruta</span>
              <div class="codigo-wrapper">
                <span class="codigo-ruta">{{ ruta.codigo }}</span>
              </div>
            </div>
            <div class="card-body">
              <h3 class="nombre-ruta">{{ ruta.nombre }}</h3>
              <div class="linea-ruta"></div>
            </div>
            <div class="card-footer">
              <span class="ver-recorrido">
                Ver recorrido
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </router-link>
        </div>

        <!-- Estado Vacío -->
        <div v-else class="estado-vacio">
          <div class="icono-vacio">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
            </svg>
          </div>
          <p>No se encontraron rutas que coincidan con tu búsqueda.</p>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.pagina-rutas {
  font-family: 'Outfit', sans-serif;
  background: #f8f9fa;
  color: #1a1a1a;
  min-height: 100vh;
}

.contenedor {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* --- Hero Section --- */
.hero-rutas {
  height: 50vh;
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.3) 0%,
    rgba(0,0,0,0.6) 50%,
    rgba(0,0,0,0.85) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding-top: 4rem;
}

.tag-hero {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.6rem 1.8rem;
  border-radius: 100px;
  backdrop-filter: blur(8px);
}

.hero-rutas h1 {
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 800;
  margin: 0;
  line-height: 1;
  color: #ffffff;
  text-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.linea-decorativa {
  width: 60px;
  height: 6px;
  background: #4cc253;
  margin: 2rem auto;
  border-radius: 3px;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
}

/* --- Contenido --- */
.contenido-rutas {
  padding: 4rem 0 8rem 0;
}

/* Buscador */
.buscador-wrapper {
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
}

.input-container {
  position: relative;
  width: 100%;
  max-width: 600px;
}

.icono-busqueda {
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
}

.input-busqueda {
  width: 100%;
  padding: 1.2rem 1.5rem 1.2rem 3.5rem;
  border-radius: 50px;
  border: 1px solid #e5e7eb;
  font-size: 1.1rem;
  font-family: 'Outfit', sans-serif;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  outline: none;
}

.input-busqueda:focus {
  border-color: #4cc253;
  box-shadow: 0 10px 30px rgba(76, 194, 83, 0.15);
}

/* Grid */
.grid-rutas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.card-ruta {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #e8e8e8;
  text-decoration: none;
  cursor: pointer;
}

.card-ruta:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(76, 194, 83, 0.18);
  border-color: #4cc253;
}

.card-header {
  padding: 1.75rem 1.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.ruta-badge {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  color: #2e7d32;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 0.4rem 0.9rem;
  border-radius: 50px;
  order: 2;
}

.codigo-wrapper {
  order: 1;
}

.codigo-ruta {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  line-height: 1;
  transition: color 0.3s ease;
}

.card-ruta:hover .codigo-ruta {
  color: #4cc253;
}

.card-body {
  padding: 0.5rem 1.75rem 1.5rem;
  flex: 1;
}

.nombre-ruta {
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.5;
  color: #555;
  margin: 0 0 1rem 0;
  transition: color 0.3s ease;
}

.card-ruta:hover .nombre-ruta {
  color: #333;
}

.linea-ruta {
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #4cc253 0%, #81c784 100%);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.card-ruta:hover .linea-ruta {
  width: 80px;
}

.card-footer {
  padding: 1.25rem 1.75rem;
  background: linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%);
  border-top: 1px solid #eee;
  transition: all 0.3s ease;
}

.card-ruta:hover .card-footer {
  background: linear-gradient(135deg, #4cc253 0%, #43a047 100%);
  border-top-color: transparent;
}

.ver-recorrido {
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.3s ease;
}

.ver-recorrido svg {
  transition: transform 0.3s ease;
}

.card-ruta:hover .ver-recorrido {
  color: white;
}

.card-ruta:hover .ver-recorrido svg {
  transform: translateX(4px);
}

/* Estado Vacío */
.estado-vacio {
  text-align: center;
  padding: 6rem 2rem;
  color: #9ca3af;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.icono-vacio {
  color: #e5e7eb;
}

@media (max-width: 768px) {
  .hero-rutas h1 {
    font-size: 2.5rem;
  }
  
  .grid-rutas {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card-ruta:hover {
    transform: translateY(-4px);
  }
}
</style>
