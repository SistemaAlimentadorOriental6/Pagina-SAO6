<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'

const instagramRef = ref<HTMLElement | null>(null)
const DATA_REF = "ee0e51646233250e0aee8f5aeec962782cfcd41d"

onMounted(() => {
  // Cargar el script de EmbedSocial si no está ya cargado
  if (!document.getElementById('EmbedSocialHashtagScript')) {
    const script = document.createElement('script')
    script.id = 'EmbedSocialHashtagScript'
    script.src = 'https://embedsocial.com/cdn/ht.js'
    document.head.appendChild(script)
  } else {
    // Si el script ya existe, necesitamos reinicializar el widget manualmente
    // Esperamos un tick para asegurar que el DOM está listo
    nextTick(() => {
      if ((window as any).EMBEDSOCIALHASHTAG && instagramRef.value) {
        (window as any).EMBEDSOCIALHASHTAG.getEmbedData(DATA_REF, instagramRef.value)
      }
    })
  }
})
</script>

<template>
  <section class="seccion-instagram">
    <div class="contenedor-instagram">

      <!-- Widget de Instagram -->
      <div 
        ref="instagramRef"
        class="embedsocial-hashtag" 
        :data-ref="DATA_REF"
      >
        <a 
          class="feed-powered-by-es feed-powered-by-es-slider-img es-widget-branding" 
          href="https://embedsocial.com/social-media-aggregator/" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Instagram widget"
        >
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');

.seccion-instagram {
  padding: 4rem 2rem;
  background: white;
  font-family: 'Outfit', sans-serif;
}

.contenedor-instagram {
  max-width: 1400px;
  margin: 0 auto;
}

.embedsocial-hashtag {
  width: 100%;
  min-height: 400px;
}

@media (max-width: 768px) {
  .seccion-instagram {
    padding: 3rem 1.5rem;
  }
}
</style>
