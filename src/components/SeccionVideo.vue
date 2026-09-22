<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Identificador del video institucional de SAO6
const idVideo = 'SmwB4H_lnBk'

// Estado del reproductor y audio
const reproductorListo = ref(false)
const estaSilenciado = ref(false)
const estaReproduciendo = ref(false)

let reproductor: any = null

// Iniciar reproducción del video con audio habilitado
const iniciarVideo = () => {
  if (reproductor && typeof reproductor.playVideo === 'function') {
    reproductor.playVideo()
    if (typeof reproductor.unMute === 'function') {
      reproductor.unMute()
      reproductor.setVolume(100)
      estaSilenciado.value = false
    }
    estaReproduciendo.value = true
  } else {
    inicializarReproductor()
  }
}

// Carga e inicialización de la API de YouTube IFrame
const inicializarReproductor = () => {
  if (window.YT && window.YT.Player) {
    crearReproductor()
  } else {
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tagScript = document.createElement('script')
      tagScript.src = 'https://www.youtube.com/iframe_api'
      const primerScript = document.getElementsByTagName('script')[0]
      primerScript?.parentNode?.insertBefore(tagScript, primerScript)
    }

    const callbackAnterior = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      if (typeof callbackAnterior === 'function') callbackAnterior()
      crearReproductor()
    }

    const intervaloVerificacion = setInterval(() => {
      if (window.YT && window.YT.Player) {
        clearInterval(intervaloVerificacion)
        if (!reproductor) crearReproductor()
      }
    }, 150)
  }
}

// Desactivación estricta de subtítulos
const desactivarSubtitulos = (instancia: any) => {
  if (!instancia) return
  try {
    if (typeof instancia.unloadModule === 'function') {
      instancia.unloadModule('captions')
      instancia.unloadModule('cc')
    }
    if (typeof instancia.setOption === 'function') {
      instancia.setOption('captions', 'track', {})
      instancia.setOption('cc', 'track', {})
    }
  } catch {}
}

const crearReproductor = () => {
  if (reproductor) return

  reproductor = new window.YT.Player('reproductor-video-sao', {
    videoId: idVideo,
    host: 'https://www.youtube-nocookie.com',
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      cc_load_policy: 0,
      cc_lang_pref: 'none',
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      loop: 1,
      playlist: idVideo,
      playsinline: 1,
      enablejsapi: 1,
      origin: typeof window !== 'undefined' ? window.location.origin : ''
    },
    events: {
      onReady: (evento: any) => {
        reproductorListo.value = true
        evento.target.mute()
        try {
          evento.target.playVideo()
        } catch {}
        desactivarSubtitulos(evento.target)

        setTimeout(() => desactivarSubtitulos(evento.target), 1000)

        // Activa el sonido automáticamente en la primera interacción si aún no se ha activado
        const activarAudio = () => {
          if (reproductor && typeof reproductor.unMute === 'function') {
            reproductor.unMute()
            reproductor.setVolume(100)
            estaSilenciado.value = false
          }
          window.removeEventListener('click', activarAudio)
          window.removeEventListener('scroll', activarAudio)
          window.removeEventListener('touchstart', activarAudio)
        }

        window.addEventListener('click', activarAudio, { once: true })
        window.addEventListener('scroll', activarAudio, { once: true })
        window.addEventListener('touchstart', activarAudio, { once: true })
      },
      onApiChange: (evento: any) => desactivarSubtitulos(evento.target),
      onStateChange: (evento: any) => {
        if (evento.data === window.YT.PlayerState.PLAYING) {
          estaReproduciendo.value = true
          desactivarSubtitulos(evento.target)
        } else if (
          evento.data === window.YT.PlayerState.PAUSED ||
          evento.data === window.YT.PlayerState.ENDED ||
          evento.data === window.YT.PlayerState.UNSTARTED ||
          evento.data === window.YT.PlayerState.CUED
        ) {
          estaReproduciendo.value = false
        }
      },
      onError: () => {
        estaReproduciendo.value = false
      }
    }
  })
}

// Alternar silenciar y activar sonido
const alternarSilencio = () => {
  if (!reproductor || !reproductorListo.value) return

  if (estaSilenciado.value) {
    reproductor.unMute()
    reproductor.setVolume(100)
    estaSilenciado.value = false
  } else {
    reproductor.mute()
    estaSilenciado.value = true
  }
}

onMounted(() => {
  inicializarReproductor()

  // Animación de entrada consistente con las demás secciones
  const mm = gsap.matchMedia()
  mm.add('(min-width: 769px)', () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.seccion-video',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.from('.encabezado-video > *', {
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out'
    })
    .from('.tarjeta-video', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4')
  })
})

onUnmounted(() => {
  if (reproductor && reproductor.destroy) {
    reproductor.destroy()
  }
})

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}
</script>

<template>
  <section class="seccion-video" id="video-institucional">
    <div class="contenedor">
      
      <!-- Encabezado con la identidad visual de SAO6 -->
      <div class="encabezado-video">
        <span class="tag-seccion">Nuestra Esencia</span>
        <h2 class="titulo-seccion">Somos el Sistema Alimentador Oriental</h2>
        <p class="texto-descripcion">
          Movilizamos los sueños de las familias de la <strong>zona oriental y nororiental de Medellín</strong>, 
          de manera cercana, segura, confiable y comprometida con el desarrollo social y sostenible de nuestra ciudad.
        </p>
      </div>

      <!-- Contenedor del video con acabados de alta gama -->
      <div class="tarjeta-video">
        <div class="contenedor-reproductor">
          <!-- Video de YouTube incrustado sin barras ni bordes -->
          <div id="reproductor-video-sao" class="iframe-video-sao"></div>

          <!-- Capa protectora para asegurar reproducción continua -->
          <div class="capa-bloqueo"></div>

          <!-- Capa y botón para iniciar el video si no arrancó automáticamente -->
          <Transition name="desvanecer">
            <div 
              v-if="!estaReproduciendo" 
              class="capa-iniciar"
              @click="iniciarVideo"
            >
              <button 
                type="button" 
                class="boton-iniciar-video" 
                @click.stop="iniciarVideo"
                aria-label="Iniciar video"
              >
                <span class="texto-iniciar">Iniciar video</span>
                <div class="icono-iniciar-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </button>
            </div>
          </Transition>

          <!-- Botón de sonido con el diseño corporativo oficial de SAO6 -->
          <button 
            type="button" 
            class="boton-audio-sao" 
            @click.stop="alternarSilencio"
            :aria-label="estaSilenciado ? 'Activar sonido' : 'Silenciar video'"
          >
            <span class="texto-boton">{{ estaSilenciado ? 'Activar sonido' : 'Silenciar' }}</span>
            <div class="icono-audio-wrapper">
              <!-- Con Sonido -->
              <svg v-if="!estaSilenciado" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
              <!-- Silenciado -->
              <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            </div>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.seccion-video {
  padding: 5rem 0 6rem 0;
  background-color: #ffffff;
  font-family: 'Outfit', sans-serif;
  overflow: hidden;
}

.contenedor {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Encabezado con los mismos patrones y jerarquía del sitio */
.encabezado-video {
  margin-bottom: 2.75rem;
  max-width: 900px;
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

.titulo-seccion {
  font-family: 'Outfit', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 1.25rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.texto-descripcion {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #4b5563;
  margin: 0;
  font-weight: 400;
}

.texto-descripcion strong {
  color: #2c5f5d;
  font-weight: 700;
}

/* Tarjeta del video a todo el ancho del contenedor */
.tarjeta-video {
  position: relative;
  width: 100%;
  border-radius: 32px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  background: #0d1f1e;
  border: none;
  outline: none;
}

.contenedor-reproductor {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #000000;
}

:deep(.iframe-video-sao),
.iframe-video-sao {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  pointer-events: none;
}

.capa-bloqueo {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

/* Capa y botón para iniciar el video si no arrancó automáticamente */
.capa-iniciar {
  position: absolute;
  inset: 0;
  z-index: 4;
  background: rgba(13, 31, 30, 0.45);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.boton-iniciar-video {
  display: inline-flex;
  align-items: center;
  gap: 0;
  background: #ffffff;
  color: #1f2937;
  padding: 0.75rem 0.875rem 0.75rem 1.625rem;
  border-radius: 50px;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition: all 0.25s ease;
  user-select: none;
  animation: pulso-boton 2.4s infinite ease-in-out;
}

.texto-iniciar {
  margin-right: 0.875rem;
  letter-spacing: -0.01em;
  color: #1a1a1a;
}

.icono-iniciar-wrapper {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: #4cc253;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}

.icono-iniciar-wrapper svg {
  width: 18px;
  height: 18px;
  color: #ffffff;
  margin-left: 2px;
  transition: transform 0.25s ease;
}

.boton-iniciar-video:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
}

.boton-iniciar-video:hover .icono-iniciar-wrapper {
  background: #45b34a;
  transform: scale(1.08);
}

.boton-iniciar-video:active {
  transform: translateY(0) scale(0.98);
}

@keyframes pulso-boton {
  0%, 100% {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35), 0 0 0 0 rgba(76, 194, 83, 0.5);
  }
  50% {
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4), 0 0 0 12px rgba(76, 194, 83, 0);
  }
}

/* Transición suave para ocultar o mostrar el botón */
.desvanecer-enter-active,
.desvanecer-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.desvanecer-enter-from,
.desvanecer-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

/* Botón de sonido con el diseño corporativo de SAO6 */
.boton-audio-sao {
  position: absolute;
  bottom: 1.75rem;
  right: 1.75rem;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  gap: 0;
  background: #ffffff;
  color: #1f2937;
  padding: 0.5rem 0.625rem 0.5rem 1.25rem;
  border-radius: 50px;
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 0.9375rem;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease;
  user-select: none;
}

.texto-boton {
  margin-right: 0.75rem;
  letter-spacing: -0.01em;
}

.icono-audio-wrapper {
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 50%;
  background: #4cc253;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}

.icono-audio-wrapper svg {
  width: 16px;
  height: 16px;
  color: #ffffff;
  transition: transform 0.25s ease;
}

.boton-audio-sao:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
}

.boton-audio-sao:hover .icono-audio-wrapper {
  background: #45b34a;
  transform: scale(1.05);
}

.boton-audio-sao:active {
  transform: translateY(0);
}

/* Tablet */
@media (max-width: 1024px) {
  .seccion-video {
    padding: 4rem 0 5rem 0;
  }

  .titulo-seccion {
    font-size: 2.75rem;
  }

  .texto-descripcion {
    font-size: 1.1rem;
  }

  .tarjeta-video {
    border-radius: 24px;
  }
}

/* Móvil */
@media (max-width: 768px) {
  .seccion-video {
    padding: 3rem 0 3.5rem 0;
  }

  .contenedor {
    padding: 0 1rem;
  }

  .encabezado-video {
    margin-bottom: 1.75rem;
  }

  .tag-seccion {
    font-size: 0.8rem;
    letter-spacing: 2px;
    padding: 0.4rem 0.85rem;
  }

  .titulo-seccion {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 0.75rem;
  }

  .texto-descripcion {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .tarjeta-video {
    border-radius: 18px;
  }

  .contenedor-reproductor {
    aspect-ratio: 16 / 9;
  }

  .boton-iniciar-video {
    padding: 0.6rem 0.625rem 0.6rem 1.25rem;
    font-size: 0.9375rem;
  }

  .texto-iniciar {
    margin-right: 0.625rem;
  }

  .icono-iniciar-wrapper {
    width: 2.25rem;
    height: 2.25rem;
  }

  .icono-iniciar-wrapper svg {
    width: 15px;
    height: 15px;
  }

  .boton-audio-sao {
    bottom: 1rem;
    right: 1rem;
    padding: 0.4rem 0.5rem 0.4rem 0.9rem;
    font-size: 0.82rem;
  }

  .texto-boton {
    margin-right: 0.5rem;
  }

  .icono-audio-wrapper {
    width: 1.85rem;
    height: 1.85rem;
  }

  .icono-audio-wrapper svg {
    width: 14px;
    height: 14px;
  }
}
</style>
