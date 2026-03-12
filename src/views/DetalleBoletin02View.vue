<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBgImage from '../assets/images/boletin-02.jpg'
import { useHead } from '@vueuse/head'

// Meta tags optimizados para SEO
useHead({
  title: 'Boletín N°02 - Prevención de Accidentalidad Vial | SAO6',
  meta: [
    { 
      name: 'description', 
      content: 'Boletín N°02: Curva peligrosa con riesgo de alta accidentalidad - sector Los Pomos. Falta de peralte en la curva.' 
    },
    { 
      name: 'keywords', 
      content: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, curva peligrosa, los pomos, peralte, medellin' 
    },
    { name: 'author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    
    // Open Graph para redes sociales
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Boletín N°02 - Prevención de Accidentalidad Vial | SAO6' },
    { property: 'og:description', content: 'Curva peligrosa con riesgo de alta accidentalidad - sector Los Pomos. Falta de peralte en la curva.' },
    { property: 'og:image', content: 'https://sao6.com.co/images/boletin-02.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Curva peligrosa en el sector Los Pomos' },
    { property: 'og:url', content: 'https://sao6.com.co/noticias/boletin-02-curva-peligrosa-los-pomos' },
    { property: 'og:site_name', content: 'SAO6 - Sistema Alimentador Oriental' },
    { property: 'article:published_time', content: '2026-02-21T08:00:00-05:00' },
    { property: 'article:modified_time', content: '2026-02-21T08:00:00-05:00' },
    { property: 'article:author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { property: 'article:section', content: 'Seguridad Vial' },
    { property: 'article:tag', content: 'Boletín, Seguridad Vial, Prevención' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Boletín N°02 - Prevención de Accidentalidad Vial | SAO6' },
    { name: 'twitter:description', content: 'Curva peligrosa con riesgo de alta accidentalidad - sector Los Pomos. Falta de peralte en la curva.' },
    { name: 'twitter:image', content: 'https://sao6.com.co/images/boletin-02.jpg' },
    { name: 'twitter:image:alt', content: 'Curva peligrosa en el sector Los Pomos' },
  ],
  link: [
    { rel: 'canonical', href: 'https://sao6.com.co/noticias/boletin-02-curva-peligrosa-los-pomos' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Boletín N°02: Curva peligrosa con riesgo de alta accidentalidad - sector Los Pomos",
        "alternativeHeadline": "Boletín N°02 - Prevención de Accidentalidad Vial",
        "description": "Curva peligrosa con riesgo de alta accidentalidad - sector Los Pomos. Falta de peralte en la curva.",
        "image": {
          "@type": "ImageObject",
          "url": "https://sao6.com.co/images/boletin-02.jpg",
          "width": 1200,
          "height": 630,
          "caption": "Curva peligrosa en el sector Los Pomos"
        },
        "datePublished": "2026-02-21T08:00:00-05:00",
        "dateModified": "2026-02-21T08:00:00-05:00",
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
          "@id": "https://sao6.com.co/noticias/boletin-02-curva-peligrosa-los-pomos"
        },
        "articleSection": "Seguridad Vial",
        "keywords": ["boletín", "SAO6", "seguridad vial", "prevención", "curva peligrosa", "los pomos"],
        "articleBody": "En la Cra. 21, vía hacia la cabecera de las rutas C6-004 y C6-004A, a la altura del conjunto residencial Eterna Primavera, sector conocido como Los Pomos, se identifica un punto de alta accidentalidad...",
        "video": {
          "@type": "VideoObject",
          "name": "Curva peligrosa en el sector Los Pomos",
          "description": "Video mostrando el sector Los Pomos con falta de peralte",
          "thumbnailUrl": "https://img.youtube.com/vi/nUa0bDvxCvQ/maxresdefault.jpg",
          "uploadDate": "2026-02-21",
          "embedUrl": "https://www.youtube.com/embed/nUa0bDvxCvQ"
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
        <img :src="heroBgImage" alt="Bus Eléctrico SAO6" class="hero-detalle-bg" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="contenedor-estrecho hero-content">
        <div class="categoria-tag">Boletines</div>
        <h1 ref="tituloRef">Boletín N°02: Curva peligrosa con riesgo de alta accidentalidad - sector Los Pomos</h1>
        
        <div class="meta-info">
          <div class="autor">
            <span class="label">Por:</span>
            <span class="nombre">Plan Estratégico de Seguridad Vial - P.E.S.V.</span>
          </div>
          <div class="separador"></div>
          <div class="fecha">21 Feb 2026</div>
        </div>
      </div>
    </header>

    <!-- Contenido del Artículo -->
    <article class="contenido-articulo" ref="contenidoRef">
      <div class="contenedor-estrecho">
        
        <p class="lead">
          Curva peligrosa con riesgo de alta accidentalidad - sector Los Pomos.<br>
          Falta de peralte en la curva.
        </p>

        <div class="cuerpo-texto">
          <p class="espaciado-normal">
            En la Cra. 21, vía hacia la cabecera de las rutas C6-004 y C6-004A, a la altura del conjunto residencial Eterna Primavera, sector conocido como Los Pomos, se identifica un punto de alta accidentalidad. En este lugar se han presentado varios incidentes y accidentes que han involucrado unidades de SAO6.
          </p>
          
          <p class="espaciado-normal">
            Si bien todo el tramo requiere especial precaución, esta curva en particular presenta una condición crítica: no cuenta con el peralte ni la inclinación técnica adecuada, lo que disminuye la adherencia de los vehículos al pavimento. Esta situación puede generar pérdida de tracción y deslizamientos, ocasionando colisiones con otros vehículos.
          </p>

          <p class="espaciado-normal">
            Para que actuemos en clave de prevención y podamos evitar futuros accidentes, desde nuestro Plan Estratégico de Seguridad Vial (P.E.S.V.), compartimos las siguientes recomendaciones operativas para la circulación en este sector:
          </p>
          
          <p class="lista-sin-vinetas">
            <strong>1. Velocidad máxima permitida:</strong><br>
            Entre una curva anterior y una curva posterior al punto crítico, la velocidad de circulación no deberá exceder:<br>
            • 30 km/h en condiciones de piso seco.<br>
            • 15 km/h en condiciones de piso mojado.
          </p>
          
          <p class="lista-sin-vinetas">
            <strong>2. Máxima precaución:</strong><br>
            Aplicar conducción defensiva permanente, considerando que es un sector donde se presentan altas velocidades e imprudencias por parte de otros actores viales. Se recomienda aumento de la distancia de seguridad y control progresivo de frenado.
          </p>

          <!-- Video Section -->
          <div class="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/nUa0bDvxCvQ" 
              title="Curva peligrosa con riesgo de alta accidentalidad - sector Los Pomos" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
            <span class="video-caption">Video mostrando el sector Los Pomos con falta de peralte</span>
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

.cuerpo-texto p.espaciado-normal {
  margin-bottom: 2rem;
}

.cuerpo-texto p.lista-sin-vinetas {
  margin-bottom: 2rem;
  line-height: 1.8;
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
