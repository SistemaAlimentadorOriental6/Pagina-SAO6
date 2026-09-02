<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import heroBgImage from '../assets/images/boletin-09.jpeg'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Boletín N°09 - El giro a la izquierda: Un giro que puede cambiarlo todo | SAO6',
  meta: [
    { 
      name: 'description', 
      content: 'Boletín N°09: El giro a la izquierda: Un giro que puede cambiarlo todo. Medidas restrictivas ante la recurrencia de esta conducta indebida.' 
    },
    { 
      name: 'keywords', 
      content: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, giro a la izquierda, carril contrario, PESV, medellin' 
    },
    { name: 'author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Boletín N°09 - El giro a la izquierda: Un giro que puede cambiarlo todo | SAO6' },
    { property: 'og:description', content: 'Medidas restrictivas ante la recurrencia de esta conducta indebida. Girar a la izquierda en una vía de doble sentido exige atención, anticipación y respetar nuestro carril.' },
    { property: 'og:image', content: 'https://sao6.com.co/images/boletin-09.jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Boletín N°09 - El giro a la izquierda: Un giro que puede cambiarlo todo' },
    { property: 'og:url', content: 'https://sao6.com.co/noticias/boletin-09-el-giro-a-la-izquierda' },
    { property: 'og:site_name', content: 'SAO6 - Sistema Alimentador Oriental' },
    { property: 'article:published_time', content: '2026-08-31T08:00:00-05:00' },
    { property: 'article:modified_time', content: '2026-08-31T08:00:00-05:00' },
    { property: 'article:author', content: 'Plan Estratégico de Seguridad Vial - P.E.S.V.' },
    { property: 'article:section', content: 'Seguridad Vial' },
    { property: 'article:tag', content: 'Boletín, Seguridad Vial, Prevención, Giro a la Izquierda, PESV' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Boletín N°09 - El giro a la izquierda: Un giro que puede cambiarlo todo | SAO6' },
    { name: 'twitter:description', content: 'Medidas restrictivas ante la recurrencia de esta conducta indebida.' },
    { name: 'twitter:image', content: 'https://sao6.com.co/images/boletin-09.jpeg' },
    { name: 'twitter:image:alt', content: 'Boletín N°09 - El giro a la izquierda: Un giro que puede cambiarlo todo' },
  ],
  link: [
    { rel: 'canonical', href: 'https://sao6.com.co/noticias/boletin-09-el-giro-a-la-izquierda' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Boletín N° 09: El giro a la izquierda: Un giro que puede cambiarlo todo",
        "alternativeHeadline": "Medidas restrictivas ante la recurrencia de esta conducta indebida",
        "description": "Boletín N°09: El giro a la izquierda: Un giro que puede cambiarlo todo. Medidas restrictivas ante la recurrencia de esta conducta indebida.",
        "image": {
          "@type": "ImageObject",
          "url": "https://sao6.com.co/images/boletin-09.jpeg",
          "width": 1200,
          "height": 630,
          "caption": "Boletín N°09 - El giro a la izquierda: Un giro que puede cambiarlo todo"
        },
        "datePublished": "2026-08-31T08:00:00-05:00",
        "dateModified": "2026-08-31T08:00:00-05:00",
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
          "@id": "https://sao6.com.co/noticias/boletin-09-el-giro-a-la-izquierda"
        },
        "articleSection": "Seguridad Vial",
        "keywords": ["boletín", "SAO6", "seguridad vial", "prevención", "giro a la izquierda", "PESV"],
        "articleBody": "Girar a la izquierda en una vía de doble sentido exige atención, anticipación y, sobre todo, respetar nuestro carril. Invadir el carril contrario durante esta maniobra es una conducta que las normas de tránsito restringen y que, lamentablemente, continúa presentándose de manera recurrente en nuestra operación."
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
        <img :src="heroBgImage" alt="El giro a la izquierda: Un giro que puede cambiarlo todo" class="hero-detalle-bg" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="contenedor-estrecho hero-content">
        <div class="categoria-tag">Boletines</div>
        <h1 ref="tituloRef">Boletín N° 09: El giro a la izquierda: Un giro que puede cambiarlo todo</h1>
        
        <div class="meta-info">
          <div class="autor">
            <span class="label">Por:</span>
            <span class="nombre">Plan Estratégico de Seguridad Vial - P.E.S.V.</span>
          </div>
          <div class="separador"></div>
          <div class="fecha">31 Ago 2026</div>
        </div>
      </div>
    </header>

    <article class="contenido-articulo" ref="contenidoRef">
      <div class="contenedor-estrecho">
        
        <p class="lead">
          Medidas restrictivas ante la recurrencia de esta conducta indebida
        </p>

        <div class="cuerpo-texto">
          <p class="espaciado-normal">
            Girar a la izquierda en una vía de doble sentido exige atención, anticipación y, sobre todo, respetar nuestro carril.
          </p>
          
          <p class="espaciado-normal">
            Invadir el carril contrario durante esta maniobra es una conducta que las normas de tránsito restringen y que, lamentablemente, continúa presentándose de manera recurrente en nuestra operación.
          </p>

          <p class="espaciado-normal">
            Y aquí debemos ser claros: no estamos hablando de una simple maniobra mal ejecutada. Cada vez que invadimos el carril contrario, ponemos en riesgo a quienes comparten la vía, exponemos a nuestros usuarios, nuestras unidades y podemos terminar ocasionando un siniestro.
          </p>
          
          <p class="espaciado-normal">
            Una maniobra de pocos segundos puede generar consecuencias que van mucho más allá de la vía:
          </p>

          <ul class="lista-consecuencias">
            <li>Daños a terceros y a nuestras unidades.</li>
            <li>Responsabilidades legales: de tránsito, civiles y penales.</li>
            <li>Consecuencias laborales: esta conducta es considerada gravísima en nuestro Reglamento Interno de Trabajo y genera la terminación inmediata del contrato laboral, conforme a las disposiciones aplicables. (Esta será una desición no negociable por parte de SAO6).</li>
          </ul>

          <p class="espaciado-normal">
            En el 100 % de las novedades registradas por este tipo de maniobra, la responsabilidad ha sido nuestra.
          </p>

          <p class="espaciado-normal">
            No depende del tráfico, no depende del otro conductor, depende de nuestra decisión al volante.
          </p>

          <p class="espaciado-normal">
            Aquí es donde hacemos homenaje a las 3P:
          </p>
          
          <ul class="lista-3p">
            <li><strong>🛑 PARO:</strong> deténgase y verifique que el giro sea seguro y permitido.</li>
            <li><strong>🧠 PIENSO:</strong> observe el entorno e identifique los riesgos.</li>
            <li><strong>▶️ PROCEDO:</strong> realice la maniobra sin invadir el carril contrario.</li>
          </ul>

          <p class="frase-cierre">
            Llegar a tiempo es importante, llegar seguros es indispensable y ningún giro vale una vida.
          </p>

          <div class="video-wrapper shorts-wrapper">
            <iframe 
              src="https://www.youtube-nocookie.com/embed/oqev8H2g_YE" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
            <span class="video-caption">El giro a la izquierda: Un giro que puede cambiarlo todo - Plan Estratégico de Seguridad Vial</span>
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

.frase-cierre {
  font-weight: 700;
  color: #1a1a1a;
  font-size: 1.25rem !important;
  border-top: 2px dashed #4cc253;
  padding-top: 1.5rem;
  margin-top: 2rem;
}

.lista-consecuencias {
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
}

.lista-consecuencias li {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 0.8rem;
  padding-left: 2rem;
  position: relative;
}

.lista-consecuencias li::before {
  content: "•";
  color: #e53935;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.5rem;
}

.lista-3p {
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
}

.lista-3p li {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 0.8rem;
  padding-left: 0.5rem;
  position: relative;
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
