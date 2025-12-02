import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NosotrosView from '../views/NosotrosView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/nosotros',
            name: 'nosotros',
            component: NosotrosView
        },
        {
            path: '/noticias',
            name: 'noticias',
            component: () => import('../views/NoticiasView.vue')
        },
        {
            path: '/noticias/bus-electrico-sao6-medellin-movilidad-sostenible',
            name: 'bus-electrico-sao6',
            component: () => import('../views/DetalleNoticiaView.vue'),
            meta: {
                title: 'Bus Eléctrico SAO6 Medellín - Movilidad Sostenible',
                description: 'Primer bus 100% eléctrico del Sistema Alimentador Oriental en Medellín. Tecnología de punta para transporte sostenible en el oriente de la ciudad.',
                keywords: 'bus eléctrico, SAO6, Medellín, movilidad sostenible, transporte público eléctrico, buses eléctricos Medellín'
            }
        },
        // Redirección de la URL antigua para mantener SEO
        {
            path: '/noticias/detalle-bus-electrico',
            redirect: '/noticias/bus-electrico-sao6-medellin-movilidad-sostenible'
        },
        {
            path: '/rutas',
            name: 'rutas',
            component: () => import('../views/RutasView.vue')
        },
        {
            path: '/rutas/:slug',  // Ahora usa slug amigable para SEO
            name: 'detalle-ruta',
            component: () => import('../views/DetalleRutaView.vue')
        },
        // Catch-all para 404 - Redirigir al inicio para evitar páginas rotas
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ],
    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        // Recuperar posición guardada si existe (para recargas)
        const savedScroll = sessionStorage.getItem('scrollPosition')
        if (savedScroll) {
            const pos = parseInt(savedScroll)
            sessionStorage.removeItem('scrollPosition')
            return { top: pos }
        }

        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }

        return { top: 0 }
    }
})

export default router
