<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBgImage from '../assets/images/boletin-06.jpeg'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Boletín N°06 - ¡Cuidado al reversar! | SAO6',
  meta: [
    { 
      name: 'description', 
      content: 'Boletín N°06: Chocar al reversar, una de las principales causas de accidentalidad en SAO6. Recomendaciones del P.E.S.V. para reducir la siniestralidad en maniobras de reversa.' 
    },
    { 
      name: 'keywords', 
      content: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, reversa, maniobras de reversa, CMO, SONIA, P.E.S.V., medellin, conduccion segura' 
    },
    { name: 'author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Boletín N°06 - ¡Cuidado al reversar! | SAO6' },
    { property: 'og:description', content: 'Chocar al reversar, una de las principales causas de accidentalidad en SAO6. Recomendaciones del P.E.S.V. para maniobras seguras.' },
    { property: 'og:image', content: 'https://sao6.com.co/images/boletin-06.jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Cuidado al reversar - Maniobras de reversa seguras' },
    { property: 'og:url', content: 'https://sao6.com.co/noticias/boletin-06-cuidado-al-reversar' },
    { property: 'og:site_name', content: 'SAO6 - Sistema Alimentador Oriental' },
    { property: 'article:published_time', content: '2026-05-27T08:00:00-05:00' },
    { property: 'article:modified_time', content: '2026-05-27T08:00:00-05:00' },
    { property: 'article:author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { property: 'article:section', content: 'Seguridad Vial' },
    { property: 'article:tag', content: 'Boletín, Seguridad Vial, Prevención, Reversa, Maniobras' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Boletín N°06 - ¡Cuidado al reversar! | SAO6' },
    { name: 'twitter:description', content: 'Chocar al reversar, una de las principales causas de accidentalidad en SAO6.' },
    { name: 'twitter:image', content: 'https://sao6.com.co/images/boletin-06.jpeg' },
    { name: 'twitter:image:alt', content: 'Cuidado al reversar - Maniobras de reversa seguras' },
  ],
  link: [
    { rel: 'canonical', href: 'https://sao6.com.co/noticias/boletin-06-cuidado-al-reversar' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Boletín N°06: ¡Cuidado al reversar!",
        "alternativeHeadline": "Chocar al reversar: una de las principales causas de accidentalidad en SAO6",
        "description": "Boletín N°06: Chocar al reversar, una de las principales causas de accidentalidad en SAO6. Recomendaciones del P.E.S.V. para reducir la siniestralidad en maniobras de reversa.",
        "image": {
          "@type": "ImageObject",
          "url": "https://sao6.com.co/images/boletin-06.jpeg",
          "width": 1200,
          "height": 630,
          "caption": "Cuidado al reversar - Maniobras de reversa seguras"
        },
        "datePublished": "2026-05-27T08:00:00-05:00",
        "dateModified": "2026-05-27T08:00:00-05:00",
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
          "@id": "https://sao6.com.co/noticias/boletin-06-cuidado-al-reversar"
        },
        "articleSection": "Seguridad Vial",
        "keywords": ["boletín", "SAO6", "seguridad vial", "prevención", "reversa", "maniobras"],
        "articleBody": "En nuestra operación SAO6, las maniobras de reversa hacen parte de la dinámica diaria del servicio: en cabeceras, en vía para dar o abrirse paso, en integraciones. Sin embargo, estas maniobras también representan uno de los mayores factores de riesgo operacional. Durante el año 2025 se registraron 152 siniestros viales asociados a maniobras de reversa en nuestra operación comercial. Desde nuestro Plan Estratégico de Seguridad Vial (P.E.S.V.), compartimos recomendaciones que nos pueden ayudar a reducir este fenómeno de accidentalidad.",
        "video": {
          "@type": "VideoObject",
          "name": "¡Cuidado al reversar!",
          "description": "Recomendaciones para reducir la siniestralidad en maniobras de reversa",
          "thumbnailUrl": "https://img.youtube.com/vi/NmTwHyUSPVQ/maxresdefault.jpg",
          "uploadDate": "2026-05-27",
          "embedUrl": "https://www.youtube.com/embed/NmTwHyUSPVQ"
        }
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
        <img :src="heroBgImage" alt="Cuidado al reversar - Maniobras de reversa seguras" class="hero-detalle-bg" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="contenedor-estrecho hero-content">
        <div class="categoria-tag">Boletines</div>
        <h1 ref="tituloRef">Boletín N°06: ¡Cuidado al reversar!</h1>
        
        <div class="meta-info">
          <div class="autor">
            <span class="label">Por:</span>
            <span class="nombre">Plan Estratégico de Seguridad Vial - P.E.S.V.</span>
          </div>
          <div class="separador"></div>
          <div class="fecha">27 May 2026</div>
        </div>
      </div>
    </header>

    <article class="contenido-articulo" ref="contenidoRef">
      <div class="contenedor-estrecho">
        
        <p class="lead">
          Chocar al reversar: una de las principales causas de accidentalidad en SAO6
        </p>

        <div class="cuerpo-texto">
          <p class="espaciado-normal">
            En nuestra operación SAO6, las maniobras de reversa hacen parte de la dinámica diaria del servicio: en cabeceras, en vía para dar o abrirse paso, en integraciones. Sin embargo, estas maniobras también representan uno de los mayores factores de riesgo operacional.
          </p>
          
          <p class="espaciado-normal">
            El alto flujo vehicular en la Cuenca 6, el parqueo irregular, los puntos ciegos de las unidades, el desconocimiento de algunos "cambiaderos" y, en muchos casos, el afán, han convertido las maniobras de reversa en una de las principales causas de siniestralidad en nuestra operación. Estas situaciones generan afectaciones a nuestras unidades, daños a infraestructura comunitaria y particular, y afectaciones a otros vehículos.
          </p>

          <p class="espaciado-normal">
            Durante el año 2025 se registraron 152 siniestros viales asociados a maniobras de reversa en nuestra operación comercial. Contamos con herramientas de apoyo como el sistema SONIA y el acompañamiento del CMO; sin embargo, en ocasiones estos recursos no son utilizados oportunamente.
          </p>
          
          <p class="espaciado-normal">
            Desde nuestro Plan Estratégico de Seguridad Vial (P.E.S.V.), compartimos las siguientes recomendaciones que nos pueden ayudar a reducir este fenómeno de accidentalidad:
          </p>
          
          <ul class="lista-recomendaciones">
            <li>Verifique antes de colocar la marcha de reversa que la cámara y la pantalla proyecten correctamente la parte trasera de la unidad.</li>
            <li>Inicie la maniobra de forma lenta y controlada, validando constantemente la proximidad de objetos, vehículos o personas.</li>
            <li>Revise permanentemente los espejos laterales y central para identificar elementos fuera del alcance visual de la cámara.</li>
            <li>Si no cuenta con SONIA, solicite apoyo a usuarios a bordo u otros actores viales para verificar condiciones de riesgo detrás del bus.</li>
            <li>Si no existe claridad o seguridad para ejecutar la maniobra, comuníquese con el CMO y solicite apoyo de un promotor.</li>
          </ul>

          <p class="resaltado">
            <strong>¡Es mejor esperar en vía un promotor que le ayude a reversar, que esperar al promotor para los daños conciliar!</strong>
          </p>

          <div class="video-wrapper shorts-wrapper">
            <iframe 
              src="https://www.youtube-nocookie.com/embed/NmTwHyUSPVQ" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
            <span class="video-caption">¡Cuidado al reversar! - Recomendaciones para reducir la siniestralidad en maniobras de reversa</span>
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

.resaltado {
  background: #f0fdf4;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #4cc253;
  margin: 3rem 0;
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
