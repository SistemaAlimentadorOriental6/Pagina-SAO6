<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBgImage from '../assets/images/boletin-03.jpeg'
import { useHead } from '@vueuse/head'

// Meta tags optimizados para SEO
useHead({
  title: 'Boletín N°03 - Prevención de Accidentalidad Vial | SAO6',
  meta: [
    { 
      name: 'description', 
      content: 'Boletín N°03: Cruce de la Cra 50 (Palacé), con la Calle 40. Sitio de alto riesgo de accidentalidad. Recomendaciones operativas para la circulación en este sector.' 
    },
    { 
      name: 'keywords', 
      content: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, cruce peligroso, carrera 50, calle 40, palace, medellin' 
    },
    { name: 'author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    
    // Open Graph para redes sociales
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Boletín N°03 - Prevención de Accidentalidad Vial | SAO6' },
    { property: 'og:description', content: 'Cruce de la Cra 50 (Palacé), con la Calle 40. Sitio de alto riesgo de accidentalidad.' },
    { property: 'og:image', content: 'https://sao6.com.co/images/boletin-03.jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cruce de la Cra 50 (Palacé), con la Calle 40' },
    { property: 'og:url', content: 'https://sao6.com.co/noticias/boletin-03-cruce-peligroso-cra50-calle40' },
    { property: 'og:site_name', content: 'SAO6 - Sistema Alimentador Oriental' },
    { property: 'article:published_time', content: '2026-03-11T08:00:00-05:00' },
    { property: 'article:modified_time', content: '2026-03-11T08:00:00-05:00' },
    { property: 'article:author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { property: 'article:section', content: 'Seguridad Vial' },
    { property: 'article:tag', content: 'Boletín, Seguridad Vial, Prevención' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Boletín N°03 - Prevención de Accidentalidad Vial | SAO6' },
    { name: 'twitter:description', content: 'Cruce de la Cra 50 (Palacé), con la Calle 40. Sitio de alto riesgo de accidentalidad.' },
    { name: 'twitter:image', content: 'https://sao6.com.co/images/boletin-03.jpeg' },
    { name: 'twitter:image:alt', content: 'Cruce de la Cra 50 (Palacé), con la Calle 40' },
  ],
  link: [
    { rel: 'canonical', href: 'https://sao6.com.co/noticias/boletin-03-cruce-peligroso-cra50-calle40' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Boletín N°03: Cruce de la Cra 50 (Palacé), con la Calle 40 - Sitio de alto riesgo",
        "alternativeHeadline": "Boletín N°03 - Prevención de Accidentalidad Vial",
        "description": "Cruce de la Cra 50 (Palacé), con la Calle 40. Sitio de alto riesgo de accidentalidad. Recomendaciones operativas.",
        "image": {
          "@type": "ImageObject",
          "url": "https://sao6.com.co/images/boletin-03.jpeg",
          "width": 1200,
          "height": 630,
          "caption": "Cruce de la Cra 50 (Palacé), con la Calle 40"
        },
        "datePublished": "2026-03-11T08:00:00-05:00",
        "dateModified": "2026-03-11T08:00:00-05:00",
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
          "@id": "https://sao6.com.co/noticias/boletin-03-cruce-peligroso-cra50-calle40"
        },
        "articleSection": "Seguridad Vial",
        "keywords": ["boletín", "SAO6", "seguridad vial", "prevención", "cruce peligroso", "carrera 50"],
        "articleBody": "El cruce de la Cra. 50 Palacé con la Calle 40 es un punto de circulación para las rutas C6-004 y C6-004A en su llegada a Integración, así como para la ruta C6-007 en tránsito hacia cabecera...",
        "video": {
          "@type": "VideoObject",
          "name": "Cruce de la Cra 50 (Palacé), con la Calle 40",
          "description": "Video mostrando el cruce de alto riesgo de accidentalidad",
          "thumbnailUrl": "https://img.youtube.com/vi/7gc2zjjg9Po/maxresdefault.jpg",
          "uploadDate": "2026-03-11",
          "embedUrl": "https://www.youtube.com/embed/7gc2zjjg9Po"
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
        <h1 ref="tituloRef">Boletín N°03: Cruce de la Cra 50 (Palacé), con la Calle 40 - Sitio de alto riesgo</h1>
        
        <div class="meta-info">
          <div class="autor">
            <span class="label">Por:</span>
            <span class="nombre">Plan Estratégico de Seguridad Vial - P.E.S.V.</span>
          </div>
          <div class="separador"></div>
          <div class="fecha">11 Mar 2026</div>
        </div>
      </div>
    </header>

    <!-- Contenido del Artículo -->
    <article class="contenido-articulo" ref="contenidoRef">
      <div class="contenedor-estrecho">
        
        <p class="lead">
          Cruce de la Cra 50 (Palacé), con la Calle 40.<br>
          Sitio de alto riesgo de accidentalidad.
        </p>

        <div class="cuerpo-texto">
          <p class="espaciado-normal">
            El cruce de la Cra. 50 Palacé con la Calle 40 es un punto de circulación para las rutas C6-004 y C6-004A en su llegada a Integración, así como para la ruta C6-007 en tránsito hacia cabecera.
          </p>
          
          <p class="espaciado-normal">
            Este sector presenta alto riesgo de accidentalidad, ya que además de la circulación vehicular, es un punto con paso peatonal, ciclorruta y doble sentido vial sobre la Calle 40.
          </p>
          
          <p class="espaciado-normal">
            A estas condiciones se suma la presencia frecuente de parqueo irregular, lo que agrava la movilidad y reduce la visibilidad en la zona.
          </p>
          
          <p class="espaciado-normal">
            Hacemos un llamado a los operadores(as) para extremar las medidas de precaución y conducción preventiva al transitar por este cruce.
          </p>

          <p class="espaciado-normal">
            Desde nuestro Plan Estratégico de Seguridad Vial (P.E.S.V.), compartimos las siguientes recomendaciones operativas para la circulación en este sector:
          </p>
          
          <p class="lista-sin-vinetas">
            La circulación por la Cra. 50 – Avenida Palacé debe realizarse a una velocidad máxima de 15 km/h.<br>
            Antes de realizar el giro para descender por la Calle 40, se debe efectuar PARE total, observando con atención la presencia de peatones, ciclistas u otros vehículos que puedan estar cruzando la vía.<br>
            Ejecutar el giro abierto para descender por el carril derecho, recordar que es vía en doble circulación.<br>
            Para los vehículos que transitan en ascenso por la Calle 40, se hace igualmente el llamado a realizar el PARE, verificar el cruce de peatones, ciclistas y otros vehículos, y solo continuar la marcha cuando existan condiciones seguras.<br>
            <strong>Recuerda siempre nuestro principio de las 3P: Paro; Pienso; Procedo.</strong>
          </p>

          <!-- Video Section -->
          <div class="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/7gc2zjjg9Po" 
              title="Cruce de la Cra 50 (Palacé), con la Calle 40" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
            <span class="video-caption">Video mostrando el cruce de alto riesgo de accidentalidad</span>
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
