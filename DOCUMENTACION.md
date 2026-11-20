# Documentación Técnica – Frontend

Sitio web institucional del **Sistema Alimentador Oriental (SAO6)** de Medellín. Es una **SPA (Single Page Application)** desarrollada con **Vue 3**, **Vite 5** y **TypeScript** en modo estricto. Presenta la información corporativa de la empresa, el catálogo de rutas alimentadoras del Metro, noticias y comunicados, tarifas, certificaciones, canales de contacto, el formulario "Trabaja con nosotros" y accesos a los portales internos (Portal del Colaborador y Administremos).

---

## Índice

1. [Stack](#1-stack)
2. [Arquitectura](#2-arquitectura)
3. [Estructura de carpetas](#3-estructura-de-carpetas)
4. [Principios SOLID aplicados](#4-principios-solid-aplicados)
5. [Páginas, rutas y navegación](#5-páginas-rutas-y-navegación)
6. [Contenido, estado y persistencia](#6-contenido-estado-y-persistencia)
7. [Validaciones y reglas de negocio en cliente](#7-validaciones-y-reglas-de-negocio-en-cliente)
8. [SEO, rendimiento y accesibilidad](#8-seo-rendimiento-y-accesibilidad)
9. [Servicios externos e integraciones](#9-servicios-externos-e-integraciones)
10. [Variables de entorno](#10-variables-de-entorno)
11. [Comandos](#11-comandos)
12. [Despliegue](#12-despliegue)
13. [Cómo actualizar el contenido](#13-cómo-actualizar-el-contenido)
14. [Puntos de mejora](#14-puntos-de-mejora)

---

## 1. Stack

| Tecnología | Uso |
| --- | --- |
| Vue 3 (`^3.4.38`) + `<script setup>` | Framework de UI con Composition API |
| Vite (`^5.4.2`) + `@vitejs/plugin-vue` | Bundler y servidor de desarrollo; `splitVendorChunkPlugin` y `manualChunks` para dividir dependencias |
| TypeScript (`^5.5.3`) + `vue-tsc` | Tipado estricto (`strict`, `noUnusedLocals`, `noUnusedParameters`) y verificación previa al build |
| `vue-router` (`^4.6.3`) | Enrutamiento cliente (`createWebHistory`), *lazy loading* por vista y `scrollBehavior` |
| `@vueuse/head` (`^2.0.0`) | Gestión dinámica de `<title>`, meta tags, canonical y JSON-LD por página |
| `gsap` (`^3.13.0`) + `ScrollTrigger` | Animaciones de entrada, *scroll-reveal* y `matchMedia` responsive |
| `swiper` (`^12.0.3`) | Carrusel automático de aliados y certificaciones (`Autoplay`) |
| `rough-notation` (`^0.5.1`) | Subrayados/anotaciones animadas en la página *Nosotros* |
| `express` (`^4.22.1`) | Servidor Node que sirve `dist/` con *fallback* a `index.html` |
| `sharp` (`^0.34.5`, dev) | Script `optimize_images.js` para convertir imágenes a WebP |
| `terser` (dev) | Minificación del build de producción |
| YouTube IFrame API / `youtube-nocookie` | Video institucional y videos por ruta |
| Embedsocial · Basin · Google My Maps · Google Fonts (Inter) | Feed de Instagram, envío del formulario de empleo, mapas de recorrido y tipografía |

> `plyr` y `animejs` figuran en `package.json` pero hoy no se importan en el código (ver [Puntos de mejora](#14-puntos-de-mejora)).

---

## 2. Arquitectura

```mermaid
flowchart LR
    U[Navegador / Usuario] -->|HTTP GET| SRV[Express server.js<br/>o hosting estático]
    SRV -->|dist/ + fallback index.html| SPA[SPA Vue 3]

    SPA --> APP[App.vue: Navegación, Footer,<br/>BotonSubir, Accesibilidad]
    APP --> RTR[Vue Router]
    RTR --> VIEWS[Vistas: Home, Nosotros, Noticias,<br/>Rutas, Detalle, Contacto, Condiciones ADI]

    VIEWS --> DATA[(src/data/rutas.ts<br/>catálogo de rutas)]
    VIEWS --> HEAD[@vueuse/head<br/>SEO + JSON-LD]
    VIEWS --> ASSETS[(public/ y src/assets/<br/>imágenes, PDFs, SVG)]
    SPA -->|localStorage| LS[(Preferencias de accesibilidad)]
    SPA -->|sessionStorage| SS[(Posición de scroll)]

    SPA -->|iframe| YT[YouTube / YouTube-nocookie]
    SPA -->|iframe| GM[Google My Maps]
    SPA -->|script| EMB[Embedsocial: Instagram]
    SPA -->|POST multipart| BAS[Basin: formulario de empleo]
    SPA -->|enlaces| EXT[Portales: Administremos,<br/>Portal del Colaborador, Webmail, Cívica]
```

El sitio **no tiene backend propio**: es un frontend 100 % estático una vez compilado.

- `index.html` incluye un *skeleton loader* (logo animado) que se pinta antes de que Vue monte la app, mejorando el LCP percibido.
- `App.vue` es el *shell*: renderiza `Navegacion`, el `<router-view>`, `Footer`, `BotonSubir` y `ControlesAccesibilidad`, y configura el título base, el canonical y Google Analytics.
- Cada vista (excepto Home y Nosotros) se carga con `import()` dinámico, generando *chunks* independientes (`RutasView-*.js`, `NoticiasView-*.js`, etc.).
- El contenido (rutas, noticias, aliados) vive **en el código fuente** como datos tipados; no hay CMS ni API.

---

## 3. Estructura de carpetas

```text
├── index.html                       # Entrada HTML: meta SEO, Open Graph, fuente Inter, skeleton loader
├── vite.config.ts                   # Plugins, chunks manuales (vue, gsap, plyr, vendor), terser
├── server.js                        # Express: sirve dist/ y hace fallback SPA (puerto 3000 por defecto)
├── optimize_images.js               # Conversión de imágenes a WebP con sharp
├── tsconfig*.json                   # Configuración TypeScript (app y node)
├── public/                          # Archivos servidos tal cual en la raíz del sitio
│   ├── LOGOSAO6.svg, SAO6.svg       # Logos
│   ├── _redirects                   # `/* /index.html 200` (fallback SPA en hosting tipo Netlify)
│   ├── robots.txt, sitemap.xml      # SEO
│   ├── images/                      # Fotos del carrusel y de noticias
│   ├── rutas/                       # Mapas de recorrido (C6-001, C6-002, C6-002A, C14A)
│   ├── tarifas/                     # Tarifas tipo 1–10 (SVG)
│   ├── rails/                       # Logos de aliados y certificaciones
│   ├── pdf/                         # Políticas de tratamiento de datos
│   └── videos/                      # Video del comunicador (mp4)
└── src/
    ├── main.ts                      # Crea la app: router, head y directiva v-lazy
    ├── App.vue                      # Shell global, canonical, GA, hash #administremos
    ├── style.css                    # Estilos globales y variables
    ├── router/index.ts              # Rutas, redirecciones, 404 y scrollBehavior
    ├── data/rutas.ts                # Catálogo central de rutas (interface Ruta + helpers)
    ├── directives/vLazy.ts          # Carga diferida de imágenes con IntersectionObserver
    ├── assets/images/               # Imágenes procesadas por Vite (WebP/JPG/PNG)
    ├── components/                  # Secciones del Home y piezas globales
    │   ├── Navegacion.vue           # Menú desktop/móvil con GSAP
    │   ├── Footer.vue               # Enlaces, políticas, contacto y redes
    │   ├── SeccionHero.vue          # Portada
    │   ├── SeccionSocios.vue        # Carrusel de aliados y certificaciones (Swiper)
    │   ├── SeccionVideo.vue         # Video institucional (YouTube IFrame API)
    │   ├── SeccionNosotros.vue      # Resumen institucional
    │   ├── SeccionNoticias.vue      # Carrusel de noticias + JSON-LD NewsArticle
    │   ├── SeccionRutas.vue         # Vista previa de rutas
    │   ├── SeccionInstagram.vue     # Feed de Instagram (Embedsocial)
    │   ├── SeccionTrabajaConNosotros.vue  # Formulario de empleo (Basin)
    │   ├── SeccionAdmin.vue         # Pantalla de acceso "Administremos"
    │   ├── ControlesAccesibilidad.vue     # Tamaño de texto + redes sociales
    │   └── BotonSubir.vue           # Volver arriba
    └── views/                       # Páginas completas (una por ruta)
        ├── HomeView.vue
        ├── NosotrosView.vue
        ├── NoticiasView.vue · DetalleNoticiaView.vue
        ├── RutasView.vue · DetalleRutaView.vue
        ├── ContactanosView.vue
        └── CondicionesUsoAdiView.vue
```

---

## 4. Principios SOLID aplicados

| Principio | Aplicación en el frontend |
| --- | --- |
| **S (Responsabilidad Única)** | Cada sección del Home es un componente autónomo (`SeccionHero`, `SeccionSocios`, `SeccionNoticias`…). Las vistas solo componen secciones y definen su SEO; los datos de rutas viven aparte en `data/rutas.ts`. |
| **O (Abierto/Cerrado)** | Agregar una ruta es añadir un objeto al arreglo `RUTAS`: el listado, el buscador y el detalle `/rutas/:slug` lo reconocen sin modificar su lógica. Lo mismo aplica a los aliados (`baseRails`) y a los enlaces del menú (`enlaces`). |
| **L (Sustitución de Liskov)** | Todos los elementos del carrusel de aliados cumplen la interfaz `Rail` y se comportan igual según su `tipo` (`enlace`, `modal`, `none`), sin importar el aliado. |
| **I (Segregación de Interfaces)** | Interfaces pequeñas y específicas: `Ruta` (`data/rutas.ts`), `Rail` (`SeccionSocios.vue`), `Noticia` (`SeccionNoticias.vue`), `EnlaceNavegacion` (`Navegacion.vue`), `ImagenCarousel`. |
| **D (Inversión de Dependencias)** | Las vistas consumen abstracciones (`RUTAS`, `getRutaPorSlug`, `getRutaPorCodigo`) en lugar de duplicar datos; el SEO se delega a `useHead` y la carga diferida a la directiva reutilizable `v-lazy`. |

---

## 5. Páginas, rutas y navegación

### Router (`src/router/index.ts`)

- **Modo historial** (`createWebHistory`), por lo que el servidor debe devolver `index.html` en cualquier ruta (`server.js` y `_redirects` lo resuelven).
- **Carga diferida**: todas las vistas salvo `HomeView` y `NosotrosView`.
- **Redirección SEO**: `/noticias/detalle-bus-electrico` → `/noticias/bus-electrico-sao6-medellin-movilidad-sostenible`.
- **Catch-all**: cualquier ruta desconocida redirige a `/` (no existe página 404).
- **`scrollBehavior`**: restaura la posición guardada, recupera el scroll tras recargar (`sessionStorage.scrollPosition`), soporta anclas (`to.hash`) con scroll suave y, por defecto, sube al inicio.

### Páginas (`src/views/`)

| Ruta | Vista | Propósito |
| --- | --- | --- |
| `/` | `HomeView` | Landing: Hero, Aliados, Video, Nosotros, Noticias, Rutas, Instagram y Trabaja con nosotros. Inyecta JSON-LD `Organization`, `BreadcrumbList` y `WebSite`. |
| `/nosotros` | `NosotrosView` | Quiénes somos, misión, visión 2029, valores y video "Así operamos". |
| `/noticias` | `NoticiasView` | Listado de noticias y comunicados. |
| `/noticias/bus-electrico-sao6-medellin-movilidad-sostenible` | `DetalleNoticiaView` | Artículo del primer bus eléctrico (meta SEO definida en `route.meta`). |
| `/rutas` | `RutasView` | Catálogo de rutas con buscador por texto. |
| `/rutas/:slug` | `DetalleRutaView` | Detalle de ruta: descripción, video, mapa de Google My Maps y meta tags dinámicos. |
| `/contactanos` | `ContactanosView` | Formulario y datos de contacto. |
| `/condiciones-de-uso-de-adi` | `CondicionesUsoAdiView` | Términos de uso del servicio ADI. |
| `/#administremos` | `SeccionAdmin` (en `App.vue`) | Pantalla de acceso que reemplaza temporalmente el contenido cuando el hash es `#administremos`. |

### Menú principal (`Navegacion.vue`)

| Opción | Destino | Tipo |
| --- | --- | --- |
| Inicio · Nosotros · Noticias y comunicados · Nuestras Rutas · Contáctanos | Rutas internas | `ruta` |
| Portal del Colaborador | `http://indicador-desempeno.sao6.com.co/` | `externo` |
| Administremos | `https://admon.sao6.com.co/` | `externo` |

El menú es horizontal en escritorio y colapsa a menú móvil por debajo de **968 px**; el logo se reduce con `ScrollTrigger` al hacer scroll.

---

## 6. Contenido, estado y persistencia

El sitio **no usa store global** (sin Pinia/Vuex): el estado es local a cada componente (`ref`/`computed`) y el contenido es estático.

### Fuentes de contenido

| Contenido | Ubicación | Estructura |
| --- | --- | --- |
| **Rutas** (34 registradas) | `src/data/rutas.ts` | `Ruta { codigo, nombre, slug, color, descripcion?, videoUrl?, mapaUrl?, mapaImagen?, keywords? }` |
| **Noticias** | `SeccionNoticias.vue` y `NoticiasView.vue` | Arreglo de objetos (`id`, `titulo`, `descripcion`, `categoria`, `imagen`, `fuente`, `link`, `fechaPublicacion`, `autor`) |
| **Aliados y certificaciones** | `SeccionSocios.vue` → `baseRails` | `Rail { nombre, imagen, tipo, url? }`; se duplica 6 veces para lograr un *loop* continuo |
| **Menú** | `Navegacion.vue` → `enlaces` | `EnlaceNavegacion { texto, ruta, tipo }` |
| **Carrusel de empleo** | `SeccionTrabajaConNosotros.vue` → `imagenes` | Lista de imágenes WebP con posición |
| **Misión / Visión / Valores** | `NosotrosView.vue` | Texto en el template |

### Helpers de rutas (`data/rutas.ts`)

| Función | Descripción |
| --- | --- |
| `getRutaPorSlug(slug)` | Obtiene una ruta por su URL amigable (usada por `DetalleRutaView`) |
| `getRutaPorCodigo(codigo)` | Obtiene una ruta por su código (`C6-001`) |
| `getSlugFromCodigo` / `getCodigoFromSlug` | Conversión entre código y slug (retrocompatibilidad) |

### Persistencia en el navegador

| Almacenamiento | Clave | Uso |
| --- | --- | --- |
| `localStorage` | `preferencias-accesibilidad` | Nivel de tamaño de texto elegido por el usuario |
| `sessionStorage` | `scrollPosition` | Posición de scroll guardada en `beforeunload` y restaurada tras recargar |

### Carga diferida de imágenes (`directives/vLazy.ts`)

Directiva `v-lazy` basada en `IntersectionObserver` (`threshold: 0.1`, `rootMargin: 50px`): copia `data-src` → `src` (y `data-bg` → `background-image`) cuando el elemento entra al viewport y agrega la clase `loaded`, que activa una transición de opacidad definida en `App.vue`.

---

## 7. Validaciones y reglas de negocio en cliente

1. **Formulario "Trabaja con nosotros"** (`SeccionTrabajaConNosotros.vue`):
   - Campos: `nombre`, `email`, `area`, `cv`, `mensaje` y aceptación de política.
   - La hoja de vida solo admite **PDF, DOC o DOCX** (`accept=".pdf,.doc,.docx"` y validación por MIME) con un **máximo de 5 MB**; si no cumple, se muestra `errorArchivo`.
   - Es obligatorio aceptar la *Política de Tratamiento y Protección de Datos Personales* (enlace al PDF en `/pdf/`).
   - Incluye el campo oculto `_gotcha` como *honeypot* anti-spam.
2. **Formulario de contacto** (`ContactanosView.vue`): exige `nombres`, `correo`, `asunto` y `mensaje`; bloquea el envío mientras `enviando` es verdadero y muestra confirmación (`enviado`). *Actualmente el envío es simulado (ver [Puntos de mejora](#14-puntos-de-mejora)).*
3. **Buscador de rutas** (`RutasView.vue`): `rutasFiltradas` es un `computed` que filtra `RUTAS` según el texto ingresado.
4. **Ruta inexistente** (`DetalleRutaView.vue`): si `getRutaPorSlug` no encuentra el slug, se muestra una ficha por defecto ("Ruta no encontrada").
5. **Accesibilidad de texto** (`ControlesAccesibilidad.vue`): el nivel de zoom va de **−2 a +3**, en pasos de 10 % sobre el tamaño base (80 %–130 %); los botones se deshabilitan al llegar al límite.
6. **Aliados** (`SeccionSocios.vue`): los de tipo `enlace` abren en nueva pestaña con `noopener,noreferrer`; los de tipo `modal` abren el modal de certificaciones y bloquean el scroll del `body` hasta cerrarlo.
7. **Acceso Administremos** (`SeccionAdmin.vue`): requiere usuario y contraseña no vacíos antes de continuar.

---

## 8. SEO, rendimiento y accesibilidad

### SEO

- **`index.html`**: `description`, `keywords`, `robots`, Open Graph y Twitter Card base.
- **`App.vue`**: `titleTemplate` (`{título} | SAO6`) y `<link rel="canonical">` calculado sin parámetros ni slash final, sobre `https://www.sao6.com`.
- **Por vista** (`useHead`): título y descripción propios. Rutas y detalle de ruta generan meta tags dinámicos a partir de `RUTAS`.
- **Datos estructurados JSON-LD**: `Organization`, `WebSite` con `SearchAction`, `BreadcrumbList`, `ItemList` (rutas) y `NewsArticle` (noticias).
- **`robots.txt`** permite todo y apunta al `sitemap.xml` (Inicio, Nosotros, Rutas y Noticias).
- **Redirección 301 lógica** de la URL antigua de la noticia del bus eléctrico.

### Rendimiento

- División de código por vista y de dependencias en `vendor-vue`, `vendor-gsap`, `vendor-plyr` y `vendor`.
- `cssCodeSplit: true`, minificación con `terser`, `target: esnext`.
- Imágenes en **WebP** generadas con `optimize_images.js` (ancho 1200 px; 1920 px para el hero) y carga diferida con `v-lazy`.
- *Skeleton loader* en `index.html`, `preconnect` a Google Fonts y video de YouTube con `youtube-nocookie`.

### Accesibilidad

- Controles de tamaño de texto persistentes, `aria-label` y `title` en botones e íconos de redes.
- Enlaces externos con `rel="noopener noreferrer"`.
- Botón "volver arriba" y enlaces a políticas del Sistema de Gestión Integral.

---

## 9. Servicios externos e integraciones

| Servicio | Cómo se integra |
| --- | --- |
| **YouTube IFrame API** | `SeccionVideo.vue` carga `youtube.com/iframe_api` dinámicamente, controla reproducción y audio; el video institucional usa el ID `SmwB4H_lnBk`. |
| **YouTube (nocookie)** | `NosotrosView` y `DetalleRutaView` incrustan videos con `youtube-nocookie.com/embed/...`. |
| **Google My Maps** | `DetalleRutaView` muestra el recorrido de cada ruta con el iframe `google.com/maps/d/embed?mid=...` guardado en `mapaUrl`. |
| **Embedsocial** | `SeccionInstagram.vue` carga `embedsocial.com/cdn/ht.js` para el feed de Instagram. |
| **Basin** | El formulario de empleo hace `POST multipart/form-data` a `https://usebasin.com/f/...`. |
| **Google Analytics (gtag)** | Cargado desde `App.vue` con `useHead`; el ID actual es un *placeholder* (`G-XXXXXXXXXX`). |
| **Google Fonts** | Tipografía **Inter** (400–700) en `index.html`. |
| **Portales institucionales** | `admon.sao6.com.co` (Administremos), `indicador-desempeno.sao6.com.co` (Portal del Colaborador) y `webmail.sao6.com.co`. |
| **Metro de Medellín / Cívica** | Enlaces a tarifas y Tarjeta Cívica; los aliados incluyen Metro de Medellín, SITVA (Área Metropolitana) y Supertransporte. |
| **Redes sociales** | Facebook, Instagram y YouTube desde `Footer.vue` y `ControlesAccesibilidad.vue`. |
| **Contacto directo** | `mailto:Infosao@sao6.com.co`, `tel:+576044449598` (Línea Hola Metro) y dirección Carrera 56A #62-50, Medellín. |

---

## 10. Variables de entorno

El sitio **no consume variables de entorno** en el código: las URL de servicios externos están definidas directamente en los componentes.

| Variable | Uso |
| --- | --- |
| `PORT` | Puerto de `server.js` (por defecto `3000`) |
| `BASE_URL` (Vite, automática) | Base del router (`import.meta.env.BASE_URL`); por defecto `/` |

> El repositorio contiene un archivo `.env` versionado; si llega a almacenar secretos debe retirarse del control de versiones y añadirse a `.gitignore`.

---

## 11. Comandos

```bash
npm install            # Instalación de dependencias (también hay pnpm-lock.yaml)
npm run dev            # Servidor de desarrollo Vite (HMR)
npm run build          # vue-tsc -b && vite build  ->  dist/
npm run preview        # Vista previa del build
npm start              # node server.js: sirve dist/ con fallback SPA (puerto 3000)
node optimize_images.js  # Genera versiones WebP de las imágenes listadas en el script
```

---

## 12. Despliegue

El proyecto genera un sitio estático en `dist/` y admite dos formas de publicación:

1. **Servidor Node (Express)**: `npm run build` y luego `npm start`. `server.js` sirve `dist/` y responde `index.html` a cualquier ruta (`app.get('*')`) para que Vue Router funcione al recargar.
- El aplicativo se monta en el cpanel (pedir acceso a la persona encargada de sistemas)

---

## 13. Cómo actualizar el contenido

| Tarea | Pasos |
| --- | --- |
| **Agregar una ruta** | Añadir un objeto a `RUTAS` en `src/data/rutas.ts` (`codigo`, `nombre`, `slug` único en minúsculas con guiones, `color`, `descripcion`, `videoUrl`, `mapaUrl`, `keywords`). El listado, el buscador y `/rutas/<slug>` se actualizan solos. Luego sumar la URL al `sitemap.xml`. |
| **Publicar una noticia** | Agregarla a los arreglos `noticias` en `SeccionNoticias.vue` y `NoticiasView.vue`; para un artículo completo, crear una vista de detalle y registrar su ruta con `meta` (title, description, keywords) en `router/index.ts`. Añadir la imagen a `public/images/` o `src/assets/images/`. |
| **Agregar un aliado/certificación** | Subir el logo a `public/rails/` y añadir un objeto `Rail` a `baseRails` (`tipo: 'enlace'` con `url`, o `'modal'` para certificaciones). |
| **Cambiar el menú** | Editar el arreglo `enlaces` en `Navegacion.vue` (y `Footer.vue` si aplica). |
| **Actualizar tarifas** | Reemplazar los SVG de `public/tarifas/`. |
| **Actualizar políticas (PDF)** | Reemplazar los archivos en `public/pdf/` manteniendo el nombre, ya que `Footer.vue` y el formulario de empleo los enlazan. |
| **Optimizar nuevas imágenes** | Registrarlas en `optimize_images.js` y ejecutar `node optimize_images.js`. |
| **Cambiar el video institucional** | Modificar `idVideo` en `SeccionVideo.vue`. |

---
