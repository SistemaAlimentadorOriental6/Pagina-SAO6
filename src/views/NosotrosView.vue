<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { annotate, annotationGroup } from 'rough-notation'
// @ts-ignore
import heroBgImage from '../assets/images/runnersao6.webp'
import misionImage from '/images/imagenSAO6.webp'
import visionImage from '../assets/images/buselectricosao6.webp'
import compromisoImg from '../assets/images/compromiso.png'
import honestidadImg from '../assets/images/Honestidad.png'
import sencillezImg from '../assets/images/Sencillez.png'
import respetoImg from '../assets/images/Respeto.png'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Nosotros',
  meta: [
    { name: 'description', content: 'Conoce SAO6, nuestra misión, visión y valores. Somos el sistema alimentador del oriente de Medellín, comprometidos con el progreso y la calidad de vida.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "SAO6",
          "foundingDate": "2010",
          "description": "Organización dedicada al Transporte Masivo de pasajeros en la modalidad de servicio alimentador.",
          "areaServed": "Medellín, Oriente"
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
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
            "name": "Nosotros",
            "item": "https://www.sao6.com/nosotros"
          }
        ]
      })
    }
  ]
})

gsap.registerPlugin(ScrollTrigger)

// Referencias para anotaciones
const tituloHero = ref<HTMLElement | null>(null)
const textoMejora = ref<HTMLElement | null>(null)
const texto2029 = ref<HTMLElement | null>(null)
const textoElectrico = ref<HTMLElement | null>(null)

onMounted(() => {
  // Inicializar Plyr eliminado


  // Animaciones de entrada suaves
  const sections = document.querySelectorAll('.seccion-animada')
  
  sections.forEach((section) => {
    gsap.from(section.children, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    })
  })

  // Configuración de Rough Notation
  if (tituloHero.value && textoMejora.value && texto2029.value && textoElectrico.value) {
    const a1 = annotate(tituloHero.value, { type: 'underline', color: '#4cc253', strokeWidth: 3, padding: 5 })
    const a2 = annotate(textoMejora.value, { type: 'highlight', color: 'rgba(76, 194, 83, 0.2)', multiline: true })
    const a3 = annotate(texto2029.value, { type: 'circle', color: '#ffffff', strokeWidth: 2, padding: 8 })
    const a4 = annotate(textoElectrico.value, { type: 'underline', color: '#ffffff', strokeWidth: 2 })

    annotationGroup([a1, a2, a3, a4])
    
    // Mostrar anotaciones secuencialmente o al hacer scroll
    // Para el título del hero, mostrar de inmediato
    setTimeout(() => a1.show(), 1000)

    // Para el resto, usar ScrollTrigger
    ScrollTrigger.create({
      trigger: textoMejora.value,
      start: 'top 80%',
      onEnter: () => a2.show()
    })

    ScrollTrigger.create({
      trigger: texto2029.value,
      start: 'top 80%',
      onEnter: () => {
        a3.show()
        setTimeout(() => a4.show(), 500)
      }
    })
  }
})

const valores = [
  {
    titulo: 'Respeto',
    descripcion: 'Es reconocer y aceptar los derechos de los demás',
    image: respetoImg
  },
  {
    titulo: 'Integridad', // Usaré Honestidad aquí ya que es similar y el usuario proveyó Honestidad.png
    descripcion: 'Es hacer lo correcto sin necesidad de espectadores',
    image: honestidadImg
  },
  {
    titulo: 'Compromiso', // Cambiado de Pasión a Compromiso según la imagen provista
    descripcion: 'Es pasión y entrega en lo que hago',
    image: compromisoImg
  },
  {
    titulo: 'Sencillez', // Cambiado de Humildad a Sencillez según la imagen provista
    descripcion: 'Es humildad y valorar todo por simple que parezca',
    image: sencillezImg
  }
]
</script>

<template>
  <div class="pagina-nosotros">
    
    <!-- Hero Section -->
    <section class="hero-nosotros" aria-label="Sección hero de presentación">
      <div class="hero-bg-wrapper">
        <img 
          :src="heroBgImage" 
          alt="Equipo SAO6 transportando pasajeros en el oriente de Medellín" 
          class="hero-bg" 
          width="1920" 
          height="1080" 
          fetchpriority="high"
          decoding="async"
        />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="hero-content">
        <div class="hero-text-container">
          <span class="tag-hero">Nuestra Organización</span>
          <h1 ref="tituloHero">Quiénes Somos</h1>
          <div class="linea-decorativa"></div>
          <p class="hero-description">
            Nuestros buses alimentadores no solo llevan personas: impulsan los sueños, metas e historias que construyen ciudad.
            ¡Medellín Conduce el Cambio!
          </p>
        </div>
      </div>
    </section>

    <div class="contenido-principal">
      
      <!-- Introducción Editorial -->
      <section class="seccion-intro seccion-animada">
        <div class="contenedor-estrecho">
          <h2 class="titulo-editorial">
            Más que transporte, somos <span class="resaltado" ref="textoMejora">progreso</span>.
          </h2>
          <p class="texto-bajada">
            Somos una Organización dedicada al Transporte Masivo de pasajeros en la modalidad de servicio alimentador, vinculada al sistema integrado de transporte del valle de aburrá SITVA, comprometidos con el cumplimiento de los requisitos normativos, con un enfoque de mejoramiento continuo dentro del marco de gestión integral, garantizando la confiabilidad y satisfacción de nuestros usuarios, basados en las buenas prácticas ambientales.
          </p>
          <div class="firma-container">
            <div class="linea-firma"></div>
            <h3 class="firma">Sistemas Alimentador Oriental S.A.S</h3>
          </div>
        </div>
      </section>

      <!-- Misión y Visión (Diseño Collage Moderno) -->
      <section class="mision-vision seccion-animada" aria-labelledby="titulo-mision-vision">
        <div class="contenedor">
          
          <!-- Misión -->
          <article class="collage-section mision">
            <div class="collage-images">
              <div class="img-single-wrapper">
                <img 
                  :src="misionImage" 
                  alt="Pasajeros del sistema alimentador SAO6 abordando buses en el oriente de Medellín" 
                  class="img-single" 
                  width="800" 
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div class="collage-content">
              <span class="section-label">Nuestro Propósito</span>
              <h2 id="titulo-mision">Nuestra Misión</h2>
              <p>
                Tenemos un sueño, un sueño de todos, se llama SAO, una Organización que construye un futuro mediante un esfuerzo colectivo, para avanzar familiar y laboralmente, un proyecto de empresa, un proyecto de vida para todos los involucrados. Estamos enfocados en mejorar día a día la movilización de los ciudadanos de forma segura y eficiente, con responsabilidad social, ambiental y económica, teniendo firmeza en lo que se cree en concordancia con lo que se planea.
              </p>
            </div>
          </article>

          <!-- Visión -->
          <article class="collage-section vision reverse">
            <div class="collage-content">
              <span class="section-label">Hacia el Futuro</span>
              <h2 id="titulo-vision">Nuestra Visión <span class="year-badge" ref="texto2029">2029</span></h2>
              <p>
                En Sistema Alimentador Oriental, para el 2029 aspiramos a ser el referente líder en el transporte masivo de pasajeros en el Valle de Aburrá, destacándonos por nuestra innovación en el uso de <strong ref="textoElectrico">transporte eléctrico</strong> y nuestro compromiso con la movilidad sostenible. Nos esforzamos por reducir significativamente los impactos ambientales, manteniendo nuestros valores fundamentales de compromiso, sencillez, honestidad y respeto.
              </p>
            </div>
            <div class="collage-images">
              <div class="img-single-wrapper">
                <img 
                  :src="visionImage" 
                  alt="Flota moderna de buses eléctricos SAO6 comprometidos con movilidad sostenible" 
                  class="img-single" 
                  width="800" 
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </article>

        </div>
      </section>

      <!-- Valores (Grid 2x2) -->
      <section class="valores seccion-animada" aria-labelledby="titulo-valores">
        <div class="contenedor">
          <div class="encabezado-valores">
            <h2 id="titulo-valores">Nuestros Valores</h2>
          </div>
          
          <div class="grid-valores" role="list">
            <article v-for="(valor, index) in valores" :key="index" class="card-valor" role="listitem">
              <div class="icono-valor-img">
                <img :src="valor.image" :alt="`Icono del valor ${valor.titulo} de SAO6`" width="150" height="150" loading="lazy" />
              </div>
              <div class="contenido-valor">
                <p>{{ valor.descripcion }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Sección Video -->
      <section class="video-operacion seccion-animada" aria-labelledby="titulo-video">
        <div class="contenedor">
          <div class="encabezado-video">
            <h2 id="titulo-video">Así Operamos</h2>
            <p>Conoce de cerca cómo transformamos la movilidad en el oriente de Medellín.</p>
          </div>
          <div class="video-container-wrapper">
            <div class="video-container">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube-nocookie.com/embed/-YH1yFPbCPA?rel=0&modestbranding=1" 
                title="Video Corporativo SAO6 - Así Operamos" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                loading="lazy"
                class="video-iframe"
              ></iframe>
            </div>
            <div class="video-decoration-circle"></div>
            <div class="video-decoration-dots"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.pagina-nosotros {
  font-family: 'Outfit', sans-serif;
  background: #fdfdfd;
  color: #1a1a1a;
}

.contenedor {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contenedor-estrecho {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* --- Hero Section --- */
.hero-nosotros {
  height: 75vh;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  object-position: center 90%;
  transform: scale(1.05) translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.3) 0%,
    rgba(0,0,0,0.6) 60%,
    rgba(20, 50, 40, 0.9) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding-top: 4rem;
}

.tag-hero {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.6rem 1.8rem;
  border-radius: 100px;
  backdrop-filter: blur(8px);
}

.hero-nosotros h1 {
  font-size: clamp(4rem, 8vw, 6.5rem);
  font-weight: 800;
  margin: 0;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #ffffff;
  text-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.linea-decorativa {
  width: 60px;
  height: 6px;
  background: #4cc253;
  margin: 2.5rem auto;
  border-radius: 3px;
}

.hero-description {
  font-size: 1.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
  max-width: 800px;
  margin: 0 auto;
}

/* --- Introducción --- */
.seccion-intro {
  padding: 10rem 0;
  text-align: center;
}

.titulo-editorial {
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 300;
  line-height: 1.3;
  color: #1a1a1a;
  margin-bottom: 2.5rem;
  letter-spacing: -0.02em;
}

.titulo-editorial .resaltado {
  font-weight: 700;
  color: #4cc253;
}

.texto-bajada {
  font-size: 1.3rem;
  line-height: 1.9;
  color: #555;
  margin-bottom: 4rem;
  font-weight: 400;
}

.firma-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.linea-firma {
  width: 40px;
  height: 2px;
  background: #4cc253;
}

.firma {
  font-size: 0.9rem;
  color: #888;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
}

/* --- Collage Section (Misión y Visión) --- */
.mision-vision {
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  gap: 10rem; /* Gran separación entre secciones */
}

.collage-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.collage-section.reverse .collage-content {
  order: 1;
}

.collage-section.reverse .collage-images {
  order: 2;
}

.collage-images {
  position: relative;
  height: 600px;
}

.img-main-wrapper {
  position: absolute;
  width: 80%;
  height: 85%;
  top: 0;
  left: 0;
  border-radius: 40px 40px 40px 0;
  overflow: hidden;
  z-index: 1;
}

.collage-section.reverse .img-main-wrapper {
  left: auto;
  right: 0;
  border-radius: 40px 40px 0 40px;
}

/* Imagen única (sin collage) */
.img-single-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.img-single {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
}

.img-main {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
}

.img-secondary-wrapper {
  position: absolute;
  width: 50%;
  height: 50%;
  bottom: 0;
  right: 0;
  border-radius: 30px;
  overflow: hidden;
  z-index: 2;
  border: 8px solid #fff;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.collage-section.reverse .img-secondary-wrapper {
  right: auto;
  left: 0;
}

.img-secondary {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
}

.collage-content {
  padding: 2rem;
}

.section-label {
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  color: #4cc253;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
}

.collage-content h2 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  line-height: 1.1;
  color: #1a1a1a;
}

.collage-content p {
  font-size: 1.3rem;
  line-height: 1.9;
  color: #555;
  margin-bottom: 2.5rem;
  font-weight: 400;
}

.year-badge {
  font-size: 1rem;
  background: #4cc253;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-weight: 800;
  vertical-align: middle;
  margin-left: 1rem;
}

/* --- Valores --- */
.valores {
  padding: 4rem 0 10rem 0;
}

.encabezado-valores {
  text-align: center;
  margin-bottom: 6rem;
}

.subtitulo {
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
  color: #4cc253;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 1rem;
}

.encabezado-valores h2 {
  font-size: 3.5rem;
  color: #1a1a1a;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.02em;
}

.grid-valores {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas */
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.card-valor {
  background: white;
  padding: 3rem;
  border-radius: 32px;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-valor:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  border-color: rgba(76, 194, 83, 0.3);
}

.icono-valor-img {
  width: 150px;
  height: 150px;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icono-valor-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
}

.card-valor:hover .icono-valor-img {
  transform: scale(1.1) rotate(-5deg);
}

.card-valor h3 {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.card-valor p {
  font-size: 1.05rem;
  color: #666;
  line-height: 1.6;
}

/* --- Video Section --- */
.video-operacion {
  padding: 0 0 10rem 0;
  position: relative;
}

.encabezado-video {
  text-align: center;
  margin-bottom: 4rem;
}

.encabezado-video h2 {
  font-size: 3rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.encabezado-video p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.video-container-wrapper {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.video-container {
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.15);
  background: #000;
  position: relative;
  z-index: 2;
  aspect-ratio: 16/9;
}

.video-decoration-circle {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #e6f7e8; /* Verde muy claro y suave */
  opacity: 0.8;
  z-index: 1;
}

.video-decoration-dots {
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 120px;
  height: 120px;
  background-image: radial-gradient(#4cc253 2px, transparent 2px);
  background-size: 20px 20px;
  opacity: 0.3;
  z-index: 1;
}

.video-iframe {
  width: 100%;
  height: 100%;
  display: block;
}



/* --- Responsive --- */
@media (max-width: 1024px) {
  .collage-section {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .collage-section.reverse .collage-content {
    order: 2;
  }
  
  .collage-section.reverse .collage-images {
    order: 1;
  }

  .collage-images {
    height: 500px;
  }
}

@media (max-width: 768px) {
  .contenedor {
    padding: 0 1.5rem;
  }

  /* Hero */
  .hero-nosotros {
    min-height: 500px;
  }

  .hero-nosotros h1 {
    font-size: 3rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
  }

  /* Intro */
  .seccion-intro {
    padding: 6rem 0;
  }

  .titulo-editorial {
    font-size: 1.75rem;
  }

  /* Misión / Visión */
  .mision-vision {
    gap: 6rem;
    padding-bottom: 4rem;
  }

  .collage-images {
    height: 350px;
  }

  .collage-content h2 {
    font-size: 2.25rem;
  }
  
  /* Valores */
  .valores {
    padding: 2rem 0 6rem 0;
  }

  .grid-valores {
    grid-template-columns: 1fr; 
    gap: 2rem;
  }

  .card-valor {
    padding: 2rem;
  }

  .icono-valor-img {
    width: 110px;
    height: 110px;
    margin-bottom: 1.5rem;
  }

  /* Video */
  .encabezado-video h2 {
    font-size: 2.25rem;
  }
  
  .video-operacion {
    padding-bottom: 6rem;
  }
}

/* Breakpoint para móviles medianos */
@media (max-width: 640px) {
  .hero-nosotros h1 {
    font-size: 2.5rem;
  }

  .tag-hero {
    font-size: 0.75rem;
    padding: 0.5rem 1.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .seccion-intro {
    padding: 4rem 0;
  }

  .titulo-editorial {
    font-size: 1.6rem;
  }

  .texto-bajada {
    font-size: 1.05rem;
  }

  .collage-content h2 {
    font-size: 2rem;
  }

  .collage-content p {
    font-size: 1rem;
  }

  .encabezado-valores h2 {
    font-size: 2.5rem;
  }

  .card-valor p {
    font-size: 0.95rem;
  }
}

/* Breakpoint para móviles muy pequeños */
@media (max-width: 480px) {
  .contenedor,
  .contenedor-estrecho {
    padding: 0 1rem;
  }

  .hero-nosotros {
    min-height: 450px;
  }

  .hero-nosotros h1 {
    font-size: 2.2rem;
  }

  .linea-decorativa {
    width: 40px;
    height: 4px;
    margin: 1.5rem auto;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .seccion-intro {
    padding: 3rem 0;
  }

  .titulo-editorial {
    font-size: 1.4rem;
  }

  .texto-bajada {
    font-size: 1rem;
    margin-bottom: 3rem;
  }

  .mision-vision {
    gap: 4rem;
    padding-bottom: 3rem;
  }

  .collage-images {
    height: 280px;
  }

  .collage-content {
    padding: 1rem;
  }

  .collage-content h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .section-label {
    font-size: 0.8rem;
  }

  .year-badge {
    font-size: 0.85rem;
    padding: 0.3rem 0.8rem;
  }

  .valores {
    padding: 1.5rem 0 4rem 0;
  }

  .encabezado-valores {
    margin-bottom: 3rem;
  }

  .encabezado-valores h2 {
    font-size: 2rem;
  }

  .subtitulo {
    font-size: 0.8rem;
  }

  .grid-valores {
    gap: 1.5rem;
  }

  .card-valor {
    padding: 1.5rem;
  }

  .icono-valor-img {
    width: 90px;
    height: 90px;
    margin-bottom: 1rem;
  }

  .card-valor p {
    font-size: 0.9rem;
  }

  .video-operacion {
    padding-bottom: 4rem;
  }

  .encabezado-video {
    margin-bottom: 2rem;
  }

  .encabezado-video h2 {
    font-size: 1.8rem;
  }

  .encabezado-video p {
    font-size: 1rem;
  }

  .video-decoration-circle,
  .video-decoration-dots {
    display: none;
  }
}
</style>
