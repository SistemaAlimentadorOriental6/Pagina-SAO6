<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBgImage from '../assets/images/buselectricosao6.jpg'
import { useHead } from '@vueuse/head'

// Meta tags optimizados para SEO
useHead({
  title: 'Bus Eléctrico SAO6 Medellín | Primer Bus 100% Eléctrico del Oriente | Movilidad Sostenible',
  meta: [
    { 
      name: 'description', 
      content: 'Conoce el primer bus 100% eléctrico del Sistema Alimentador Oriental SAO6 en Medellín. Tecnología de punta, regeneración de energía y alta eficiencia para una movilidad sostenible.' 
    },
    { 
      name: 'keywords', 
      content: 'bus eléctrico Medellín, SAO6, movilidad sostenible, transporte público eléctrico, buses eléctricos Colombia, sistema alimentador oriental, buses eléctricos Medellín 2024, transporte sostenible' 
    },
    { name: 'author', content: 'SAO6 - Sistema Alimentador Oriental' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    
    // Open Graph para redes sociales
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Bus Eléctrico SAO6 Medellín - Primer Bus 100% Eléctrico del Oriente' },
    { property: 'og:description', content: 'Conoce el primer bus 100% eléctrico del Sistema Alimentador Oriental SAO6. Tecnología de punta para una movilidad sostenible en Medellín.' },
    { property: 'og:image', content: 'https://sao6.com.co/images/buselectricosao6.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Bus eléctrico SAO6 circulando en Medellín' },
    { property: 'og:url', content: 'https://sao6.com.co/noticias/bus-electrico-sao6-medellin-movilidad-sostenible' },
    { property: 'og:site_name', content: 'SAO6 - Sistema Alimentador Oriental' },
    { property: 'article:published_time', content: '2024-11-27T08:00:00-05:00' },
    { property: 'article:modified_time', content: '2024-11-27T08:00:00-05:00' },
    { property: 'article:author', content: 'Noticias Telemedellín' },
    { property: 'article:section', content: 'Movilidad Sostenible' },
    { property: 'article:tag', content: 'Bus Eléctrico, SAO6, Medellín, Movilidad Sostenible' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Bus Eléctrico SAO6 Medellín - Movilidad Sostenible' },
    { name: 'twitter:description', content: 'Primer bus 100% eléctrico del Sistema Alimentador Oriental en Medellín. Tecnología regenerativa para transporte sostenible.' },
    { name: 'twitter:image', content: 'https://sao6.com.co/images/buselectricosao6.jpg' },
    { name: 'twitter:image:alt', content: 'Bus eléctrico SAO6 en Medellín' },
  ],
  link: [
    { rel: 'canonical', href: 'https://sao6.com.co/noticias/bus-electrico-sao6-medellin-movilidad-sostenible' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Sistema alimentador de buses del oriente de Medellín presentó su primer vehículo eléctrico",
        "alternativeHeadline": "SAO6 presenta primer bus 100% eléctrico para movilidad sostenible en Medellín",
        "description": "El Sistema Alimentador Oriental presenta su primer bus eléctrico con tecnología regenerativa, diseñado específicamente para la topografía de Medellín y la zona nororiental de la ciudad.",
        "image": {
          "@type": "ImageObject",
          "url": "https://sao6.com.co/images/buselectricosao6.jpg",
          "width": 1200,
          "height": 630,
          "caption": "Bus eléctrico SAO6 en servicio en Medellín"
        },
        "datePublished": "2024-11-27T08:00:00-05:00",
        "dateModified": "2024-11-27T08:00:00-05:00",
        "author": {
          "@type": "Organization",
          "name": "Noticias Telemedellín",
          "url": "https://telemedellin.tv"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SAO6 - Sistema Alimentador Oriental",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sao6.com.co/LOGOSAO6.svg",
            "width": 250,
            "height": 60
          },
          "url": "https://sao6.com.co"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sao6.com.co/noticias/bus-electrico-sao6-medellin-movilidad-sostenible"
        },
        "articleSection": "Movilidad Sostenible",
        "keywords": ["bus eléctrico", "SAO6", "Medellín", "movilidad sostenible", "transporte público", "buses eléctricos Colombia"],
        "articleBody": "El sistema alimentador oriental, que transporta a los pasajeros a la zona nororiental de la ciudad, presentó la estrategia de movilidad eléctrica con el primer bus de este tipo, equipado con alta tecnología. Este vehículo fue diseñado para cumplir con las características topográficas de Medellín, cuenta con un sistema de regeneración a través del frenado y con las baterías más eficientes del mercado para vehículos con una sola carga al día.",
        "video": {
          "@type": "VideoObject",
          "name": "Presentación del Bus Eléctrico SAO6",
          "description": "Reportaje de Noticias Telemedellín sobre el primer bus eléctrico del Sistema Alimentador Oriental",
          "thumbnailUrl": "https://img.youtube.com/vi/AEjTazfUsuc/maxresdefault.jpg",
          "uploadDate": "2024-11-27",
          "embedUrl": "https://www.youtube.com/embed/AEjTazfUsuc"
        },
        "about": [
          {
            "@type": "Thing",
            "name": "Bus eléctrico"
          },
          {
            "@type": "Place",
            "name": "Medellín",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Medellín",
              "addressRegion": "Antioquia",
              "addressCountry": "CO"
            }
          }
        ],
        "mentions": [
          {
            "@type": "Organization",
            "name": "SAO6",
            "sameAs": "https://sao6.com.co"
          }
        ]
      })
    }
  ]
})

gsap.registerPlugin(ScrollTrigger)

const tituloRef = ref<HTMLElement | null>(null)
const contenidoRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Animación de entrada
  const tl = gsap.timeline()
  
  tl.from('.hero-detalle-bg', {
    scale: 1.1,
    duration: 1.5,
    ease: 'power2.out'
  })
  .from(tituloRef.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=1')
  .from('.meta-info', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  .from(contenidoRef.value, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
})
</script>

<template>
  <div class="pagina-detalle-noticia">
    
    <!-- Hero Article -->
    <header class="hero-detalle">
      <div class="hero-detalle-bg-wrapper">
        <img :src="heroBgImage" alt="Bus Eléctrico SAO6" class="hero-detalle-bg" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="contenedor-estrecho hero-content">
        <div class="categoria-tag">Noticias</div>
        <h1 ref="tituloRef">Sistema alimentador de buses del oriente de Medellín presentó su primer vehículo eléctrico</h1>
        
        <div class="meta-info">
          <div class="autor">
            <span class="label">Por:</span>
            <span class="nombre">Noticias Telemedellín</span>
          </div>
          <div class="separador"></div>
          <div class="fecha">27 Nov 2025</div>
        </div>
      </div>
    </header>

    <!-- Contenido del Artículo -->
    <article class="contenido-articulo" ref="contenidoRef">
      <div class="contenedor-estrecho">
        
        <p class="lead">
          El sistema alimentador oriental, qué transporta a los pasajeros a la zona nororiental de la ciudad, presentó la estrategia de movilidad eléctrica con el primer bus de este tipo, equipado con alta tecnología que ya circula en la ciudad.
        </p>

        <div class="cuerpo-texto">
          <p>
            Medellín le sigue apostando a la movilidad sostenible. Este es el primer bus alimentador eléctrico que transporta pasajeros hacia la zona oriental y nororiental de la ciudad, este vehículo fue diseñado para cumplir con las características topográficas de Medellín.
          </p>
          
          <p>
            Ha pasado un mes desde que inició la prueba en servicio comercial en la ruta 4. Cuenta con un sistema de regeneración a través del frenado y con las baterías más eficientes del mercado para vehículos con una sola carga al día.
          </p>

          <!-- Video Section -->
          <div class="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/AEjTazfUsuc" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
            <span class="video-caption">Presentación del nuevo bus eléctrico en Noticias Telemedellín</span>
          </div>

          <p>
            El propósito es renovar de manera paulatina la flota que comprende 259 buses que transportan los usuarios a estas zonas de la ciudad.
          </p>
        </div>

        <!-- Fuente Original -->
        <div class="fuente-referencia">
          <p>Fuente original:</p>
          <a href="https://telemedellin.tv/sistema-alimentador-buses-electricos-renovacion/" target="_blank" rel="noopener noreferrer" class="enlace-fuente">
            Telemedellín - Sistema alimentador buses eléctricos renovación
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        <!-- Navegación Inferior -->
        <div class="navegacion-inferior">
          <router-link to="/noticias" class="btn-volver">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Volver a Noticias
          </router-link>
        </div>

      </div>
    </article>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.pagina-detalle-noticia {
  font-family: 'Outfit', sans-serif;
  background: #ffffff;
  color: #1a1a1a;
}

.contenedor-estrecho {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* --- Hero --- */
.hero-detalle {
  height: 70vh;
  min-height: 500px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-bottom: 6rem;
  color: white;
  overflow: hidden;
}

.hero-detalle-bg-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-detalle-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  width: 100%;
}

.categoria-tag {
  display: inline-block;
  background: #4cc253;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.hero-detalle h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 2rem 0;
  color: #ffffff; /* Color blanco explícito */
  text-shadow: 0 4px 20px rgba(0,0,0,0.5); /* Sombra más fuerte */
}

.meta-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
}

.autor {
  display: flex;
  gap: 0.5rem;
}

.autor .label {
  font-weight: 300;
  opacity: 0.8;
}

.autor .nombre {
  font-weight: 600;
  color: #4cc253;
}

.separador {
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
}

/* --- Contenido --- */
.contenido-articulo {
  padding: 5rem 0 8rem 0;
}

.lead {
  font-size: 1.5rem;
  line-height: 1.6;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 3rem;
  border-left: 4px solid #4cc253;
  padding-left: 2rem;
}

.cuerpo-texto p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 2rem;
}

/* Video */
.video-wrapper {
  margin: 3rem 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.video-wrapper iframe {
  width: 100%;
  aspect-ratio: 16/9;
  display: block;
}

.video-caption {
  display: block;
  background: #f5f5f5;
  padding: 1rem;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  font-style: italic;
}

/* Fuente */
.fuente-referencia {
  margin-top: 4rem;
  padding: 2rem;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #eee;
}

.fuente-referencia p {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.enlace-fuente {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #4cc253;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s ease;
}

.enlace-fuente:hover {
  color: #3da542;
  text-decoration: underline;
}

/* Navegación */
.navegacion-inferior {
  margin-top: 4rem;
  border-top: 1px solid #eee;
  padding-top: 2rem;
}

.btn-volver {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: #666;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-volver:hover {
  color: #4cc253;
  transform: translateX(-5px);
}

@media (max-width: 768px) {
  .hero-detalle h1 {
    font-size: 2rem;
  }
  
  .meta-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .separador {
    display: none;
  }
  
  .lead {
    font-size: 1.2rem;
    padding-left: 1.5rem;
  }
}
</style>
