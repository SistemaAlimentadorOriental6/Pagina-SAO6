<script setup lang="ts">
// Footer component
</script>

<template>
  <footer class="footer">
    <div class="contenedor-footer">
      
      <!-- Sección Superior: Enlaces en Columnas -->
      <div class="footer-superior">
        <div class="columna-enlaces">
          <h3>Explorar</h3>
          <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/rutas">Rutas</router-link></li>
            <li><router-link to="/nosotros">Nosotros</router-link></li>
            <li><router-link to="/noticias">Noticias</router-link></li>
          </ul>
        </div>

        <div class="columna-enlaces">
          <h3>Políticas</h3>
          <ul>
            <li><a href="/images/PO-SGI-01-Politica-del-sistema-de-gestion-1.jpg" target="_blank">Política del Sistema de gestión integral</a></li>
            <li><a href="/pdf/PO-SGI-05-Politica-de-tratamiento-de-la-informacion.pdf" target="_blank">Política de Tratamiento de la Información</a></li>
          </ul>
        </div>

        <div class="columna-enlaces">
          <h3>Información</h3>
          <ul>
            <li><a href="https://civica.metrodemedellin.gov.co/que-es-civica/tarifas/" target="_blank">Tarifas</a></li>
            <li><a href="https://civica.metrodemedellin.gov.co/" target="_blank">Tarjeta Cívica</a></li>
            <li><a href="https://admon.sao6.com.co/" target="_blank">Administremos</a></li>
          </ul>
        </div>

        <div class="columna-enlaces">
          <h3>Contacto</h3>
          <ul>
            <li><a href="tel:+576044449598">Línea Hola Metro: (604) 444-9598</a></li>
            <li><a href="mailto:Infosao@sao6.com.co">Infosao@sao6.com.co</a></li>
            <li><a href="#ubicacion">Carrera 56A #62-50, Medellín, Colombia</a></li>
          </ul>
        </div>
      </div>

      <!-- Divisor -->
      <div class="divisor"></div>

      <!-- Sección Inferior: Información + Logo + Redes -->
      <div class="footer-inferior">
        
        <!-- Quiénes Somos -->
        <div class="columna-quien">
          <h4>Quiénes somos</h4>
          <p>
            Nuestros buses alimentadores no solo llevan personas: impulsan los sueños, metas e historias que construyen ciudad.
            <br>
            ¡Medellín Conduce el Cambio!
          </p>
        </div>

        <!-- Logo Central -->
        <div class="columna-logo">
          <div class="logo-wrapper">
            <img src="/LOGOSAO6.svg" alt="SAO6 Logo" class="footer-logo" />
            <h2>Sistema Alimentador Oriental</h2>
          </div>
        </div>

        <!-- Redes Sociales -->
        <div class="columna-redes">
          <h4>Síguenos</h4>
          <div class="redes-sociales">
            <a href="https://www.facebook.com/alimentadoresmetrosao6" target="_blank" aria-label="Facebook" class="red-social">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/alimentadoresmetro_sao6/" target="_blank" aria-label="Instagram" class="red-social">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@Sao6." target="_blank" aria-label="YouTube" class="red-social">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <!-- Copyright -->
      <div class="footer-copyright">
        <p>© 2025 SAO6 - Todos los derechos reservados</p>
      </div>

    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Bree+Serif&display=swap');

.footer {
  background: #4cc253;
  font-family: 'Outfit', sans-serif;
  color: white;
  padding: 4rem 2rem 2rem;
  border-radius: 60px 60px 0 0;
  margin-top: 4rem;
  overflow: hidden;
}

.contenedor-footer {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.footer-superior {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.columna-enlaces h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1.25rem 0;
  letter-spacing: 0.3px;
}

.columna-enlaces ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.columna-enlaces ul li a,
.columna-enlaces ul li .router-link-active,
.columna-enlaces ul li .router-link-exact-active {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.columna-enlaces ul li a::after,
.columna-enlaces ul li .router-link-active::after,
.columna-enlaces ul li .router-link-exact-active::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background: white;
  transition: width 0.3s ease;
}

.columna-enlaces ul li a:hover,
.columna-enlaces ul li .router-link-active:hover,
.columna-enlaces ul li .router-link-exact-active:hover {
  color: white;
  transform: translateX(5px);
}

.columna-enlaces ul li a:hover::after,
.columna-enlaces ul li .router-link-active:hover::after,
.columna-enlaces ul li .router-link-exact-active:hover::after {
  width: 100%;
}

.divisor {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
  margin: 3rem 0;
}

.footer-inferior {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 4rem;
  align-items: center;
  padding-bottom: 2.5rem;
}

.columna-quien h4,
.columna-redes h4 {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1rem 0;
  letter-spacing: 0.3px;
}

.columna-quien p {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin: 0;
  max-width: 350px;
}

.columna-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
}

.logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  transform: scale(1);
  transition: transform 0.3s ease;
  text-align: center;
}

.logo-wrapper:hover {
  transform: scale(1.05);
}

.footer-logo {
  height: 50px;
  width: auto;
  filter: brightness(0) invert(1) drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
}

.logo-wrapper h2 {
  font-family: 'Bree Serif', serif;
  font-size: 1.65rem;
  font-weight: 300;
  color: white;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.2;
  white-space: nowrap;
  letter-spacing: 0.5px;
}

.columna-redes {
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.redes-sociales {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.red-social {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.red-social::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.red-social svg {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.red-social:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.4);
}

.red-social:hover::before {
  opacity: 0.2;
}

.red-social:hover svg {
  transform: scale(1.1);
}

.footer-copyright {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-copyright p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
  letter-spacing: 0.5px;
}

/* Responsive Design Mejorado */
@media (max-width: 1200px) {
  .footer-superior {
    gap: 2rem;
  }
  
  .footer-inferior {
    gap: 3rem;
  }
}

@media (max-width: 1024px) {
  .footer {
    border-radius: 40px 40px 0 0;
    padding: 3rem 2rem 2rem;
  }

  .footer-superior {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  .footer-inferior {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .columna-logo {
    order: -1;
    justify-content: center;
  }

  .logo-wrapper {
    justify-content: center;
  }

  .columna-quien {
    text-align: center;
  }

  .columna-quien p {
    max-width: 100%;
    margin: 0 auto;
  }

  .columna-redes {
    text-align: center;
    align-items: center;
  }

  .redes-sociales {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem 2rem;
    border-radius: 30px 30px 0 0;
  }

  .footer-superior {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-bottom: 2.5rem;
  }

  .divisor {
    margin: 2rem 0;
  }

  .footer-inferior {
    gap: 2rem;
    padding-bottom: 2rem;
  }

  .logo-wrapper {
    gap: 0.875rem;
  }

  .footer-logo {
    height: 40px;
  }

  .logo-wrapper h2 {
    font-size: 1.25rem;
  }

  .columna-quien h4,
  .columna-redes h4 {
    font-size: 1.1rem;
    margin-bottom: 0.875rem;
  }

  .columna-quien p {
    font-size: 1rem;
    line-height: 1.6;
  }

  .redes-sociales {
    gap: 0.75rem;
  }

  .red-social {
    width: 38px;
    height: 38px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 2.5rem 1rem 1.5rem;
    border-radius: 24px 24px 0 0;
    margin-top: 3rem;
  }

  .footer-superior {
    gap: 1.75rem;
    padding-bottom: 2rem;
  }

  .columna-enlaces h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .columna-enlaces ul {
    gap: 0.625rem;
  }

  .columna-enlaces ul li a {
    font-size: 1rem;
  }

  .divisor {
    margin: 1.75rem 0;
  }

  .footer-inferior {
    gap: 1.75rem;
  }

  .logo-wrapper {
    gap: 0.625rem;
  }

  .footer-logo {
    height: 36px;
  }

  .logo-wrapper h2 {
    font-size: 1.1rem;
  }

  .columna-quien h4,
  .columna-redes h4 {
    font-size: 1.1rem;
  }

  .columna-quien p {
    font-size: 1rem;
  }

  .redes-sociales {
    gap: 0.625rem;
  }

  .red-social {
    width: 36px;
    height: 36px;
  }

  .red-social svg {
    width: 16px;
    height: 16px;
  }

  .footer-copyright {
    padding-top: 1.5rem;
  }

  .footer-copyright p {
    font-size: 0.9rem;
  }
}
</style>
