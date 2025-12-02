<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Usamos matchMedia para que la animación solo ocurra en desktop
  const mm = gsap.matchMedia()

  mm.add("(min-width: 769px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.seccion-nosotros',
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play reverse play reverse'
      }
    })

    tl.from('.imagen-lado', {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.contenido-lado > *', {
      x: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.6')
  })
})
</script>

<template>
  <section class="seccion-nosotros" id="nosotros">
    <div class="contenedor">
      <div class="card-nosotros">
        <div class="imagen-lado">
          <div class="imagen-gradient"></div>
          <img 
            src="/images/imagenSAO62.jpg" 
            alt="Transporte SAO"
            loading="eager"
            fetchpriority="high"
          />
        </div>

        <div class="contenido-lado">
          <div class="encabezado">
            <span class="tag-nosotros">Nuestra Esencia</span>
            <h2 class="titulo">Quiénes Somos</h2>
          </div>

          <p class="texto-principal">
            Somos una organización líder dedicada al <strong>Transporte Masivo de Pasajeros</strong>, integrando tecnología y sostenibilidad en el <strong>Valle de Aburrá (SITVA)</strong>.
          </p>
          
          <p class="texto-secundario">
            Nuestro compromiso va más allá de mover personas; conectamos vidas con un enfoque de <strong>mejoramiento continuo</strong> y gestión integral. Garantizamos la <strong>confiabilidad y satisfacción</strong> de nuestros usuarios, impulsados por prácticas ambientales responsables que cuidan nuestro futuro.
          </p>

          <div class="firma-empresa">
            <div class="logo-wrapper">
              <img src="/LOGOSAO6.svg" alt="SAO Logo" class="logo-sao" />
            </div>
            <div class="info-empresa">
              <h3>Sistemas Alimentador Oriental S.A.S</h3>
              <span class="subtexto">Innovación en cada kilómetro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.seccion-nosotros {
  padding: 8rem 0;
  background-color: #ffffff;
  font-family: 'Outfit', sans-serif;
  overflow: hidden;
}

.contenedor {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.card-nosotros {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 8rem;
  align-items: center;
}

.imagen-lado {
  position: relative;
  border-radius: 32px;
  height: 650px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.imagen-lado img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
  display: block;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.imagen-lado:hover img {
  transform: scale(1.03);
}

.imagen-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.2), transparent);
  border-radius: 32px;
  z-index: 1;
  pointer-events: none;
}

/* Contenido */
.contenido-lado {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 2rem;
}

.encabezado {
  margin-bottom: 2.5rem;
}

.tag-nosotros {
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

.titulo {
  font-family: 'Outfit', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.texto-principal {
  font-size: 1.35rem;
  line-height: 1.5;
  color: #2d3748;
  margin-bottom: 2rem;
  font-weight: 500;
}

.texto-secundario {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #64748b;
  margin-bottom: 3.5rem;
  font-weight: 400;
}

.texto-principal strong,
.texto-secundario strong {
  color: #2c5f5d;
  font-weight: 700;
}

/* Firma */
.firma-empresa {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2.5rem;
  border-top: 1px solid #e2e8f0;
}

.logo-wrapper {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  border-radius: 12px;
  padding: 8px;
}

.logo-sao {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.info-empresa h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.25rem 0;
}

.subtexto {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 1280px) {
  .card-nosotros {
    gap: 4rem;
    grid-template-columns: 1fr 1fr;
  }
  
  .titulo {
    font-size: 3.5rem;
  }
}

@media (max-width: 1024px) {
  .card-nosotros {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .imagen-lado {
    height: 450px;
    order: -1;
  }
  
  .contenido-lado {
    padding-right: 0;
  }

  .titulo {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .seccion-nosotros {
    padding: 6rem 0;
  }

  .imagen-lado {
    height: 350px;
  }
  
  .titulo {
    font-size: 2.5rem;
  }

  .texto-principal {
    font-size: 1.15rem;
  }
}
</style>
