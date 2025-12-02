<script setup lang="ts">
import SeccionHero from '../components/SeccionHero.vue'
import SeccionSocios from '../components/SeccionSocios.vue'
import SeccionRutas from '../components/SeccionRutas.vue'
import SeccionNoticias from '../components/SeccionNoticias.vue'
import SeccionNosotros from '../components/SeccionNosotros.vue'
import SeccionInstagram from '../components/SeccionInstagram.vue'
import SeccionTrabajaConNosotros from '../components/SeccionTrabajaConNosotros.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Inicio',
  meta: [
    { name: 'description', content: 'Bienvenido a SAO6, el sistema de transporte que conecta el oriente de Medellín. Conoce nuestras rutas, noticias y compromiso con la movilidad sostenible.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SAO6",
        "url": "https://www.sao6.com",
        "logo": "https://www.sao6.com/LOGOSAO6.svg",
        "description": "Sistema Alimentador Oriental de Medellín",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Medellín",
          "addressRegion": "Antioquia",
          "addressCountry": "CO"
        },
        "sameAs": [
          "https://www.instagram.com/sao6/"
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://www.sao6.com/"
        }]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "SAO6",
        "url": "https://www.sao6.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.sao6.com/rutas?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }
  ]
})
</script>

<template>
  <main>
    <SeccionHero />
    <SeccionSocios />
    <SeccionNosotros />
    <SeccionNoticias />
    <SeccionRutas />
    <SeccionInstagram />
    <SeccionTrabajaConNosotros />
  </main>
</template>
