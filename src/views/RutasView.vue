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
          <div v-for="(ruta, index) in rutasFiltradas" :key="index" class="card-ruta">
            <div class="ruta-badge">Ruta</div>
            <div class="card-content">
              <div class="codigo-wrapper">
                <span class="codigo-ruta">{{ ruta.codigo }}</span>
              </div>
              <div class="info-ruta">
                <h3 class="nombre-ruta">{{ ruta.nombre }}</h3>
                <div class="linea-ruta"></div>
              </div>
            </div>
            <div class="card-action">
              <router-link :to="`/rutas/${ruta.slug}`" class="ver-mapa">
                Ver recorrido
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </div>
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
}

.card-ruta {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.04);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #f0f0f0;
}

.card-ruta:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.1);
  border-color: rgba(76, 194, 83, 0.3);
}

.ruta-badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #f0fdf4;
  color: #4cc253;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
}

.card-content {
  padding: 2.5rem 2rem 1.5rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.codigo-wrapper {
  margin-bottom: 1.5rem;
}

.codigo-ruta {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -0.03em;
  line-height: 1;
  background: linear-gradient(135deg, #1a1a1a 0%, #444 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info-ruta {
  width: 100%;
}

.nombre-ruta {
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.5;
  color: #555;
  margin: 0 0 1rem 0;
}

.linea-ruta {
  width: 40px;
  height: 4px;
  background: #4cc253;
  margin: 0 auto;
  border-radius: 2px;
  opacity: 0.5;
}

.card-action {
  padding: 1.5rem;
  background: #f9fafb;
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;
  transition: background 0.3s ease;
}

.card-ruta:hover .card-action {
  background: #4cc253;
}

.ver-mapa {
  font-size: 0.9rem;
  font-weight: 700;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  text-decoration: none; /* Eliminar subrayado */
}

.card-ruta:hover .ver-mapa {
  color: white;
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
    gap: 2rem;
  }
}
</style>
