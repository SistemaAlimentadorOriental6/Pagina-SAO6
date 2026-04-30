<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBgImage from '../assets/images/boletin-05.jpeg'
import { useHead } from '@vueuse/head'

// Meta tags optimizados para SEO
useHead({
  title: 'Boletín N°05 - Caída de usuarios en nuestras unidades | SAO6',
  meta: [
    { 
      name: 'description', 
      content: 'Boletín N°05: Caída de usuarios en nuestras unidades. Llamado al cuidado de la integridad de nuestros usuarios y recomendaciones del P.E.S.V. para una conducción segura.' 
    },
    { 
      name: 'keywords', 
      content: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, caida de usuarios, usuarios, P.E.S.V., medellin, conduccion segura' 
    },
    { name: 'author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    
    // Open Graph para redes sociales
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Boletín N°05 - Caída de usuarios en nuestras unidades | SAO6' },
    { property: 'og:description', content: 'Llamado al cuidado de la integridad de nuestros usuarios. Recomendaciones para fortalecer la conducción segura.' },
    { property: 'og:image', content: 'https://sao6.com.co/images/boletin-05.jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Caída de usuarios en nuestras unidades' },
    { property: 'og:url', content: 'https://sao6.com.co/noticias/boletin-05-caida-usuarios' },
    { property: 'og:site_name', content: 'SAO6 - Sistema Alimentador Oriental' },
    { property: 'article:published_time', content: '2026-04-29T08:00:00-05:00' },
    { property: 'article:modified_time', content: '2026-04-29T08:00:00-05:00' },
    { property: 'article:author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { property: 'article:section', content: 'Seguridad Vial' },
    { property: 'article:tag', content: 'Boletín, Seguridad Vial, Prevención, Caída de usuarios' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Boletín N°05 - Caída de usuarios en nuestras unidades | SAO6' },
    { name: 'twitter:description', content: 'Llamado al cuidado de la integridad de nuestros usuarios.' },
    { name: 'twitter:image', content: 'https://sao6.com.co/images/boletin-05.jpeg' },
    { name: 'twitter:image:alt', content: 'Caída de usuarios en nuestras unidades' },
  ],
  link: [
    { rel: 'canonical', href: 'https://sao6.com.co/noticias/boletin-05-caida-usuarios' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Boletín N°05: Caída de usuarios en nuestras unidades",
        "alternativeHeadline": "Llamado al cuidado de la integridad de nuestros usuarios",
        "description": "Boletín N°05: Caída de usuarios en nuestras unidades. Recomendaciones del P.E.S.V. para una conducción segura.",
        "image": {
          "@type": "ImageObject",
          "url": "https://sao6.com.co/images/boletin-05.jpeg",
          "width": 1200,
          "height": 630,
          "caption": "Caída de usuarios en nuestras unidades"
        },
        "datePublished": "2026-04-29T08:00:00-05:00",
        "dateModified": "2026-04-29T08:00:00-05:00",
        "author": {
          "@type": "Organization",
          "name": "Plan Estratégico de Seguridad Vial - P.E.S.V.",
          "url": "https://sao6.com.co"
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
          "@id": "https://sao6.com.co/noticias/boletin-05-caida-usuarios"
        },
        "articleSection": "Seguridad Vial",
        "keywords": ["boletín", "SAO6", "seguridad vial", "prevención", "caída de usuarios"],
        "articleBody": "Las difíciles pendientes de las vías por donde transita nuestra operación SAO6, las condiciones del tráfico y la capacidad de arranque de nuestras unidades, especialmente los vehículos RUNNER, exigen de nuestros operadores(as) la máxima precaución durante las paradas e inicios de marcha, de manera que podamos garantizar el cuidado y la integridad de nuestros usuarios. Durante el año 2025 se presentaron 14 eventos relacionados con caída de usuarios al interior de las unidades, situaciones que nos convocan a la reflexión, el aprendizaje y el fortalecimiento de una conducción cada vez más segura.",
        "video": {
          "@type": "VideoObject",
          "name": "Caída de usuarios en nuestras unidades",
          "description": "Llamado al cuidado de la integridad de nuestros usuarios",
          "thumbnailUrl": "https://img.youtube.com/vi/JvT8gAdGMHE/maxresdefault.jpg",
          "uploadDate": "2026-04-29",
          "embedUrl": "https://www.youtube.com/embed/JvT8gAdGMHE"
        }
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
        <img :src="heroBgImage" alt="Caída de usuarios en nuestras unidades" class="hero-detalle-bg" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="contenedor-estrecho hero-content">
        <div class="categoria-tag">Boletines</div>
        <h1 ref="tituloRef">Boletín N°05: Caída de usuarios en nuestras unidades</h1>
        
        <div class="meta-info">
          <div class="autor">
            <span class="label">Por:</span>
            <span class="nombre">Plan Estratégico de Seguridad Vial - P.E.S.V.</span>
          </div>
          <div class="separador"></div>
          <div class="fecha">29 Abr 2026</div>
        </div>
      </div>
    </header>

    <!-- Contenido del Artículo -->
    <article class="contenido-articulo" ref="contenidoRef">
      <div class="contenedor-estrecho">
        
        <p class="lead">
          Llamado al cuidado de la integridad de nuestros usuarios
        </p>

        <div class="cuerpo-texto">
          <p class="espaciado-normal">
            Las difíciles pendientes de las vías por donde transita nuestra operación SAO6, las condiciones del tráfico y la capacidad de arranque de nuestras unidades, especialmente los vehículos RUNNER, exigen de nuestros operadores(as) la máxima precaución durante las paradas e inicios de marcha, de manera que podamos garantizar el cuidado y la integridad de nuestros usuarios.
          </p>
          
          <p class="espaciado-normal">
            Durante el año 2025 se presentaron 14 eventos relacionados con caída de usuarios al interior de las unidades, situaciones que nos convocan a la reflexión, el aprendizaje y el fortalecimiento de una conducción cada vez más segura.
          </p>

          <p class="espaciado-normal">
            El llamado hoy es a aumentar las medidas de precaución durante las paradas, arranques y maniobras operativas.
          </p>
          
          <p class="espaciado-normal">
            Desde nuestro Plan Estratégico de Seguridad Vial (P.E.S.V.), compartimos las siguientes recomendaciones para fortalecer la conducción segura y reducir este tipo de riesgos que comprometen la integridad de nuestros usuarios:
          </p>
          
          <ul class="lista-recomendaciones">
            <li>Evitar aceleraciones y frenadas bruscas.</li>
            <li>Evitar excesos de velocidad.</li>
            <li>Aproximarse correctamente al andén para facilitar el ascenso y descenso seguro de los usuarios.</li>
            <li>Antes de iniciar la marcha, verificar que el usuario haya descendido completamente.</li>
            <li>Confirmar siempre el cierre de puertas antes de continuar la marcha.</li>
            <li>Al momento del ascenso, verificar que el usuario se encuentre sentado o correctamente sujetado antes de arrancar.</li>
            <li>Convertir la conducción progresiva en nuestra principal aliada para una operación segura.</li>
          </ul>

          <p class="resaltado">
            <strong>La seguridad y el cuidado de nuestros usuarios deben ser siempre el centro de cada decisión al volante.</strong>
          </p>

          <!-- Video Section -->
          <div class="video-wrapper shorts-wrapper">
            <iframe 
              src="https://www.youtube-nocookie.com/embed/JvT8gAdGMHE" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
            <span class="video-caption">Caída de usuarios en nuestras unidades - Llamado al cuidado de la integridad</span>
          </div>
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
  color: #ffffff;
  text-shadow: 0 4px 20px rgba(0,0,0,0.5);
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

.lista-recomendaciones {
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
}

.lista-recomendaciones li {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 0.8rem;
  padding-left: 2rem;
  position: relative;
}

.lista-recomendaciones li::before {
  content: "•";
  color: #4cc253;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.5rem;
}

.resaltado {
  background: #f0fdf4;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #4cc253;
  margin: 3rem 0;
}

/* Video */
.video-wrapper {
  margin: 3rem 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  background-color: #000;
}

.video-wrapper iframe {
  width: 100%;
  aspect-ratio: 16/9;
  display: block;
}

/* Ajuste específico para YouTube Shorts si se requiere proporción vertical */
.shorts-wrapper iframe {
  max-width: 400px;
  aspect-ratio: 9/16;
  margin: 0 auto;
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
