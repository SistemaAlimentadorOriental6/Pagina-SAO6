<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useHead } from '@vueuse/head'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Noticia {
  id: number
  titulo: string
  descripcion: string
  categoria: string
  imagen: string
  fuente?: string
  link?: string
  fechaPublicacion?: string
  autor?: string
}

const noticias = ref<Noticia[]>([
  {
    id: 1,
    titulo: 'Primer Bus Eléctrico del Oriente',
    descripcion: 'El Sistema Alimentador Oriental presenta su primer vehículo 100% eléctrico, diseñado específicamente para la topografía de Medellín. Con tecnología regenerativa y alta eficiencia, este hito marca el inicio de la renovación de nuestra flota hacia una movilidad más sostenible.',
    categoria: 'SOSTENIBILIDAD',
    imagen: '/images/buselectricosao6.jpg',
    fuente: 'Noticias Telemedellín',
    link: '/noticias/bus-electrico-sao6-medellin-movilidad-sostenible',
    fechaPublicacion: '2024-11-15',
    autor: 'SAO6 Comunicaciones'
  }
])

const noticiaActual = ref(0)
let intervalo: number | null = null

// Datos estructurados JSON-LD para mejorar SEO
const datosEstructurados = computed(() => {
  const noticia = noticias.value[noticiaActual.value]
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    'headline': noticia.titulo,
    'description': noticia.descripcion,
    'image': {
      '@type': 'ImageObject',
      'url': noticia.imagen,
      'width': 800,
      'height': 400
    },
    'datePublished': noticia.fechaPublicacion || new Date().toISOString().split('T')[0],
    'dateModified': noticia.fechaPublicacion || new Date().toISOString().split('T')[0],
    'author': {
      '@type': 'Person',
      'name': noticia.autor || 'SAO6 Comunicaciones'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'SAO6 - Sistema Alimentador Oriental',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://sao6.com.co/logo.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://sao6.com.co${noticia.link}`
    },
    'articleSection': noticia.categoria,
    'keywords': ['SAO6', 'bus eléctrico', 'movilidad sostenible', 'Medellín', 'transporte público']
  }
})

// Inyectar JSON-LD y meta tags en el head
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(datosEstructurados.value)
    }
  ]
})

const siguienteNoticia = () => {
  if (noticias.value.length <= 1) return
  const siguiente = (noticiaActual.value + 1) % noticias.value.length
  cambiarNoticia(siguiente)
}

const anteriorNoticia = () => {
  if (noticias.value.length <= 1) return
  const anterior = (noticiaActual.value - 1 + noticias.value.length) % noticias.value.length
  cambiarNoticia(anterior)
}

const cambiarNoticia = (index: number) => {
  const tl = gsap.timeline()
  
  tl.to(['.imagen-noticia', '.contenido-noticia'], {
    opacity: 0,
    y: 20,
    duration: 0.3,
    ease: 'power2.in',
    stagger: 0.05
  })
  .call(() => {
    noticiaActual.value = index
  })
  .to(['.imagen-noticia', '.contenido-noticia'], {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: 'power2.out',
    stagger: 0.05
  })
}

const iniciarAutoplay = () => {
  if (noticias.value.length > 1) {
    intervalo = window.setInterval(siguienteNoticia, 5000)
  }
}

const detenerAutoplay = () => {
  if (intervalo) {
    clearInterval(intervalo)
    intervalo = null
  }
}

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.seccion-noticias',
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  })

  tl.from('.encabezado-seccion', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  })
  .from('.lado-contenido', {
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .from('.lado-imagen-fija', {
    opacity: 0,
    x: 30,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  
  iniciarAutoplay()
})

onUnmounted(() => {
  detenerAutoplay()
})
</script>

<template>
  <section class="seccion-noticias" id="noticias" aria-label="Sección de últimas noticias de SAO6">
    <div class="contenedor">
      
      <!-- Encabezado -->
      <header class="encabezado-seccion">
        <span class="tag-seccion">Actualidad</span>
        <h2 class="titulo-principal">Últimas Noticias</h2>
        <p class="subtitulo-seccion">Mantente informado sobre nuestros avances en movilidad sostenible</p>
      </header>

      <div class="contenedor-noticias">
        <!-- Columna Izquierda: Noticia Dinámica -->
        <article 
          class="lado-contenido" 
          @mouseenter="detenerAutoplay" 
          @mouseleave="iniciarAutoplay"
          itemscope 
          itemtype="https://schema.org/NewsArticle"
        >
          <figure class="imagen-noticia">
            <img 
              :src="noticias[noticiaActual].imagen"
              :alt="`${noticias[noticiaActual].titulo} - ${noticias[noticiaActual].categoria} - SAO6 Sistema Alimentador Oriental`"
              class="img-card"
              itemprop="image"
              loading="lazy"
              width="800"
              height="400"
            />
            <div class="overlay-card"></div>
            <span class="categoria-tag" aria-label="Categoría de la noticia">{{ noticias[noticiaActual].categoria }}</span>
          </figure>

          <div class="contenido-noticia">
            <h3 class="titulo-noticia" itemprop="headline">{{ noticias[noticiaActual].titulo }}</h3>
            <p class="descripcion-noticia" itemprop="description">{{ noticias[noticiaActual].descripcion }}</p>
            
            <div class="footer-noticia">
              <address v-if="noticias[noticiaActual].fuente" class="fuente-noticia">
                Fuente: <span itemprop="publisher">{{ noticias[noticiaActual].fuente }}</span>
              </address>

              <router-link 
                :to="noticias[noticiaActual].link || '/noticias/detalle-bus-electrico'" 
                class="btn-leer-mas"
                :aria-label="`Leer noticia completa: ${noticias[noticiaActual].titulo}`"
              >
                Ver noticia completa
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>

            <!-- Controles si hay más de una noticia -->
            <nav class="controles-navegacion" v-if="noticias.length > 1" aria-label="Navegación de noticias">
              <button @click="anteriorNoticia" class="btn-nav" aria-label="Noticia anterior" type="button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <div class="indicadores" role="tablist" aria-label="Indicadores de noticias">
                <button
                  v-for="(noticia, index) in noticias"
                  :key="noticia.id"
                  @click="cambiarNoticia(index)"
                  :class="['indicador', { activo: index === noticiaActual }]"
                  role="tab"
                  type="button"
                  :aria-selected="index === noticiaActual"
                  :aria-label="`Ir a noticia ${index + 1} de ${noticias.length}`"
                ></button>
              </div>
              <button @click="siguienteNoticia" class="btn-nav" aria-label="Noticia siguiente" type="button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </nav>

            <!-- Fecha de publicación oculta para SEO -->
            <time v-if="noticias[noticiaActual].fechaPublicacion" :datetime="noticias[noticiaActual].fechaPublicacion" itemprop="datePublished" class="fecha-publicacion visually-hidden">
              {{ noticias[noticiaActual].fechaPublicacion }}
            </time>
          </div>
        </article>

        <!-- Columna Derecha: Video Fijo -->
        <aside class="lado-imagen-fija" aria-label="Video institucional del equipo de comunicaciones">
          <video 
            class="video-fijo"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            disablePictureInPicture
            @contextmenu.prevent
            aria-label="Video del profesional de comunicaciones SAO6"
          >
            <source src="/videos/comunicadorsao6.mp4" type="video/mp4">
            Tu navegador no soporta el elemento de video.
          </video>
          <div class="overlay-imagen"></div>
          
          <div class="contenido-tarjeta-derecha">
            <div class="comillas" aria-hidden="true">"</div>
            <p class="frase-destacada">
              Las últimas noticias para que estés al tanto de nosotros.
            </p>
            
            <div class="info-autor">
              <p class="cargo-autor">PROFESIONAL DE COMUNICACIÓN</p>
              <h4 class="nombre-autor">JOSE LUIS MARTINEZ PEREZ</h4>
            </div>
          </div>
        </aside>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

/* Utilidad para ocultar elementos pero mantenerlos para SEO */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.seccion-noticias {
  padding: 8rem 0;
  background: #ffffff;
  font-family: 'Outfit', sans-serif;
}

.contenedor {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Encabezado */
.encabezado-seccion {
  text-align: center;
  margin-bottom: 6rem;
}

.tag-seccion {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 700;
  color: #2c5f5d;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 1rem;
  background: rgba(44, 95, 93, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 50px;
}

.titulo-principal {
  font-family: 'Outfit', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.subtitulo-seccion {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grid Layout */
.contenedor-noticias {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: start;
}

/* Columna Izquierda */
.lado-contenido {
  display: flex;
  flex-direction: column;
  height: auto; 
  justify-content: flex-start;
}

.imagen-noticia {
  position: relative;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  margin: 0 0 2.5rem 0;
}

.img-card {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.imagen-noticia:hover .img-card {
  transform: scale(1.05);
}

.overlay-card {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.2) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.imagen-noticia:hover .overlay-card {
  opacity: 1;
}

.categoria-tag {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  color: #2c5f5d;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.imagen-noticia:hover .categoria-tag {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.contenido-noticia {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.titulo-noticia {
  font-size: 2.5rem;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.descripcion-noticia {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #4b5563;
  margin: 0 0 2rem 0;
}

.footer-noticia {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.fuente-noticia {
  font-size: 0.875rem;
  color: #9ca3af;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
  font-style: normal;
}

.btn-leer-mas {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: #4cc253;
  color: white;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(76, 194, 83, 0.25);
}

.btn-leer-mas:hover {
  background: #3da542;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(76, 194, 83, 0.3);
}

.btn-leer-mas:focus-visible {
  outline: 2px solid #4cc253;
  outline-offset: 2px;
}

.btn-leer-mas svg {
  transition: transform 0.3s ease;
}

.btn-leer-mas:hover svg {
  transform: translateX(4px);
}

/* Columna Derecha */
.lado-imagen-fija {
  position: relative;
  height: 700px;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 2rem;
}

.video-fijo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
}

.overlay-imagen {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(44, 95, 93, 0.8) 100%
  );
  z-index: 1;
}

.contenido-tarjeta-derecha {
  position: absolute;
  inset: 0;
  z-index: 2;
  padding: 3rem;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
}

.comillas {
  font-size: 6rem;
  font-family: Georgia, serif;
  line-height: 1;
  opacity: 0.5;
  margin-bottom: -1rem;
  color: white;
}

.frase-destacada {
  font-size: 1.75rem;
  line-height: 1.3;
  font-weight: 500;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  color: #ffffff !important;
}

.info-autor {
  border-top: 1px solid rgba(255,255,255,0.3);
  padding-top: 1.5rem;
}

.cargo-autor {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.nombre-autor {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: white;
}

/* Controles */
.controles-navegacion {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.btn-nav {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: white;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.btn-nav:hover {
  background: #4cc253;
  border-color: #4cc253;
  color: white;
  transform: scale(1.05);
}

.btn-nav:focus-visible {
  outline: 2px solid #4cc253;
  outline-offset: 2px;
}

.indicadores {
  flex: 1;
  display: flex;
  gap: 0.5rem;
}

.indicador {
  height: 4px;
  flex: 1;
  background: #e5e7eb;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicador:hover {
  background: #cbd5e0;
}

.indicador.activo {
  background: #4cc253;
}

.indicador:focus-visible {
  outline: 2px solid #4cc253;
  outline-offset: 2px;
}

/* ========= Responsive Mejorado ========= */

/* Pantallas grandes (Desktop) */
@media (max-width: 1280px) {
  .titulo-principal {
    font-size: 3.5rem;
  }
  
  .contenedor {
    padding: 0 1.5rem;
  }
  
  .contenedor-noticias {
    gap: 3.5rem;
  }
}

/* Tablets */
@media (max-width: 1024px) {
  .seccion-noticias {
    padding: 6rem 0;
  }
  
  .contenedor-noticias {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .lado-imagen-fija {
    height: 500px;
    order: -1;
    position: static;
    border-radius: 28px;
  }

  .titulo-principal {
    font-size: 3rem;
  }
  
  .encabezado-seccion {
    margin-bottom: 4rem;
  }
  
  .imagen-noticia {
    height: 350px;
  }
}

/* Móviles grandes */
@media (max-width: 768px) {
  .seccion-noticias {
    padding: 5rem 0;
  }

  .contenedor {
    padding: 0 1.25rem;
  }
  
  .encabezado-seccion {
    margin-bottom: 3rem;
  }
  
  .subtitulo-seccion {
    font-size: 1rem;
  }

  .titulo-principal {
    font-size: 2.5rem;
  }

  .imagen-noticia {
    height: 280px;
    margin-bottom: 2rem;
  }

  .titulo-noticia {
    font-size: 1.875rem;
  }
  
  .descripcion-noticia {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .lado-contenido {
    padding: 0;
  }

  .footer-noticia {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .btn-leer-mas {
    width: 100%;
    justify-content: center;
    padding: 1rem 2rem;
  }
  
  .lado-imagen-fija {
    height: 550px;
    border-radius: 24px;
  }

  .contenido-tarjeta-derecha {
    padding: 2rem;
    padding-bottom: 2rem;
    justify-content: flex-end;
  }

  .frase-destacada {
    font-size: 1.375rem;
    line-height: 1.4;
    margin-bottom: 1.25rem;
    text-shadow: 0 2px 6px rgba(0,0,0,0.5);
  }

  .comillas {
    display: none;
  }

  .nombre-autor {
    font-size: 1.125rem;
  }
  
  .cargo-autor {
    font-size: 0.7rem;
    opacity: 0.9;
  }
  
  .overlay-imagen {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 40%,
      rgba(0, 0, 0, 0.6) 80%,
      rgba(20, 50, 48, 0.9) 100%
    );
  }
}

/* Móviles pequeños */
@media (max-width: 480px) {
  .seccion-noticias {
    padding: 4rem 0;
  }
  
  .contenedor {
    padding: 0 1rem;
  }
  
  .encabezado-seccion {
    margin-bottom: 2.5rem;
  }
  
  .tag-seccion {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
    letter-spacing: 2px;
  }

  .titulo-principal {
    font-size: 2rem;
    line-height: 1.1;
  }
  
  .subtitulo-seccion {
    font-size: 0.95rem;
    padding: 0 0.5rem;
  }

  .imagen-noticia {
    height: 240px;
    border-radius: 16px;
    margin-bottom: 1.5rem;
  }
  
  .categoria-tag {
    top: 1rem;
    left: 1rem;
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
  }

  .titulo-noticia {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
  
  .descripcion-noticia {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }

  .footer-noticia {
    margin-top: 0.5rem;
  }
  
  .fuente-noticia {
    font-size: 0.8rem;
  }

  .btn-leer-mas {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }
  
  .controles-navegacion {
    margin-top: 1.5rem;
    padding-top: 1.25rem;
  }
  
  .btn-nav {
    width: 2.25rem;
    height: 2.25rem;
  }

  .lado-imagen-fija {
    height: 480px;
    border-radius: 20px;
  }

  .contenido-tarjeta-derecha {
    padding: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .frase-destacada {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  .nombre-autor {
    font-size: 1rem;
  }
  
  .cargo-autor {
    font-size: 0.65rem;
  }
}

/* Móviles muy pequeños (< 375px) */
@media (max-width: 375px) {
  .seccion-noticias {
    padding: 3.5rem 0;
  }
  
  .contenedor {
    padding: 0 0.875rem;
  }
  
  .tag-seccion {
    font-size: 0.75rem;
    padding: 0.35rem 0.7rem;
    letter-spacing: 1.5px;
  }
  
  .titulo-principal {
    font-size: 1.75rem;
  }
  
  .subtitulo-seccion {
    font-size: 0.9rem;
  }
  
  .imagen-noticia {
    height: 220px;
  }
  
  .titulo-noticia {
    font-size: 1.375rem;
  }
  
  .descripcion-noticia {
    font-size: 0.9rem;
  }
  
  .btn-leer-mas {
    padding: 0.8rem 1.25rem;
    font-size: 0.9rem;
  }
  
  .lado-imagen-fija {
    height: 450px;
  }
  
  .frase-destacada {
    font-size: 1rem;
  }
}
</style>