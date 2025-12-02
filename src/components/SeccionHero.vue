<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // Animación simple y elegante de entrada
  const tl = gsap.timeline()
  
  tl.fromTo('.tarjeta-hero', 
    {
      opacity: 0,
      y: 30
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }
  )
  
  // Entrada del título
  .fromTo('.titulo-principal',
    {
      opacity: 0,
      y: 20
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    },
    '-=0.4'
  )
  
  // Entrada de la descripción
  .fromTo('.descripcion',
    {
      opacity: 0,
      y: 15
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    },
    '-=0.3'
  )
  
  // Entrada de los botones
  .fromTo('.botones-accion', 
    {
      opacity: 0,
      y: 15
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    },
    '-=0.3'
  )
})
</script>

<template>
  <section class="seccion-hero" id="inicio">
    <div class="contenedor-hero">
      <div class="tarjeta-hero">
        <div class="contenido-hero">

          <h1 class="titulo-principal">
            <span class="titulo-linea">Bienvenido al</span>
            <span class="titulo-linea destacado">Sistema Alimentador</span>
            <span class="titulo-linea destacado">Oriental.</span>
          </h1>

          <div class="boton-contenedor boton-desktop">
            <router-link to="/rutas" class="boton-principal">
              <span>Explora nuestras rutas</span>
              <div class="icono-flecha">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </router-link>
          </div>

          <div class="descripcion-contenedor">
            <p class="descripcion">
              Vive una experiencia de transporte cercana, segura y pensada para lo que te mueve — viaja con confianza por toda Medellín.
            </p>
          </div>

        </div>
      </div>

      <div class="boton-contenedor-mobile">
        <router-link to="/rutas" class="boton-principal">
          <span>Explora nuestras rutas</span>
          <div class="icono-flecha">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

.seccion-hero {
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0 1rem 0;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
}

.contenedor-hero {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.tarjeta-hero {
  background-image: url('/SAO6.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 28px;
  padding: 5rem 5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  min-height: 560px;
  aspect-ratio: 1478 / 719;
  will-change: transform, background-position;
}

.tarjeta-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 68, 67, 0.25);
  pointer-events: none;
}

.contenido-hero {
  position: relative;
  z-index: 1;
  max-width: 750px;
}

.titulo-principal {
  font-family: 'Outfit', sans-serif;
  font-size: 3.75rem;
  line-height: 1.1;
  margin: 0 0 2.25rem 0;
  font-weight: 400;
  letter-spacing: -0.02em;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.titulo-linea {
  color: #ffffff;
  font-weight: 400;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
}

.titulo-linea.destacado {
  font-weight: 600;
}

.boton-contenedor {
  margin-bottom: 2.75rem;
}

.boton-contenedor-mobile {
  display: none;
}

.boton-principal {
  display: inline-flex;
  align-items: center;
  gap: 0;
  background: white;
  color: #1f2937;
  padding: 0.875rem 1.25rem;
  padding-right: 0.875rem;
  border-radius: 50px;
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12);
}

.boton-principal span {
  margin-right: 0.625rem;
  letter-spacing: -0.01em;
}

.icono-flecha {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #4cc253;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}

.icono-flecha svg {
  color: white;
  width: 18px;
  height: 18px;
  transition: transform 0.25s ease;
}

.boton-principal:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.18);
}

.boton-principal:hover .icono-flecha {
  background: #45b34a;
  transform: scale(1.05);
}

.boton-principal:hover .icono-flecha svg {
  transform: translateX(2px);
}

.descripcion-contenedor {
  max-width: 550px;
  position: relative;
  padding-left: 1.5rem;
}

.descripcion-contenedor::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 2px;
}

.descripcion {
  font-family: 'Outfit', sans-serif;
  font-size: 1.0625rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  letter-spacing: -0.01em;
}


/* Tablet y pantallas medianas */
@media (max-width: 1024px) {
  .seccion-hero {
    padding: 5rem 0 1.5rem 0;
    min-height: auto;
  }

  .contenedor-hero {
    padding: 0 1.5rem;
  }

  .tarjeta-hero {
    padding: 3.5rem 3rem;
    min-height: 420px;
    aspect-ratio: auto;
    border-radius: 24px;
  }

  .titulo-principal {
    font-size: 3rem;
    line-height: 1.15;
    margin-bottom: 1.75rem;
  }

  .boton-contenedor {
    margin-bottom: 2.25rem;
  }

  .descripcion {
    font-size: 1rem;
    line-height: 1.65;
  }

  .contenido-hero {
    max-width: 100%;
  }

  .descripcion-contenedor {
    max-width: 90%;
  }
}

/* Móvil y pantallas pequeñas */
@media (max-width: 768px) {
  .seccion-hero {
    padding: 4.5rem 0 1.5rem 0;
    min-height: auto;
  }

  .contenedor-hero {
    padding: 0 1rem;
  }

  .tarjeta-hero {
    padding: 2.5rem 1.75rem;
    border-radius: 20px;
    min-height: 420px;
    aspect-ratio: auto;
    background-position: 65% center;
  }

  .contenido-hero {
    position: static;
  }

  .titulo-principal {
    font-size: 2.25rem;
    line-height: 1.2;
    margin-bottom: 0;
  }

  .boton-desktop {
    display: none;
  }

  .boton-contenedor-mobile {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    width: 100%;
  }

  .boton-principal {
    width: 100%;
    justify-content: center;
    gap: 1rem;
    padding: 0.875rem;
    font-size: 0.875rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .icono-flecha {
    width: 2.125rem;
    height: 2.125rem;
  }

  .icono-flecha svg {
    width: 16px;
    height: 16px;
  }

  /* Ocultar descripción en móviles */
  .descripcion-contenedor {
    display: none;
  }
}

/* Móviles muy pequeños */
@media (max-width: 480px) {
  .seccion-hero {
    padding: 4rem 0 1rem 0;
  }

  .contenedor-hero {
    padding: 0 0.875rem;
  }

  .tarjeta-hero {
    padding: 2rem 1.5rem;
    border-radius: 18px;
    min-height: 360px;
    background-position: 70% center;
  }

  .contenido-hero {
    position: static;
  }

  .titulo-principal {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 0;
  }

  .boton-contenedor-mobile {
    margin-top: 1.25rem;
  }

  .boton-principal {
    padding: 0.8125rem;
    gap: 0.75rem;
    font-size: 0.8125rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .boton-principal span {
    margin-right: 0.5rem;
  }

  .icono-flecha {
    width: 2rem;
    height: 2rem;
  }

  .icono-flecha svg {
    width: 15px;
    height: 15px;
  }

  /* Descripción oculta en móviles */
  .descripcion-contenedor {
    display: none;
  }
}
</style>
