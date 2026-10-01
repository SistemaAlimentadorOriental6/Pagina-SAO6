<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import heroBgImage from '../assets/images/boletin-10.png'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Boletín N°10 - Desconéctate del celular. Conéctate con la vía | SAO6',
  meta: [
    { 
      name: 'description', 
      content: 'Boletín N°10: Desconéctate del celular. Conéctate con la vía. Uso indebido del celular en nuestra operación SAO6 y pautas de seguridad vial.' 
    },
    { 
      name: 'keywords', 
      content: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, uso del celular, distraccion, PESV, medellin, conduccion segura' 
    },
    { name: 'author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Boletín N°10 - Desconéctate del celular. Conéctate con la vía | SAO6' },
    { property: 'og:description', content: 'Uso indebido del celular en nuestra operación SAO6. En la conducción, unos segundos de distracción pueden ser suficientes para perder de vista un riesgo.' },
    { property: 'og:image', content: 'https://sao6.com.co/images/boletin-10.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Boletín N°10 - Desconéctate del celular. Conéctate con la vía' },
    { property: 'og:url', content: 'https://sao6.com.co/noticias/boletin-10-desconectate-del-celular' },
    { property: 'og:site_name', content: 'SAO6 - Sistema Alimentador Oriental' },
    { property: 'article:published_time', content: '2026-09-30T08:00:00-05:00' },
    { property: 'article:modified_time', content: '2026-09-30T08:00:00-05:00' },
    { property: 'article:author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { property: 'article:section', content: 'Seguridad Vial' },
    { property: 'article:tag', content: 'Boletín, Seguridad Vial, Prevención, Uso del Celular, PESV' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Boletín N°10 - Desconéctate del celular. Conéctate con la vía | SAO6' },
    { name: 'twitter:description', content: 'Uso indebido del celular en nuestra operación SAO6.' },
    { name: 'twitter:image', content: 'https://sao6.com.co/images/boletin-10.png' },
    { name: 'twitter:image:alt', content: 'Boletín N°10 - Desconéctate del celular. Conéctate con la vía' },
  ],
  link: [
    { rel: 'canonical', href: 'https://sao6.com.co/noticias/boletin-10-desconectate-del-celular' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Boletín N° 10: Desconéctate del celular. Conéctate con la vía.",
        "alternativeHeadline": "Uso indebido del celular en nuestra operación SAO6",
        "description": "Boletín N°10: Desconéctate del celular. Conéctate con la vía. Uso indebido del celular en nuestra operación SAO6.",
        "image": {
          "@type": "ImageObject",
          "url": "https://sao6.com.co/images/boletin-10.png",
          "width": 1200,
          "height": 630,
          "caption": "Boletín N°10 - Desconéctate del celular. Conéctate con la vía"
        },
        "datePublished": "2026-09-30T08:00:00-05:00",
        "dateModified": "2026-09-30T08:00:00-05:00",
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
          "@id": "https://sao6.com.co/noticias/boletin-10-desconectate-del-celular"
        },
        "articleSection": "Seguridad Vial",
        "keywords": ["boletín", "SAO6", "seguridad vial", "prevención", "uso del celular", "PESV"],
        "articleBody": "En la conducción, unos segundos de distracción pueden ser suficientes para perder de vista un riesgo, reaccionar tarde o tomar una decisión equivocada. En SAO6, el uso y manipulación del celular mientras se conduce está prohibido."
      })
    }
  ]
})

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
        <img :src="heroBgImage" alt="Desconéctate del celular. Conéctate con la vía" class="hero-detalle-bg" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="contenedor-estrecho hero-content">
        <div class="categoria-tag">Boletines</div>
        <h1 ref="tituloRef">Boletín N° 10: Desconéctate del celular. Conéctate con la vía.</h1>
        
        <div class="meta-info">
          <div class="autor">
            <span class="label">Por:</span>
            <span class="nombre">Plan Estratégico de Seguridad Vial - P.E.S.V.</span>
          </div>
          <div class="separador"></div>
          <div class="fecha">30 Sep 2026</div>
        </div>
      </div>
    </header>

    <article class="contenido-articulo" ref="contenidoRef">
      <div class="contenedor-estrecho">
        
        <p class="lead">
          USO INDEBIDO DEL CELULAR EN NUESTRA OPERACIÓN SAO6
        </p>

        <div class="cuerpo-texto">
          <p class="espaciado-normal">
            En la conducción, unos segundos de distracción pueden ser suficientes para perder de vista un riesgo, reaccionar tarde o tomar una decisión equivocada.
          </p>
          
          <p class="espaciado-normal">
            En SAO6, el uso y manipulación del celular mientras se conduce está prohibido. No importa si se trata de una llamada, un mensaje, un video, una conversación o cualquier otro contenido: si el vehículo está en movimiento, utilizarlo afecta la conducción y contraviene las disposiciones de tránsito.
          </p>

          <p class="espaciado-normal">
            El riesgo no es únicamente apartar la mirada de la vía. El celular también puede desviar nuestra atención y concentración de la operación. Podemos mirar hacia adelante y, al mismo tiempo, tener nuestra mente ocupada en otro lugar.
          </p>
          
          <h2 class="subtitulo-seccion">¿Cómo se está presentando esta conducta?</h2>

          <ul class="lista-conductas">
            <li>
              <strong>Llamadas:</strong> realizar o recibir llamadas durante la marcha, incluso con el CMO.
            </li>
            <li>
              <strong>En el tablero:</strong> ubicar el celular para utilizarlo o visualizar su contenido.
            </li>
            <li>
              <strong>Oculto en el cuerpo:</strong> sujetarlo entre el hombro y el cuerpo o intentar disimularlo con prendas u otros elementos.
            </li>
            <li>
              <strong>Auriculares:</strong> utilizarlos durante la conducción, aunque se intente ocultarlos o hacerlos poco perceptibles.
            </li>
          </ul>

          <p class="espaciado-normal">
            Cambiar la forma de usar o esconder el celular no elimina la distracción ni el riesgo. Para garantizar una conducción segura y responsable, desde nuestro Plan Estratégico de Seguridad Vial, te recordamos:
          </p>

          <ul class="lista-recordatorios">
            <li>Mientras estemos en operación, no está permitido el uso del celular. Si existe una situación urgente, aplica el debido protocolo.</li>
            <li>No busquemos ocultarlo, camuflarlo o utilizarlo sin ser detectados.</li>
            <li>La verdadera prevención no consiste en evitar una evidencia, sino en evitar el riesgo.</li>
            <li>El uso del celular durante la conducción puede generar repercusiones conforme a la normatividad de tránsito y al Reglamento Interno de Trabajo de SAO6.</li>
          </ul>

          <p class="frase-cierre">
            En SAO6, conducir con seguridad significa estar presentes: con los ojos en la vía, las manos en la conducción y la mente en la operación.
          </p>

          <div class="video-wrapper shorts-wrapper">
            <iframe 
              src="https://www.youtube-nocookie.com/embed/JLILkxpNQtI" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
            <span class="video-caption">Desconéctate del celular. Conéctate con la vía - Plan Estratégico de Seguridad Vial</span>
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
  font-size: clamp(2.3rem, 4.5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.15;
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
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 3rem;
  border-left: 4px solid #4cc253;
  padding-left: 2rem;
  letter-spacing: -0.01em;
}

.subtitulo-seccion {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 2.5rem 0 1.5rem 0;
}

.cuerpo-texto p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 2rem;
}

.frase-cierre {
  font-weight: 700;
  color: #1a1a1a;
  font-size: 1.25rem !important;
  border-top: 2px dashed #4cc253;
  padding-top: 1.5rem;
  margin-top: 2rem;
}

.lista-conductas {
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
}

.lista-conductas li {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
}

.lista-conductas li::before {
  content: "•";
  color: #e53935;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.5rem;
}

.lista-recordatorios {
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
}

.lista-recordatorios li {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
}

.lista-recordatorios li::before {
  content: "✓";
  color: #4cc253;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
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
