<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { useHead } from '@vueuse/head'

// Meta tags optimizados para SEO
useHead({
  title: 'Condiciones de Uso A.D.I | SAO6',
  meta: [
    { 
      name: 'description', 
      content: 'Política de Tratamiento de Datos Personales de la Aplicación A.D.I (Automatización Digital Inteligente) de SISTEMA ALIMENTADOR ORIENTAL S.A.S.' 
    },
    { 
      name: 'keywords', 
      content: 'condiciones de uso, A.D.I, tratamiento de datos personales, SAO6, seguridad de la informacion, Medellín' 
    },
    { name: 'author', content: 'SISTEMA ALIMENTADOR ORIENTAL S.A.S' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph para redes sociales
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Condiciones de Uso A.D.I | SAO6' },
    { property: 'og:description', content: 'Política de Tratamiento de Datos Personales de la Aplicación A.D.I (Automatización Digital Inteligente).' },
    { property: 'og:url', content: 'https://sao6.com.co/condiciones-de-uso-de-adi' },
    { property: 'og:site_name', content: 'SAO6 - Sistema Alimentador Oriental' }
  ],
  link: [
    { rel: 'canonical', href: 'https://sao6.com.co/condiciones-de-uso-de-adi' }
  ]
})

const tituloRef = ref<HTMLElement | null>(null)
const contenidoRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Animación de entrada elegante
  const tl = gsap.timeline()
  
  tl.from(tituloRef.value, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .from(contenidoRef.value, {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
})
</script>

<template>
  <div class="pagina-condiciones">
    <header class="header-condiciones">
      <div class="contenedor-estrecho header-content">
        <div class="categoria-tag">Legal</div>
        <h1 ref="tituloRef">POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES</h1>
        <p class="subtitle">APLICACIÓN A.D.I (Automatización Digital Inteligente)</p>
      </div>
    </header>

    <article class="contenido-condiciones" ref="contenidoRef">
      <div class="contenedor-estrecho">
        <div class="cuerpo-texto">
          
          <section class="seccion-legal">
            <h2>1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO</h2>
            <p>
              SISTEMA ALIMENTADOR ORIENTAL S.A.S, sociedad comercial identificada con NIT 900566324-5, domiciliada en Medellín, en adelante el RESPONSABLE, actúa como responsable del tratamiento de los datos personales recopilados a través de la aplicación A.D.I (Automatización Digital Inteligente), en estricto cumplimiento de la Constitución Política de Colombia, la Ley 1581 de 2012, el Decreto Reglamentario 1377 de 2013 y demás normatividad aplicable.
            </p>
          </section>

          <section class="seccion-legal">
            <h2>2. DESCRIPCIÓN DE LA APLICACIÓN A.D.I</h2>
            <p>
              La aplicación A.D.I (Automatización Digital Inteligente) es una herramienta tecnológica de propiedad de SISTEMA ALIMENTADOR ORIENTAL S.A.S, diseñada para operar en dispositivos móviles para los colaboradores. Sus principales funcionalidades que implican el tratamiento de datos personales son:
            </p>
            <ol>
              <li><strong>Seguimiento de ubicación en segundo plano:</strong> la aplicación accede y registra en tiempo real la posición geográfica del dispositivo del usuario, incluso cuando la aplicación no está activa en primer plano.</li>
              <li><strong>Grabación y almacenamiento de audio y voz:</strong> la aplicación puede acceder al micrófono del dispositivo para capturar, procesar y almacenar grabaciones de voz o audio del usuario.</li>
              <li><strong>Recopilación y almacenamiento de datos personales:</strong> la aplicación almacena información personal del usuario para el cumplimiento de sus funcionalidades operativas y de gestión.</li>
            </ol>
          </section>

          <section class="seccion-legal">
            <h2>3. DATOS PERSONALES OBJETO DE TRATAMIENTO</h2>
            
            <h3>3.1. Datos personales de identificación general</h3>
            <ul>
              <li>Nombres y apellidos completos.</li>
              <li>Número de documento de identidad (cédula de ciudadanía, NIT, pasaporte u otro).</li>
              <li>Dirección de correo electrónico.</li>
              <li>Número de teléfono o celular.</li>
              <li>Cargo o función dentro de la organización.</li>
            </ul>

            <h3>3.1. Datos de ubicación geográfica (dato sensible asimilado)</h3>
            <p>
              La aplicación A.D.I recopila y almacena coordenadas GPS, puntos de recorrido, historial de trayectos y posición en tiempo real del dispositivo del usuario, incluso cuando la aplicación opera en segundo plano. Dada la naturaleza de este dato, su recolección requiere autorización previa, expresa e informada del Titular.
            </p>

            <h3>4.3. Datos de audio y voz (dato sensible)</h3>
            <p>
              La aplicación accede al micrófono del dispositivo para capturar grabaciones de voz, instrucciones de voz y registros de audio asociados a la actividad laboral del usuario si es necesaria. Estos datos son considerados datos sensibles en la medida en que revelan características de la persona y se someten a las protecciones reforzadas previstas en el artículo 6 de la Ley 1581 de 2012.
            </p>

            <h3>3.4. Datos técnicos del dispositivo</h3>
            <ul>
              <li>Identificador único del dispositivo (ID de dispositivo, IMEI u otros identificadores).</li>
              <li>Sistema operativo y versión de la aplicación.</li>
              <li>Registros de actividad e interacción con la aplicación.</li>
              <li>Dirección IP de la conexión.</li>
            </ul>
          </section>

          <section class="seccion-legal">
            <h2>4. DATOS SENSIBLES Y PROTECCIÓN ESPECIAL</h2>
            <p>
              De conformidad con el artículo 5 de la Ley 1581 de 2012, se consideran datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar discriminación. En el marco de la aplicación A.D.I, se tratan los siguientes datos sensibles:
            </p>
            <p>
              <strong>Grabaciones de audio y voz:</strong> revelan características personales, contexto y contenido de conversaciones del Titular, por lo que requieren autorización expresa e independiente del Titular.
            </p>
            <p>
              <strong>Datos de ubicación en tiempo real y en segundo plano:</strong> la trazabilidad permanente de la posición geográfica constituye información altamente sensible que puede revelar patrones de conducta, lugares de residencia, trabajo, reunión o hábitos privados del Titular.
            </p>
            <p>
              El suministro de este tipo de datos es de carácter facultativo; sin embargo, la negativa a otorgar autorización para su tratamiento puede limitar o impedir el funcionamiento de determinadas funcionalidades de la aplicación A.D.I.
            </p>
          </section>

          <section class="seccion-legal">
            <h2>5. FINALIDADES DEL TRATAMIENTO</h2>
            
            <h3>5.1. Finalidades relacionadas con la ubicación en tiempo real</h3>
            <ol>
              <li>Seguimiento y monitoreo operativo de actividades, rutas o desplazamientos asociados a los procesos internos de SISTEMA ALIMENTADOR ORIENTAL S.A.S.</li>
              <li>Verificación de presencia, asistencia o cumplimiento de actividades en campo.</li>
              <li>Generación de reportes de trayectoria, eficiencia y desempeño operativo.</li>
              <li>Gestión de la seguridad del personal en campo y respuesta ante emergencias o incidentes.</li>
            </ol>

            <h3>5.2. Finalidades relacionadas con el audio y voz</h3>
            <ol>
              <li>Registro de instrucciones, reportes verbales o comunicaciones operativas del usuario dentro de la aplicación.</li>
              <li>Digitalización y procesamiento de contenido de voz para la automatización de tareas y flujos de trabajo.</li>
              <li>Auditoría, control de calidad y verificación de comunicaciones operativas cuando la normativa interna lo requiera.</li>
            </ol>

            <h3>5.3. Finalidades relacionadas con datos personales generales</h3>
            <ol>
              <li>Identificación y autenticación del usuario dentro de la aplicación.</li>
              <li>Cumplimiento de obligaciones legales, contractuales y laborales del RESPONSABLE.</li>
              <li>Administración de la relación contractual entre el RESPONSABLE y el Titular.</li>
              <li>Envío de comunicaciones operativas, notificaciones institucionales e información relevante para el uso de la aplicación.</li>
              <li>Evaluación de la calidad del servicio y mejoramiento continuo de las funcionalidades de la aplicación.</li>
              <li>Atención y trámite de requerimientos, quejas y reclamos presentados por el Titular.</li>
            </ol>
          </section>

          <section class="seccion-legal">
            <h2>6. DERECHOS DEL TITULAR</h2>
            <p>
              En virtud del artículo 8 de la Ley 1581 de 2012, el Titular de los datos personales tratados por la aplicación A.D.I tiene los siguientes derechos, los cuales podrá ejercer en cualquier momento:
            </p>
            <ul>
              <li>Acceder gratuitamente a sus datos personales que sean objeto de tratamiento.</li>
              <li>Conocer, actualizar y rectificar sus datos personales cuando sean inexactos, incompletos, fraccionados, que induzcan a error, o cuyo tratamiento esté expresamente prohibido o no haya sido autorizado.</li>
              <li>Solicitar prueba de la autorización otorgada al RESPONSABLE, salvo cuando expresamente se exceptúe como requisito para el tratamiento.</li>
              <li>Ser informado por el RESPONSABLE sobre el uso que se ha dado a sus datos personales, previa solicitud.</li>
              <li>Revocar la autorización y/o solicitar la supresión de los datos cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales vigentes, o cuando no exista obligación legal o contractual que imponga el mantenimiento del dato.</li>
              <li>Abstenerse de responder preguntas sobre datos sensibles o datos de niños, niñas y adolescentes.</li>
            </ul>
          </section>

          <section class="seccion-legal">
            <h2>7. AUTORIZACIÓN DEL TITULAR</h2>
            <p>
              De conformidad con los artículos 9 y 10 de la Ley 1581 de 2012 y el artículo 7 del Decreto 1377 de 2013, el tratamiento de datos personales requiere la autorización previa, expresa e informada del Titular. En el caso de la aplicación A.D.I, dicha autorización se obtiene a través del mecanismo de aceptación explícita dispuesto durante el proceso de instalación y/o primer uso de la aplicación, así como mediante la aceptación de los permisos requeridos en el dispositivo para el acceso a:
            </p>
            <ul>
              <li>Ubicación del dispositivo.</li>
              <li>Micrófono del dispositivo para grabación de audio y voz.</li>
              <li>Almacenamiento local del dispositivo.</li>
            </ul>
            <p>
              Para los datos sensibles (audio, voz y ubicación en segundo plano), se solicitará una autorización específica, diferenciada e independiente del Titular.
            </p>
          </section>

          <section class="seccion-legal">
            <h2>8. MEDIDAS DE SEGURIDAD</h2>
            <p>
              SISTEMA ALIMENTADOR ORIENTAL S.A.S implementa las medidas técnicas, humanas y administrativas necesarias para garantizar la seguridad de los datos personales tratados a través de la aplicación A.D.I, en cumplimiento del artículo 17, literal (f) de la Ley 1581 de 2012. Entre las medidas adoptadas se incluyen:
            </p>
            <ul>
              <li>Control de acceso basado en roles y autenticación segura para el acceso a los sistemas de información.</li>
              <li>Registro y auditoría de accesos y operaciones sobre los datos personales.</li>
              <li>Políticas internas de gestión de incidentes de seguridad de la información y brechas de datos.</li>
              <li>Capacitación periódica del personal que tiene acceso a datos personales.</li>
              <li>Suscripción de acuerdos de confidencialidad con proveedores y terceros encargados del tratamiento.</li>
            </ul>
          </section>

          <section class="seccion-legal">
            <h2>9. TIEMPO DE CONSERVACIÓN DE LOS DATOS</h2>
            <p>
              Los datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades que motivaron su recolección, y mientras subsista la relación contractual o legal con el Titular. Una vez cumplida la finalidad y superados los plazos legales, los datos serán suprimidos, anonimizados o bloqueados de forma segura.
            </p>
            <p><strong>Especificidades por tipo de dato:</strong></p>
            <ul>
              <li><strong>Datos de ubicación (registros de trayecto):</strong> conservados por el tiempo necesario para las finalidades operativas declaradas y conforme a los plazos legales aplicables.</li>
              <li><strong>Grabaciones de audio y voz:</strong> conservadas por el período mínimo necesario para las finalidades declaradas; una vez cumplida la finalidad, serán eliminadas de forma segura.</li>
              <li><strong>Datos personales de identificación:</strong> conservados mientras dure la relación contractual o laboral y por los plazos adicionales exigidos por la normativa laboral, tributaria y contable colombiana.</li>
            </ul>
          </section>

          <section class="seccion-legal">
            <h2>10. AUTORIDAD DE CONTROL</h2>
            <p>
              La autoridad encargada de velar por el cumplimiento de la Ley 1581 de 2012 es la Superintendencia de Industria y Comercio (SIC), ante la cual el Titular podrá presentar quejas una vez agotado el procedimiento ante el RESPONSABLE.
            </p>
            <ul>
              <li><strong>Sitio web:</strong> www.sic.gov.co</li>
              <li><strong>Dirección:</strong> Carrera 13 No. 27 – 00, Bogotá D.C., Colombia.</li>
              <li><strong>Línea de atención:</strong> 601 587 0000</li>
            </ul>
          </section>

          <footer class="firma-legal">
            <p><strong>SISTEMA ALIMENTADOR ORIENTAL S.A.S — NIT 900566324-5</strong></p>
            <p>Responsable del Tratamiento de Datos Personales – Aplicación A.D.I</p>
          </footer>

        </div>

        <div class="navegacion-inferior">
          <router-link to="/" class="btn-volver">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Volver al Inicio
          </router-link>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.pagina-condiciones {
  font-family: 'Outfit', sans-serif;
  background: #fdfdfd;
  color: #2d3748;
}

.contenedor-estrecho {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.header-condiciones {
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  padding: 6rem 0 4rem 0;
  color: white;
  text-align: left;
}

.categoria-tag {
  display: inline-block;
  background: #4cc253;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.header-condiciones h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 1rem 0;
  color: #ffffff;
}

.subtitle {
  font-size: 1.25rem;
  color: #cbd5e0;
  font-weight: 500;
  margin: 0;
}

/* Contenido */
.contenido-condiciones {
  padding: 4rem 0 6rem 0;
}

.cuerpo-texto {
  padding: 1rem 0;
}

.seccion-legal {
  margin-bottom: 3rem;
}

.seccion-legal h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1.25rem;
  border-bottom: 2px solid #edf2f7;
  padding-bottom: 0.5rem;
}

.seccion-legal h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1.5rem 0 0.75rem 0;
}

.seccion-legal p {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #4a5568;
  margin-bottom: 1rem;
}

.seccion-legal ul, .seccion-legal ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.seccion-legal li {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.seccion-legal li strong {
  color: #2d3748;
}

.firma-legal {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 2px dashed #e2e8f0;
  text-align: center;
  color: #718096;
}

.firma-legal p {
  margin: 0.25rem 0;
  font-size: 1rem;
}

/* Navegación */
.navegacion-inferior {
  margin-top: 3rem;
  border-top: 1px solid #edf2f7;
  padding-top: 2rem;
}

.btn-volver {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: #718096;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-volver:hover {
  color: #4cc253;
  transform: translateX(-5px);
}

@media (max-width: 768px) {
  .header-condiciones {
    padding: 4rem 0 3rem 0;
  }
  
  .seccion-legal h2 {
    font-size: 1.25rem;
  }
}
</style>
