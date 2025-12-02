<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { useHead } from '@vueuse/head'
import heroBgImage from '../assets/images/pasajeros-sao6.jpg'
import { getRutaPorSlug } from '../data/rutas'

const route = useRoute()
const slugRuta = route.params.slug as string

// Buscar la ruta por slug
const rutaActual = computed(() => {
  return getRutaPorSlug(slugRuta)
})

// Información de la ruta (usa datos de la BD o valores por defecto)
const infoRuta = computed(() => {
  const ruta = rutaActual.value
  
  if (!ruta) {
    // Si no se encuentra la ruta, devolver info por defecto
    return {
      codigo: 'N/A',
      nombre: 'Ruta no encontrada',
      slug: slugRuta,
      descripcion: 'La ruta que buscas no está disponible.',
      videoUrl: 'https://www.youtube-nocookie.com/embed/k7iYWpaGGRE?rel=0&modestbranding=1',
      mapaUrl: 'https://www.google.com/maps/d/embed?mid=1TFSHz03nCXT8wlqs702rJyP0OPq6TB4&ehbc=2E312F'
    }
  }
  
  return {
    codigo: ruta.codigo,
    nombre: ruta.nombre,
    slug: ruta.slug,
    descripcion: ruta.descripcion || `Ruta ${ruta.codigo} que conecta ${ruta.nombre} en el oriente de Medellín.`,
    videoUrl: ruta.videoUrl || 'https://www.youtube-nocookie.com/embed/k7iYWpaGGRE?rel=0&modestbranding=1',
    mapaUrl: ruta.mapaUrl || 'https://www.google.com/maps/d/embed?mid=1TFSHz03nCXT8wlqs702rJyP0OPq6TB4&ehbc=2E312F',
    keywords: ruta.keywords
  }
})

// Meta tags dinámicos para SEO
useHead({
  title: computed(() => `Ruta ${infoRuta.value.codigo} ${infoRuta.value.nombre} | SAO6`),
  meta: [
    {
      name: 'description',
      content: computed(() => infoRuta.value.descripcion)
    },
    {
      name: 'keywords',
      content: computed(() => infoRuta.value.keywords ? infoRuta.value.keywords.join(', ') : `Ruta ${infoRuta.value.codigo}, SAO6, Medellín, Transporte, Alimentador, Metro`)
    },
    {
      property: 'og:title',
      content: computed(() => `Ruta ${infoRuta.value.codigo} - ${infoRuta.value.nombre} | SAO6`)
    },
    {
      property: 'og:description',
      content: computed(() => infoRuta.value.descripcion)
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: computed(() => `https://www.sao6.com/rutas/${infoRuta.value.slug}`)
    },
    {
      property: 'og:image',
      content: 'https://www.sao6.com/assets/images/pasajeros-sao6.jpg' // Imagen por defecto optimizada para compartir
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BusTrip",
        "name": `Ruta ${infoRuta.value.codigo}`,
        "description": infoRuta.value.descripcion,
        "provider": {
          "@type": "Organization",
          "name": "SAO6",
          "url": "https://www.sao6.com",
          "logo": "https://www.sao6.com/assets/logo.png"
        },
        "departureStation": {
          "@type": "BusStation",
          "name": infoRuta.value.nombre.split(' - ')[0] || 'Inicio de Ruta'
        },
        "arrivalStation": {
          "@type": "BusStation",
          "name": infoRuta.value.nombre.split(' - ').pop() || 'Fin de Ruta'
        },
        "areaServed": {
          "@type": "City",
          "name": "Medellín"
        },
        "url": `https://www.sao6.com/rutas/${infoRuta.value.slug}`
      }))
    },
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `Ruta ${infoRuta.value.codigo}`,
            "item": `https://www.sao6.com/rutas/${infoRuta.value.slug}`
          }
        ]
      }))
    }
  ]
})

const pestanaActiva = ref<'mapa' | 'video'>('mapa')

onMounted(() => {
  gsap.from('.hero-detalle-content', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2
  })

  gsap.from('.contenido-visual', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.5
  })
})
</script>

<template>
  <div class="pagina-detalle-ruta">
    
    <!-- Hero Simple -->
    <header class="hero-detalle" role="banner">
      <div class="hero-bg-wrapper">
        <img 
          :src="heroBgImage" 
          alt="Pasajeros utilizando el servicio de transporte SAO6 en el oriente de Medellín" 
          class="hero-bg" 
          width="1920" 
          height="800"
        />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="contenedor hero-detalle-content">
        <router-link to="/rutas" class="btn-volver" aria-label="Volver a la página de rutas">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Volver a Rutas
        </router-link>
        
        <div class="info-header">
          <span class="badge-ruta">{{ infoRuta.codigo }}</span>
          <h1>Detalle de Recorrido</h1>
        </div>
      </div>
    </header>

    <!-- Contenido Principal -->
    <main class="contenido-principal">
      <div class="contenedor">
        
        <!-- Pestañas de Navegación -->
        <nav class="tabs-navegacion" role="tablist" aria-label="Opciones de visualización">
          <button 
            @click="pestanaActiva = 'mapa'" 
            :class="['tab-btn', { activo: pestanaActiva === 'mapa' }]"
            role="tab"
            :aria-selected="pestanaActiva === 'mapa'"
            aria-controls="panel-mapa"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Mapa del Recorrido
          </button>
          <button 
            @click="pestanaActiva = 'video'" 
            :class="['tab-btn', { activo: pestanaActiva === 'video' }]"
            role="tab"
            :aria-selected="pestanaActiva === 'video'"
            aria-controls="panel-video"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Video del Trayecto
          </button>
        </nav>

        <!-- Área de Visualización -->
        <div class="contenido-visual">
          
          <!-- Vista Mapa -->
          <div 
            v-if="pestanaActiva === 'mapa'" 
            class="visual-container mapa"
            role="tabpanel"
            id="panel-mapa"
            aria-labelledby="tab-mapa"
          >
            <iframe 
              :src="infoRuta.mapaUrl" 
              width="100%" 
              height="600" 
              style="border:0;" 
              allowfullscreen 
              loading="lazy"
              title="Mapa interactivo del recorrido de la ruta"
            ></iframe>
          </div>

          <!-- Vista Video -->
          <div 
            v-if="pestanaActiva === 'video'" 
            class="visual-container video"
            role="tabpanel"
            id="panel-video"
            aria-labelledby="tab-video"
          >
            <iframe 
              :src="infoRuta.videoUrl" 
              title="Video del recorrido de la ruta SAO6" 
              width="100%"
              height="600"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>

        </div>

        <article class="info-adicional">
          <h2>Información del Servicio</h2>
          <p>{{ infoRuta.descripcion }}</p>
        </article>

      </div>
    </main>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.pagina-detalle-ruta {
  font-family: 'Outfit', sans-serif;
  background: #f8f9fa;
  color: #1a1a1a;
  min-height: 100vh;
}

.contenedor {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* --- Hero --- */
.hero-detalle {
  height: 40vh;
  min-height: 300px;
  position: relative;
  display: flex;
  align-items: center;
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
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
}

.hero-detalle-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.btn-volver {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: color 0.2s ease;
}

.btn-volver:hover {
  color: white;
}

.info-header h1 {
  color: white;
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  line-height: 1;
}

.badge-ruta {
  display: inline-block;
  background: #4cc253;
  color: white;
  font-weight: 700;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

/* --- Contenido --- */
.contenido-principal {
  padding: 3rem 0 6rem 0;
  margin-top: -4rem; /* Superponer al hero */
  position: relative;
  z-index: 3;
}

.tabs-navegacion {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tab-btn {
  background: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.tab-btn.activo {
  background: #4cc253;
  color: white;
  box-shadow: 0 10px 20px rgba(76, 194, 83, 0.3);
  transform: translateY(-2px);
}

.contenido-visual {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  margin-bottom: 3rem;
  height: 600px; /* Altura fija para el visor */
}

.visual-container {
  width: 100%;
  height: 100%;
}

.visual-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.info-adicional {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.info-adicional h2 {
  margin: 0 0 1rem 0;
  color: #1a1a1a;
  font-size: 1.5rem;
}

.info-adicional p {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .contenedor {
    padding: 0 1.5rem;
  }

  .hero-detalle {
    min-height: 280px;
  }

  .info-header h1 {
    font-size: 2rem;
  }

  .badge-ruta {
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
  }

  .contenido-principal {
    padding: 2rem 0 4rem 0;
    margin-top: -3rem;
  }
  
  .tabs-navegacion {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .tab-btn {
    width: 100%;
    justify-content: center;
    padding: 0.875rem 1.5rem;
  }
  
  .contenido-visual {
    height: 400px;
  }

  .info-adicional {
    padding: 1.5rem;
  }

  .info-adicional h2 {
    font-size: 1.3rem;
  }
}

@media (max-width: 640px) {
  .hero-detalle {
    min-height: 250px;
  }

  .info-header h1 {
    font-size: 1.75rem;
  }

  .btn-volver {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .contenido-principal {
    margin-top: -2.5rem;
  }

  .tab-btn {
    font-size: 0.95rem;
    padding: 0.75rem 1.25rem;
  }

  .contenido-visual {
    height: 350px;
    border-radius: 16px;
  }

  .info-adicional h2 {
    font-size: 1.2rem;
  }

  .info-adicional p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .contenedor {
    padding: 0 1rem;
  }

  .hero-detalle {
    min-height: 220px;
  }

  .info-header h1 {
    font-size: 1.5rem;
  }

  .badge-ruta {
    font-size: 0.9rem;
    padding: 0.25rem 0.65rem;
  }

  .btn-volver {
    font-size: 0.85rem;
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }

  .btn-volver svg {
    width: 16px;
    height: 16px;
  }

  .contenido-principal {
    padding: 1.5rem 0 3rem 0;
    margin-top: -2rem;
  }

  .tabs-navegacion {
    gap: 0.4rem;
  }

  .tab-btn {
    font-size: 0.9rem;
    padding: 0.7rem 1rem;
    border-radius: 10px;
  }

  .tab-btn svg {
    width: 18px;
    height: 18px;
  }

  .contenido-visual {
    height: 300px;
    border-radius: 14px;
    margin-bottom: 2rem;
  }

  .info-adicional {
    padding: 1.25rem;
    border-radius: 16px;
  }

  .info-adicional h2 {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }

  .info-adicional p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
}
</style>
