<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBgImage from '../assets/images/boletin-01.jpg'
import { useHead } from '@vueuse/head'

// Meta tags optimizados para SEO
useHead({
  title: 'Boletín N°01 - Prevención de Accidentalidad Vial | SAO6',
  meta: [
    { 
      name: 'description', 
      content: 'Boletín N°01: Recomendaciones especiales al transitar por la Carrera 21, a la altura del Batallón. Prevención de accidentalidad por postes de energía en la vía.' 
    },
    { 
      name: 'keywords', 
      content: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, postes de energia, medellin' 
    },
    { name: 'author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    
    // Open Graph para redes sociales
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Boletín N°01 - Prevención de Accidentalidad Vial | SAO6' },
    { property: 'og:description', content: 'Recomendaciones especiales al transitar por la Carrera 21, a la altura del Batallón. Prevención de accidentalidad por postes de energía en la vía.' },
    { property: 'og:image', content: 'https://sao6.com.co/images/boletin-01.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Imagen del sector Carrera 21' },
    { property: 'og:url', content: 'https://sao6.com.co/noticias/boletin-01-prevencion-accidentalidad-cra21' },
    { property: 'og:site_name', content: 'SAO6 - Sistema Alimentador Oriental' },
    { property: 'article:published_time', content: '2026-02-07T08:00:00-05:00' },
    { property: 'article:modified_time', content: '2026-02-07T08:00:00-05:00' },
    { property: 'article:author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { property: 'article:section', content: 'Seguridad Vial' },
    { property: 'article:tag', content: 'Boletín, Seguridad Vial, Prevención' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Boletín N°01 - Prevención de Accidentalidad Vial | SAO6' },
    { name: 'twitter:description', content: 'Recomendaciones especiales al transitar por la Carrera 21, a la altura del Batallón.' },
    { name: 'twitter:image', content: 'https://sao6.com.co/images/boletin-01.jpg' },
    { name: 'twitter:image:alt', content: 'Imagen del sector Carrera 21' },
  ],
  link: [
    { rel: 'canonical', href: 'https://sao6.com.co/noticias/boletin-01-prevencion-accidentalidad-cra21' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Boletín N°01: Punto de atención especial en la Cra. 21, Ruta C6-004 y C6-004A",
        "alternativeHeadline": "Boletín N°01 - Prevención de Accidentalidad Vial",
        "description": "Recomendaciones especiales al transitar por la Carrera 21, a la altura del Batallón. Prevención de accidentalidad por postes de energía en la vía.",
        "image": {
          "@type": "ImageObject",
          "url": "https://sao6.com.co/images/boletin-01.jpg",
          "width": 1200,
          "height": 630,
          "caption": "Imagen del sector Carrera 21"
        },
        "datePublished": "2026-02-07T08:00:00-05:00",
        "dateModified": "2026-02-07T08:00:00-05:00",
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
          "@id": "https://sao6.com.co/noticias/boletin-01-prevencion-accidentalidad-cra21"
        },
        "articleSection": "Seguridad Vial",
        "keywords": ["boletín", "SAO6", "seguridad vial", "prevención", "postes de energía"],
        "articleBody": "Como acción de prevención de la accidentalidad vial, desde nuestra Compañía SAO6 y a través del Plan Estratégico de Seguridad Vial - P.E.S.V., compartimos con ustedes recomendaciones especiales al transitar por este sector: Carrera 21, a la altura del Batallón...",
        "video": {
          "@type": "VideoObject",
          "name": "Punto de atención especial en la Cra. 21",
          "description": "Video mostrando el sector con postes de energía que sobresalen a la vía",
          "thumbnailUrl": "https://img.youtube.com/vi/Wuc8kn_8GTk/maxresdefault.jpg",
          "uploadDate": "2026-02-07",
          "embedUrl": "https://www.youtube.com/embed/Wuc8kn_8GTk"
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
        <h1 ref="tituloRef">Boletín N°01: Punto de atención especial en la Cra. 21, Ruta C6-004 y C6-004A</h1>
        
        <div class="meta-info">
          <div class="autor">
            <span class="label">Por:</span>
            <span class="nombre">Plan Estratégico de Seguridad Vial - P.E.S.V.</span>
          </div>
          <div class="separador"></div>
          <div class="fecha">07 Feb 2026</div>
        </div>
      </div>
    </header>

    <!-- Contenido del Artículo -->
    <article class="contenido-articulo" ref="contenidoRef">
      <div class="contenedor-estrecho">
        
        <p class="lead">
          Postes de energía que sobresalen a la vía. Como acción de prevención de la accidentalidad vial, desde nuestra Compañía SAO6 y a través del Plan Estratégico de Seguridad Vial - P.E.S.V., compartimos con ustedes recomendaciones especiales al transitar por este sector.
        </p>

        <div class="cuerpo-texto">
          <p class="espaciado-normal">
            <strong>Ubicación:</strong> Carrera 21, a la altura del Batallón, vía hacia o desde la cabecera de las Rutas C6-004 y C6-004A.
          </p>
          
          <p class="espaciado-normal">
            En este punto, dos postes de energía sobresalen hacia la vía, lo que representa un alto riesgo de accidentes. Pueden ocurrir situaciones como:
          </p>
          
          <p class="lista-sin-vinetas">
            Chocar directamente contra los postes.<br>
            Intentar esquivarlos y colisionar con otros vehículos.<br>
            Generar choques por alcance al detenerse para ceder el paso o por maniobras de adelantamiento.<br>
            Lamentablemente es un lugar donde se han presentado graves accidentes, incluso con persona fallecida.
          </p>

          <p class="espaciado-normal">
            Desde nuestro Plan Estratégico de Seguridad Vial – P.E.S.V., compartimos estas recomendaciones para reducir el riesgo de accidentes al transitar por este sector:
          </p>
          
          <p class="lista-sin-vinetas">
            <strong>Velocidad máxima:</strong> Tanto en piso seco como húmedo, la velocidad no debe superar los 15 km/h.<br>
            <strong>Prioridad de paso:</strong> Si dos unidades se encuentran en este punto, la unidad que sube debe detenerse para dar paso a la que baja. Detener la unidad que desciende aumenta el riesgo de accidentalidad.<br>
            <strong>Entre todos y todas hacemos de nuestra operación SAO6, un ejercicio seguro y responsable.</strong>
          </p>

          <!-- Video Section -->
          <div class="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/Wuc8kn_8GTk" 
              title="Punto de atención especial en la Cra. 21" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
            <span class="video-caption">Video mostrando el sector con postes de energía que sobresalen a la vía</span>
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
