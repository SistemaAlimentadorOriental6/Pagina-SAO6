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
        {
            path: '/noticias/boletin-01-prevencion-accidentalidad-cra21',
            name: 'boletin-01',
            component: () => import('../views/DetalleBoletin01View.vue'),
            meta: {
                title: 'Boletín N°01 - Prevención de Accidentalidad Vial | SAO6',
                description: 'Recomendaciones especiales al transitar por la Carrera 21, a la altura del Batallón. Prevención de accidentalidad por postes de energía en la vía.',
                keywords: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, postes de energia, medellin'
            }
        },
        {
            path: '/noticias/boletin-02-curva-peligrosa-los-pomos',
            name: 'boletin-02',
            component: () => import('../views/DetalleBoletin02View.vue'),
            meta: {
                title: 'Boletín N°02 - Curva peligrosa Los Pomos | SAO6',
                description: 'Curva peligrosa con riesgo de alta accidentalidad en el sector Los Pomos. Recomendaciones operativas ante falta de peralte.',
                keywords: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, curva peligrosa, los pomos, peralte, medellin'
            }
        },
        {
            path: '/noticias/boletin-03-cruce-peligroso-cra50-calle40',
            name: 'boletin-03',
            component: () => import('../views/DetalleBoletin03View.vue'),
            meta: {
                title: 'Boletín N°03 - Cruce peligroso Cra 50 con Calle 40 | SAO6',
                description: 'Recomendaciones operativas para la circulación en el cruce de la Cra. 50 Palacé con la Calle 40, punto de alto riesgo de accidentalidad.',
                keywords: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, cruce peligroso, carrera 50, calle 40, palace, medellin'
            }
        },
        {
            path: '/noticias/boletin-04-giro-izquierda-intersecciones',
            name: 'boletin-04',
            component: () => import('../views/DetalleBoletin04View.vue'),
            meta: {
                title: 'Boletín N°04 - Giro a la izquierda en intersecciones | SAO6',
                description: 'Giro a la izquierda en intersecciones - Factor crítico de accidentalidad. Recomendaciones para fortalecer la conducción preventiva.',
                keywords: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, giro a la izquierda, visibilidad, medellin'
            }
        },
        {
            path: '/noticias/boletin-06-cuidado-al-reversar',
            name: 'boletin-06',
            component: () => import('../views/DetalleBoletin06View.vue'),
            meta: {
                title: 'Boletín N°06 - ¡Cuidado al reversar! | SAO6',
                description: 'Chocar al reversar, una de las principales causas de accidentalidad en SAO6. Recomendaciones para reducir la siniestralidad en maniobras de reversa.',
                keywords: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, reversa, maniobras, CMO, SONIA, medellin'
            }
        },
        {
            path: '/noticias/boletin-07-accidentalidad-en-crecimiento',
            name: 'boletin-07',
            component: () => import('../views/DetalleBoletin07View.vue'),
            meta: {
                title: 'Boletín N°07 - Accidentalidad en crecimiento | SAO6',
                description: 'La formación es clave para hacernos más conscientes y reducir la accidentalidad vial en la prestación del servicio de SAO6.',
                keywords: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, formacion, macrozonas, P.E.S.V., medellin'
            }
        },
        {
            path: '/noticias/boletin-05-caida-usuarios',
            name: 'boletin-05',
            component: () => import('../views/DetalleBoletin05View.vue'),
            meta: {
                title: 'Boletín N°05 - Caída de usuarios en nuestras unidades | SAO6',
                description: 'Llamado al cuidado de la integridad de nuestros usuarios. Recomendaciones para fortalecer la conducción segura.',
                keywords: 'boletin, prevencion, accidentalidad, SAO6, seguridad vial, caida de usuarios, usuarios, medellin'
            }
        },
        // Redirecciones de URLs antiguas para mantener SEO
        {
            path: '/noticias/boletin-01',
            redirect: '/noticias/boletin-01-prevencion-accidentalidad-cra21'
        },
        {
            path: '/noticias/boletin-02',
            redirect: '/noticias/boletin-02-curva-peligrosa-los-pomos'
        },
        {
            path: '/noticias/boletin-03',
            redirect: '/noticias/boletin-03-cruce-peligroso-cra50-calle40'
        },
        {
            path: '/noticias/boletin-04',
            redirect: '/noticias/boletin-04-giro-izquierda-intersecciones'
        },
        {
            path: '/noticias/boletin-05',
            redirect: '/noticias/boletin-05-caida-usuarios'
        },
        {
            path: '/noticias/boletin-06',
            redirect: '/noticias/boletin-06-cuidado-al-reversar'
        },
        {
            path: '/noticias/boletin-07',
            redirect: '/noticias/boletin-07-accidentalidad-en-crecimiento'
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
            path: '/contactanos',
            name: 'contactanos',
            component: () => import('../views/ContactanosView.vue')
        },
        {
            path: '/rutas/:slug',  // Ahora usa slug amigable para SEO
            name: 'detalle-ruta',
            component: () => import('../views/DetalleRutaView.vue')
        },
        {
            path: '/condiciones-de-uso-de-adi',
            name: 'condiciones-de-uso-de-adi',
            component: () => import('../views/CondicionesUsoAdiView.vue')
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
