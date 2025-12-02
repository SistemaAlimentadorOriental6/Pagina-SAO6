<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBgImage from '../assets/images/runner-sao6.jpg'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Noticias',
  meta: [
    { name: 'description', content: 'Mantente informado con las últimas noticias de SAO6. Avances en flota eléctrica, cambios en rutas y comunicados importantes.' }
  ],
  script: [
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
            "name": "Noticias",
            "item": "https://www.sao6.com/noticias"
          }
        ]
      })
    }
  ]
})

gsap.registerPlugin(ScrollTrigger)

const tituloHero = ref<HTMLElement | null>(null)
const router = useRouter()

// Datos de la noticia única
const noticias = [
  {
    id: 1,
    titulo: 'Sistema alimentador de buses del oriente de Medellín presentó su primer vehículo eléctrico',
    resumen: 'El sistema alimentador oriental presentó la estrategia de movilidad eléctrica con el primer bus de este tipo, equipado con alta tecnología que ya circula en la ciudad.',
    categoria: 'Noticias',
    autor: 'Noticias Telemedellín',
    imagen: '/images/buselectricosao6.jpg',
    fecha: '27 Nov 2025',
    ruta: '/noticias/detalle-bus-electrico'
  }
]

const irADetalle = (ruta: string) => {
  router.push(ruta)
}

onMounted(() => {
  // Hero Animation
  if (tituloHero.value) {
    gsap.from(tituloHero.value, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })
  }

  // News Grid Animation
  gsap.from('.card-noticia', {
    scrollTrigger: {
      trigger: '.grid-noticias',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="pagina-noticias">
    
    <!-- Hero Section -->
    <section class="hero-noticias">
      <div class="hero-bg-wrapper">
        <img :src="heroBgImage" alt="Noticias SAO6" class="hero-bg" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="hero-content">
        <div class="hero-text-container">
          <span class="tag-hero">Actualidad & Comunicados</span>
          <h1 ref="tituloHero">Noticias</h1>
          <div class="linea-decorativa"></div>
          <p class="hero-description">
            Mantente informado sobre las últimas novedades, avances y eventos de nuestra organización.
          </p>
        </div>
      </div>
    </section>

    <!-- News Grid Section -->
    <section class="contenido-noticias">
      <div class="contenedor">
        <div class="grid-noticias">
          <article v-for="noticia in noticias" :key="noticia.id" class="card-noticia">
            <div class="imagen-wrapper">
              <img 
                :data-src="noticia.imagen" 
                :alt="noticia.titulo" 
                class="imagen-noticia" 
                v-lazy
                width="400"
                height="240"
              />
              <div class="categoria-badge">{{ noticia.categoria }}</div>
            </div>
            <div class="contenido-card">
              <div class="meta-info">
                <span class="fecha">{{ noticia.fecha }}</span>
                <span class="autor-mini">Por: {{ noticia.autor }}</span>
              </div>
              <h3>{{ noticia.titulo }}</h3>
              <p>{{ noticia.resumen }}</p>
              <button @click="irADetalle(noticia.ruta)" class="leer-mas">
                Leer más
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.pagina-noticias {
  font-family: 'Outfit', sans-serif;
  background: #fdfdfd;
  color: #1a1a1a;
}

.contenedor {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* --- Hero Section --- */
.hero-noticias {
  height: 60vh;
  min-height: 500px;
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
  object-position: center;
  transform: scale(1.05);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.4) 0%,
    rgba(0,0,0,0.7) 100%
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
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.6rem 1.8rem;
  border-radius: 100px;
  backdrop-filter: blur(8px);
}

.hero-noticias h1 {
  font-size: clamp(3.5rem, 6vw, 5rem);
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
  margin: 2rem auto;
  border-radius: 3px;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
}

/* --- News Content --- */
.contenido-noticias {
  padding: 6rem 0 10rem 0;
}

.grid-noticias {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
}

.card-noticia {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
}

.card-noticia:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border-color: rgba(76, 194, 83, 0.2);
}

.imagen-wrapper {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.imagen-noticia {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.card-noticia:hover .imagen-noticia {
  transform: scale(1.1);
}

.categoria-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  color: #4cc253;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.contenido-card {
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: #888;
}

.fecha {
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.autor-mini {
  font-style: italic;
}

.card-noticia h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  color: #1a1a1a;
}

.card-noticia p {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
  flex: 1;
}

.leer-mas {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #4cc253;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.95rem;
  transition: gap 0.3s ease;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.leer-mas:hover {
  gap: 0.8rem;
  color: #3da542;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-noticias h1 {
    font-size: 3rem;
  }
  
  .grid-noticias {
    grid-template-columns: 1fr;
  }
}
</style>
