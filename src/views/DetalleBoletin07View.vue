<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBgImage from '../assets/images/boletin-07.png'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Boletín N°07 - Accidentalidad en crecimiento | SAO6',
  meta: [
    { 
      name: 'description', 
      content: 'Boletín N°07: La formación es clave para hacernos más conscientes y reducir la accidentalidad vial en la prestación del servicio de SAO6.' 
    },
    { 
      name: 'keywords', 
      content: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, formacion, macrozonas, P.E.S.V., medellin, conduccion segura' 
    },
    { name: 'author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Boletín N°07 - Accidentalidad en crecimiento | SAO6' },
    { property: 'og:description', content: 'La formación es clave para hacernos más conscientes y reducir la accidentalidad vial en la prestación del servicio de SAO6.' },
    { property: 'og:image', content: 'https://sao6.com.co/images/boletin-07.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Accidentalidad en crecimiento - Formación en macrozonas' },
    { property: 'og:url', content: 'https://sao6.com.co/noticias/boletin-07-accidentalidad-en-crecimiento' },
    { property: 'og:site_name', content: 'SAO6 - Sistema Alimentador Oriental' },
    { property: 'article:published_time', content: '2026-07-03T08:00:00-05:00' },
    { property: 'article:modified_time', content: '2026-07-03T08:00:00-05:00' },
    { property: 'article:author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { property: 'article:section', content: 'Seguridad Vial' },
    { property: 'article:tag', content: 'Boletín, Seguridad Vial, Prevención, Formación, Macrozonas' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Boletín N°07 - Accidentalidad en crecimiento | SAO6' },
    { name: 'twitter:description', content: 'La formación es clave para hacernos más conscientes y reducir la accidentalidad vial.' },
    { name: 'twitter:image', content: 'https://sao6.com.co/images/boletin-07.png' },
    { name: 'twitter:image:alt', content: 'Accidentalidad en crecimiento - Formación en macrozonas' },
  ],
  link: [
    { rel: 'canonical', href: 'https://sao6.com.co/noticias/boletin-07-accidentalidad-en-crecimiento' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Boletín N°07: Accidentalidad en crecimiento",
        "alternativeHeadline": "La formación es clave para hacernos más conscientes y reducir la accidentalidad vial",
        "description": "Boletín N°07: La formación es clave para hacernos más conscientes y reducir la accidentalidad vial en la prestación del servicio de SAO6.",
        "image": {
          "@type": "ImageObject",
          "url": "https://sao6.com.co/images/boletin-07.png",
          "width": 1200,
          "height": 630,
          "caption": "Accidentalidad en crecimiento - Formación en macrozonas"
        },
        "datePublished": "2026-07-03T08:00:00-05:00",
        "dateModified": "2026-07-03T08:00:00-05:00",
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
          "@id": "https://sao6.com.co/noticias/boletin-07-accidentalidad-en-crecimiento"
        },
        "articleSection": "Seguridad Vial",
        "keywords": ["boletín", "SAO6", "seguridad vial", "prevención", "formación", "macrozonas"],
        "articleBody": "En lo que va corrido del 2026, el fenómeno de la accidentalidad vial en la prestación del servicio de SAO6 ha venido presentando una curva en ascenso. Los accidentes en vía han mostrado un comportamiento creciente, especialmente durante los meses de mayo y junio. Situación que nos invita a fortalecer las acciones que contribuyen a una conducción más segura y preventiva. Uno de los aspectos fundamentales para prevenir incidentes, es el conocimiento de la operación. Reconocer recorridos, puntos críticos, condiciones de la vía y características de cada ruta permite anticipar riesgos y tomar mejores decisiones durante la conducción. Por eso desde nuestro Plan Estratégico de Seguridad Vial (P.E.S.V.), tenemos una estrategia clave de entrenamiento y reconocimiento de nuestras 3 macrozonas de operación (norte, centro y sur). Cada operador(a) tendrá la misión de acceder al material formativo disponible en la plataforma Moodle - universidadsao6, donde podrá conocer las rutas y recorridos pertenecientes a cada macrozona."
      })
    }
  ]
})

gsap.registerPlugin(ScrollTrigger)

const tituloRef = ref<HTMLElement | null>(null)
const contenidoRef = ref<HTMLElement | null>(null)

onMounted(() => {
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
    
    <header class="hero-detalle">
      <div class="hero-detalle-bg-wrapper">
        <img :src="heroBgImage" alt="Accidentalidad en crecimiento - Formación en macrozonas" class="hero-detalle-bg" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="contenedor-estrecho hero-content">
        <div class="categoria-tag">Boletines</div>
        <h1 ref="tituloRef">Boletín N°07: Accidentalidad en crecimiento</h1>
        
        <div class="meta-info">
          <div class="autor">
            <span class="label">Por:</span>
            <span class="nombre">Plan Estratégico de Seguridad Vial - P.E.S.V.</span>
          </div>
          <div class="separador"></div>
          <div class="fecha">03 Jul 2026</div>
        </div>
      </div>
    </header>

    <article class="contenido-articulo" ref="contenidoRef">
      <div class="contenedor-estrecho">
        
        <p class="lead">
          La formación es clave para hacernos más conscientes y reducir la accidentalidad.
        </p>

        <div class="cuerpo-texto">
          <p class="espaciado-normal">
            En lo que va corrido del 2026, el fenómeno de la accidentalidad vial en la prestación del servicio de SAO6 ha venido presentando una curva en ascenso.
          </p>
          
          <p class="espaciado-normal">
            Los accidentes en vía han mostrado un comportamiento creciente, especialmente durante los meses de mayo y junio. Situación que nos invita a fortalecer las acciones que contribuyen a una conducción más segura y preventiva.
          </p>

          <p class="espaciado-normal">
            Uno de los aspectos fundamentales para prevenir incidentes, es el conocimiento de la operación. Reconocer recorridos, puntos críticos, condiciones de la vía y características de cada ruta permite anticipar riesgos y tomar mejores decisiones durante la conducción.
          </p>
          
          <p class="espaciado-normal">
            Por eso desde nuestro Plan Estratégico de Seguridad Vial (P.E.S.V.), tenemos una estrategia clave de entrenamiento y reconocimiento de nuestras 3 macrozonas de operación (norte, centro y sur). 
          </p>

          <p class="espaciado-normal">
            Cada operador(a) tendrá la misión de acceder al material formativo disponible en la plataforma Moodle - universidadsao6, donde podrá conocer las rutas y recorridos pertenecientes a cada macrozona. A partir de esta situación deberás tener en cuenta las siguientes instrucciones:
          </p>
          
          <ul class="lista-recomendaciones">
            <li>Realizar el curso y certificarse en la plataforma universidadsao6, sobre tu macrozona.</li>
            <li>Si te han movido a otra macrozona, hacer el curso formativo y certificarte en ella.</li>
            <li>Si por autogestión y conocimiento deseas certificarte en las tres macrozonas, también lo puedes hacer.</li>
          </ul>

          <p class="espaciado-normal">
            Cada ruta que conoces mejor es una oportunidad más para prevenir riesgos y contribuir a una operación segura para todos.
          </p>

          <p class="espaciado-normal">
            Puedes autogestionar estas formaciones o acercarte a las instalaciones del P.E.S.V. para recibir acompañamiento.
          </p>

          <div class="video-wrapper shorts-wrapper">
            <iframe 
              src="https://www.youtube-nocookie.com/embed/bdOIQrURcRQ" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
            <span class="video-caption">Accidentalidad en crecimiento - Plan Estratégico de Seguridad Vial</span>
          </div>
        </div>

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
