export interface Ruta {
    codigo: string
    nombre: string
    slug: string // URL amigable para SEO
    color: string
    descripcion?: string
    videoUrl?: string
    mapaUrl?: string
    keywords?: string[] // Palabras clave para SEO
}

// Base de datos centralizada de todas las rutas
export const RUTAS: Ruta[] = [
    {
        codigo: 'C6-001',
        nombre: 'Santa Rita - Estación Acevedo',
        slug: 'santa-rita-estacion-acevedo',
        color: '#4cc253',
        descripcion: 'Ruta alimentadora C6-001 que conecta el barrio Santa Rita con la Estación Acevedo del Metro de Medellín. Servicio ágil para residentes de Santa Rita, Zamora y zonas aledañas hacia el sistema Metro.',
        videoUrl: 'https://www.youtube.com/embed/KuoYnkJxMOE',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1sH0ClbKv2Jy9B_yqodDaZhxUFZ6G9oU&ehbc=2E312F',
        keywords: ['Santa Rita', 'Estación Acevedo', 'Metro de Medellín', 'Alimentador', 'C6-001', 'Transporte Zamora']
    },
    {
        codigo: 'C6-002',
        nombre: 'Versalles - Punto Cero - Estación Hospital',
        slug: 'versalles-punto-cero-estacion-hospital',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-002 conectando el barrio Versalles con la zona hospitalaria y Punto Cero. Acceso directo a la Universidad de Antioquia, Hospital San Vicente y Estación Hospital del Metro.',
        videoUrl: 'https://www.youtube.com/embed/bK0FX6oBanw',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=13_kIqh_4JqcTYnYBI6hxhDMNZmaluhM&ehbc=2E312F',
        keywords: ['Versalles', 'Punto Cero', 'Hospital San Vicente', 'Universidad de Antioquia', 'Estación Hospital', 'C6-002']
    },
    {
        codigo: 'C6-002A',
        nombre: 'Versalles - Estación Hospital',
        slug: 'versalles-estacion-hospital',
        color: '#4cc253',
        descripcion: 'Servicio directo C6-002A desde el barrio Versalles hasta la Estación Hospital del Metro. La opción más rápida para conectar con el sistema integrado de transporte desde la zona nororiental.',
        videoUrl: 'https://www.youtube.com/embed/zoP1DRUSrTY',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1QDnhCJ0TvISE-FsuYf6vTaTxEWLsjtQ&ehbc=2E312F',
        keywords: ['Versalles', 'Estación Hospital', 'Metro Medellín', 'Ruta Directa', 'C6-002A', 'Transporte Manrique']
    },
    {
        codigo: 'C6-003',
        nombre: 'Campo Valdés - Estación Hospital',
        slug: 'campo-valdes-estacion-hospital',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-003 uniendo Campo Valdés con la Estación Hospital. Recorrido estratégico por la carrera 45 y zonas comerciales de Campo Valdés hacia el Metro.',
        videoUrl: 'https://www.youtube.com/embed/ibIyavHrpOA',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1togZUnYPlV9TNczQL64GjjPQeXgYbyY&ehbc=2E312F',
        keywords: ['Campo Valdés', 'Estación Hospital', 'Carrera 45', 'Manrique', 'C6-003', 'Alimentador Metro']
    },
    {
        codigo: 'C6-004',
        nombre: 'Reservas del Seminario - Estación Exposiciones',
        slug: 'reservas-seminario-estacion-exposiciones',
        color: '#4cc253',
        descripcion: 'Ruta C6-004 desde Reservas del Seminario hasta la Estación Exposiciones. Conecta el sector de Las Palmas y el Seminario con el centro-sur y el Metro.',
        videoUrl: 'https://www.youtube.com/embed/5tgkWx3a30Y',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=13ZYWB1PPHJ6kQlsXT6Maw6UQG0jXVHw&ehbc=2E312F',
        keywords: ['Reservas del Seminario', 'Estación Exposiciones', 'Las Palmas', 'Centro Automotriz', 'C6-004', 'Transporte Medellín']
    },
    {
        codigo: 'C6-004A',
        nombre: 'Quinta Linda - Estación Exposiciones',
        slug: 'quinta-linda-estacion-exposiciones',
        color: '#2c5f5d',
        descripcion: 'Servicio C6-004A conectando la unidad residencial Quinta Linda y alrededores con la Estación Exposiciones. Acceso rápido al sistema Metro y zona de San Diego.',
        videoUrl: 'https://www.youtube.com/embed/yAl6ThT4_Ms',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1sHsPnjLcFd_53hYnldJM1ga_5IuaYrY&ehbc=2E312F',
        keywords: ['Quinta Linda', 'Estación Exposiciones', 'San Diego', 'Buenos Aires', 'C6-004A', 'Alimentador']
    },
    {
        codigo: 'C6-005',
        nombre: 'Vergel - Estación San Antonio',
        slug: 'vergel-estacion-san-antonio',
        color: '#4cc253',
        descripcion: 'Ruta C6-005 desde El Vergel hasta la Estación San Antonio. Conexión vital entre los barrios altos de la comuna 8 y el centro de Medellín.',
        videoUrl: 'https://www.youtube.com/embed/gWVkYSRPdk0',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1bNwrR_yYbCXSwaMd3V9ksUspdBh6lis&ehbc=2E312F',
        keywords: ['El Vergel', 'Parque San Antonio', 'Centro Medellín', 'Comuna 8', 'C6-005', 'Transporte Público']
    },
    {
        codigo: 'C6-006',
        nombre: 'Villa Liliam - Estación Alejandro Echavarria',
        slug: 'villa-liliam-estacion-alejandro-echavarria',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-006 uniendo Villa Liliam con la Estación Alejandro Echavarria. Acceso al centro histórico y comercial desde la zona oriental.',
        videoUrl: 'https://www.youtube.com/embed/4C__wOJDz8E',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1ha6DpVKadRGoJGO-3u-yhyqzyFvWNQQ&ehbc=2E312F',
        keywords: ['Villa Liliam', 'Catedral Metropolitana', 'Parque Bolívar', 'Centro', 'C6-006', 'Villatina']
    },
    {
        codigo: 'C6-007',
        nombre: 'Cataluña - Estación Alpujarra',
        slug: 'cataluna-estacion-alpujarra',
        color: '#4cc253',
        descripcion: 'Ruta C6-007 conectando el barrio Cataluña y Buenos Aires con la Estación Alpujarra. Enlace directo con las líneas A y B del Metro y el Tranvía.',
        videoUrl: 'https://www.youtube.com/embed/5CMgElC_fxw',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1Nr5ScPQMx4CIYR5w-sLnlzkUcKzsWx8&ehbc=2E312F',
        keywords: ['Cataluña', 'Buenos Aires', 'Estación Alpujarra', 'Tranvía Ayacucho', 'C6-007', 'Metro']
    },
    {
        codigo: 'C6-008',
        nombre: 'La Libertad - Estación Prado',
        slug: 'la-libertad-estacion-prado',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-008 desde el barrio La Libertad hasta la Estación Prado. Recorrido que facilita la movilidad desde la comuna 8 hacia el centro-norte y el Metro.',
        videoUrl: 'https://www.youtube.com/embed/hLImXKPqkNc',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1xeXIEvg7b5ja045OmAh-gOY3HL3mPMY&ehbc=2E312F',
        keywords: ['La Libertad', 'Estación Prado', 'Comuna 8', 'Villatina', 'C6-008', 'Alimentador']
    },
    {
        codigo: 'C6-009',
        nombre: 'Enciso - Estación Prado',
        slug: 'enciso-estacion-prado',
        color: '#4cc253',
        descripcion: 'Ruta C6-009 conectando el histórico barrio Enciso con la Estación Prado. Acceso a servicios educativos y de salud en el trayecto hacia el Metro.',
        videoUrl: 'https://www.youtube.com/embed/An566zm9BSo',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1q5jxpGjIXRReXmmedruBGKfEyOeZ2oM&ehbc=2E312F',
        keywords: ['Enciso', 'Estación Prado', 'Biblioteca Ladera', 'Centro', 'C6-009', 'Transporte Enciso']
    },
    {
        codigo: 'C6-010',
        nombre: 'Villatina - ITM - Estación Prado',
        slug: 'villatina-itm-estacion-prado',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-010 sirviendo a Villatina, pasando por el campus ITM Fraternidad y llegando a Estación Prado. Ideal para estudiantes y residentes del sector.',
        videoUrl: 'https://www.youtube.com/embed/mwnFpJeafCU',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1ljmogAU0AbTawsITiXlKYl7zw8oqpLM&ehbc=2E312F',
        keywords: ['Villatina', 'ITM Fraternidad', 'Estación Prado', 'Boston', 'C6-010', 'Ruta Estudiantil']
    },
    {
        codigo: 'C6-011',
        nombre: 'El Playón - Popular 2 - Estación Acevedo',
        slug: 'el-playon-popular-2-estacion-acevedo',
        color: '#4cc253',
        descripcion: 'Ruta C6-011 integrando El Playón de los Comuneros y Popular 2 con la Estación Acevedo. Conexión vital para la zona nororiental con el Metro.',
        videoUrl: 'https://www.youtube.com/embed/DIFM4Cq5mc8',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1cIZm6nt0K-G_M1W4ldiYypW4SF8aK1g&ehbc=2E312F',
        keywords: ['El Playón', 'Popular 2', 'Estación Acevedo', 'Metrocable', 'C6-011', 'Comuna 2']
    },
    {
        codigo: 'C6-012',
        nombre: 'La Francia - Aranjuez - Estación Acevedo',
        slug: 'la-francia-aranjuez-estacion-acevedo',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-012 recorriendo La Francia y Aranjuez hasta la Estación Acevedo. Cobertura amplia de la comuna 2 facilitando el acceso al transporte masivo.',
        videoUrl: 'https://www.youtube.com/embed/b476C80KsHw',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1APnI4epdJqKAwP-Mhl6ixOwlp7cMbzY&ehbc=2E312F',
        keywords: ['La Francia', 'Aranjuez', 'Estación Acevedo', 'Parque Aranjuez', 'C6-012', 'Andalucía']
    },
    {
        codigo: 'C6-012A',
        nombre: 'Andalucía - Estación Acevedo',
        slug: 'andalucia-estacion-acevedo',
        color: '#4cc253',
        descripcion: 'Servicio C6-012A conectando el barrio Andalucía con la Estación Acevedo. Ruta rápida y directa para los habitantes de este sector de la comuna 2.',
        videoUrl: 'https://www.youtube.com/embed/lZukeoG8gzs',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1mrz9urP4rC0egYlHnMqruYDihXZ-02s&ehbc=2E312F',
        keywords: ['Andalucía', 'Estación Acevedo', 'Santa Cruz', 'C6-012A', 'Alimentador Norte']
    },
    {
        codigo: 'C6-013',
        nombre: 'Popular 1 - Estación Tricentenario',
        slug: 'popular-1-estacion-tricentenario',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-013 desde Popular 1 hasta la Estación Tricentenario. Cruza el río para conectar la zona nororiental con la noroccidental y el Metro.',
        videoUrl: 'https://www.youtube.com/embed/B9QH-gpZh_Q',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1qoVQFceMKhAGu1Sfzb3uOIGydKrv10A&ehbc=2E312F',
        keywords: ['Popular 1', 'Estación Tricentenario', 'Puente de la Madre Laura', 'C6-013', 'Transporte Popular']
    },
    {
        codigo: 'C6-014',
        nombre: 'La Ladera - Estación Prado',
        slug: 'la-ladera-estacion-prado',
        color: '#4cc253',
        descripcion: 'Ruta C6-014 conectando el sector de La Ladera y Parque Biblioteca León de Greiff con la Estación Prado. Acceso cultural y de transporte.',
        videoUrl: 'https://www.youtube.com/embed/ISVb3eDOK-0',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1EWde3DMd8gS3bb4wisAlqK1YtKRFksM&ehbc=2E312F',
        keywords: ['La Ladera', 'Parque Biblioteca', 'Estación Prado', 'León de Greiff', 'C6-014', 'Comuna 8']
    },
    {
        codigo: 'C6-015',
        nombre: 'Villa de Guadalupe - Estación Hospital',
        slug: 'villa-de-guadalupe-estacion-hospital',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-015 desde Villa de Guadalupe hasta la Estación Hospital. Servicio esencial para conectar los barrios altos de Manrique con el sistema Metro.',
        videoUrl: 'https://www.youtube.com/embed/aOYexZJ2Rt0',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1tyfNicnx4Khfx9OWfuCE0L3NKf8ZslI&ehbc=2E312F',
        keywords: ['Villa de Guadalupe', 'Estación Hospital', 'Manrique Oriental', 'C6-015', 'Transporte Manrique']
    },
    {
        codigo: 'C6-016',
        nombre: 'Nuevo Horizonte - Estación Hospital',
        slug: 'nuevo-horizonte-estacion-hospital',
        color: '#4cc253',
        descripcion: 'Ruta C6-016 uniendo Nuevo Horizonte y Versalles con la Estación Hospital. Alternativa de transporte para la parte alta de la comuna 3.',
        videoUrl: 'https://www.youtube.com/embed/F_6uuoYRQoY',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1gK2x0LOlvaFS9LBGlyH4VYJkHagkp4A&ehbc=2E312F',
        keywords: ['Nuevo Horizonte', 'Estación Hospital', 'Versalles', 'La Cruz', 'C6-016', 'Alimentador']
    },
    {
        codigo: 'C6-018',
        nombre: 'Santa Cecilia - Estación Tricentenario',
        slug: 'santa-cecilia-estacion-tricentenario',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-018 conectando Santa Cecilia y Popular 1 con la Estación Tricentenario. Facilita el cruce hacia la zona norte y el acceso al Metro.',
        videoUrl: 'https://www.youtube.com/embed/KHWonDrOyeA',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1pQ7SpUwlRrCU_dsIP2BBmrfxKLdRkKI&ehbc=2E312F',
        keywords: ['Santa Cecilia', 'Popular 1', 'Estación Tricentenario', 'Santo Domingo', 'C6-018', 'Transporte']
    },
    {
        codigo: 'C6-019',
        nombre: 'El Raizal - Estación Universidad',
        slug: 'el-raizal-estacion-universidad',
        color: '#4cc253',
        descripcion: 'Ruta C6-019 interbarrial conectando El Raizal con la Estación Universidad. Facilita la movilidad interna en la zona de Manrique y Aranjuez.',
        videoUrl: 'https://www.youtube.com/embed/OQ95GRw1T3Y',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1AjaOt4w7J8scslmP4iKgMkdgH_Nvwsw&ehbc=2E312F',
        keywords: ['El Raizal', 'Estación Universidad', 'Manrique', 'Aranjuez', 'C6-019', 'Ruta Interna']
    },
    {
        codigo: 'C6-019A',
        nombre: 'El Jardín - Estación Gardel',
        slug: 'el-jardin-estacion-gardel',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-019A conectando el sector de El Jardín con la Estación Gardel. Servicio complementario para la movilidad en la comuna 3 y 4.',
        videoUrl: 'https://www.youtube.com/embed/APS0fKl8ByY',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=11NPlUdW310Rnt8rHZocgKoXDJxVYvpc&ehbc=2E312F',
        keywords: ['El Jardín', 'Estación Gardel', 'Manrique', 'C6-019A', 'Transporte Local']
    },
    {
        codigo: 'C6-020',
        nombre: 'San José La Cima - Estación Universidad',
        slug: 'san-jose-la-cima-estacion-universidad',
        color: '#4cc253',
        descripcion: 'Ruta C6-020 desde San José La Cima hasta la Estación Universidad. Conexión directa con la Universidad de Antioquia, Ruta N y el Metro.',
        videoUrl: 'https://www.youtube.com/embed/k7iYWpaGGRE',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1TFSHz03nCXT8wlqs702rJyP0OPq6TB4&ehbc=2E312F',
        keywords: ['San José La Cima', 'Estación Universidad', 'Ruta N', 'UdeA', 'C6-020', 'Manrique']
    },
    {
        codigo: 'C6-021',
        nombre: 'Granizal - Estación Tricentenario',
        slug: 'granizal-estacion-tricentenario',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-021 conectando el barrio Granizal con la Estación Tricentenario. Facilita el acceso a servicios comerciales y transporte en la zona.',
        videoUrl: 'https://www.youtube.com/embed/E4Ot3jCx3kk',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1ZTn3490o4cscHflHy3Pc1SKeKpxrRmI&ehbc=2E312F',
        keywords: ['Granizal', 'Estación Tricentenario', 'Comuna 1', 'Santo Domingo', 'C6-021', 'Transporte']
    },
    {
        codigo: 'C6-022',
        nombre: 'La Cruz - Estación Prado',
        slug: 'la-cruz-estacion-prado',
        color: '#4cc253',
        descripcion: 'Ruta C6-022 desde el sector de La Cruz hasta la Estación Prado. Conexión vital para la parte más alta de la comuna 3 con el centro y el Metro.',
        videoUrl: 'https://www.youtube.com/embed/W-GEV4ilt1g',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1tuv7aev57uoe5cCily1d8vM96ibn6rM&ehbc=2E312F',
        keywords: ['La Cruz', 'Estación Prado', 'La Honda', 'Manrique', 'C6-022', 'Alimentador']
    },
    {
        codigo: 'C6-022A',
        nombre: 'Las Partidas - Estación Prado',
        slug: 'las-partidas-estacion-prado',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-022A conectando Las Partidas con la Estación Prado. Servicio de refuerzo para la movilidad hacia las zonas altas.',
        videoUrl: 'https://www.youtube.com/embed/Z9vVV0dN3n4',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1JaxzUC1cLJirWFJK1tNS_xMqVL6MaHA&ehbc=2E312F',
        keywords: ['Las Partidas', 'Estación Prado', 'Santa Elena', 'C6-022A', 'Transporte']
    },
    {
        codigo: 'C6-023',
        nombre: 'Santa Lucía - Estación Alejandro Echavarría',
        slug: 'santa-lucia-estacion-alejandro-echavarria',
        color: '#4cc253',
        descripcion: 'Ruta C6-023 conectando Santa Lucía con la Estación Alejandro Echavarría. Enlace importante entre estaciones del Tranvía y barrios de la comuna 9.',
        videoUrl: 'https://www.youtube.com/embed/Cb6E1UFyNy4',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1ko2C94JwRyzMfqfmRoUEmyesJzMAlnA&ehbc=2E312F',
        keywords: ['Santa Lucía', 'Alejandro Echavarría', 'Tranvía', 'Buenos Aires', 'C6-023', 'Comuna 9']
    },
    {
        codigo: 'C6-024',
        nombre: '8 de Marzo - Estación Alejandro Echavarría',
        slug: '8-de-marzo-estacion-alejandro-echavarria',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-024 desde el barrio 8 de Marzo hasta la Estación Alejandro Echavarría. Conexión para los residentes de la zona centro-oriental con el sistema integrado.',
        videoUrl: 'https://www.youtube.com/embed/u3hpdO11Tyo',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=12Bl4mzD2EdYo8cUu4wbmZLPJ4Xkxza8&ehbc=2E312F',
        keywords: ['8 de Marzo', 'Alejandro Echavarría', 'Barrios de Jesús', 'C6-024', 'Transporte']
    },
    {
        codigo: 'C6-025',
        nombre: 'La Espadera - Estación Oriente',
        slug: 'la-espadera-estacion-oriente',
        color: '#4cc253',
        descripcion: 'Ruta C6-025 conectando La Espadera directamente con la Estación Oriente del Tranvía. Acceso rápido al sistema de transporte masivo.',
        videoUrl: 'https://www.youtube.com/embed/jUSE04WQ42Q',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1d-iqjVGG8bXxjSFHgtvTdOH1NPIuU6Y&ehbc=2E312F',
        keywords: ['8 de Marzo', 'Estación Oriente', 'Tranvía de Ayacucho', 'C6-025', 'Alimentador']
    },
    {
        codigo: 'C6-025B',
        nombre: 'Bosque Verde - Estación Oriente',
        slug: 'bosque-verde-estacion-oriente',
        color: '#2c5f5d',
        descripcion: 'Ruta C6-025B desde la urbanización Bosque Verde hasta la Estación Oriente. Servicio específico para conectar esta zona residencial con el Tranvía.',
        videoUrl: 'https://www.youtube.com/embed/9mJpaS0hZqc',
        mapaUrl: 'https://www.google.com/maps/d/embed?mid=1UgGA6ZJ_7-LJzFAeAHbatkfQ8x7rnEo&ehbc=2E312F',
        keywords: ['Bosque Verde', 'Estación Oriente', 'Tranvía', 'C6-025B', 'Transporte Residencial']
    }
]

// Funciones helper para buscar rutas
export function getRutaPorSlug(slug: string): Ruta | undefined {
    return RUTAS.find(r => r.slug === slug)
}

export function getRutaPorCodigo(codigo: string): Ruta | undefined {
    return RUTAS.find(r => r.codigo === codigo)
}

// Para retrocompatibilidad: convertir código a slug
export function getSlugFromCodigo(codigo: string): string {
    const ruta = getRutaPorCodigo(codigo)
    return ruta ? ruta.slug : codigo.toLowerCase()
}

// Para retrocompatibilidad: convertir slug a código
export function getCodigoFromSlug(slug: string): string {
    const ruta = getRutaPorSlug(slug)
    return ruta ? ruta.codigo : slug.toUpperCase()
}
