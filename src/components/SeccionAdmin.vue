<script setup lang="ts">
import { ref } from 'vue'

const usuario = ref('')
const contrasena = ref('')
const recordarme = ref(false)

const iniciarSesion = () => {
  if (usuario.value && contrasena.value) {
    console.log('Iniciando sesión...', { usuario: usuario.value })
    // Aquí irá la lógica para redirigir a la página de administración
    window.location.href = 'https://tuenlaceadministracion.com' // Cambia esto por tu URL
  }
}
</script>

<template>
  <section class="seccion-admin" id="administremos">
    <div class="contenedor-admin">
      
      <div class="card-login">
        
        <!-- Lado Izquierdo: Ilustración -->
        <div class="lado-ilustracion">
          <div class="overlay-gradiente"></div>
          <div class="contenido-ilustracion">
            <img src="/LOGOSAO6.svg" alt="SAO Logo" class="logo-admin" />
            <h2 class="titulo-bienvenida">Bienvenido al<br>Portal de Administración</h2>
            <p class="descripcion-admin">
              Accede a las herramientas y recursos necesarios para gestionar el sistema SAO de manera eficiente.
            </p>
          </div>
        </div>

        <!-- Lado Derecho: Formulario -->
        <div class="lado-formulario">
          <div class="contenido-formulario">
            
            <div class="header-form">
              <h3 class="titulo-login">Iniciar Sesión</h3>
              <p class="subtitulo-login">Ingresa tus credenciales para continuar</p>
            </div>

            <form @submit.prevent="iniciarSesion" class="formulario-login">
              
              <div class="grupo-input">
                <label for="usuario" class="label">Usuario</label>
                <input 
                  type="text" 
                  id="usuario"
                  v-model="usuario"
                  placeholder="Ingresa tu usuario" 
                  class="input-campo"
                  required
                />
                <div class="icono-input">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>

              <div class="grupo-input">
                <label for="contrasena" class="label">Contraseña</label>
                <input 
                  type="password" 
                  id="contrasena"
                  v-model="contrasena"
                  placeholder="Ingresa tu contraseña" 
                  class="input-campo"
                  required
                />
                <div class="icono-input">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
              </div>

              <div class="opciones-row">
                <label class="checkbox-container">
                  <input type="checkbox" v-model="recordarme" class="checkbox-input" />
                  <span class="checkbox-custom"></span>
                  <span class="checkbox-label">Recordarme</span>
                </label>
                <a href="#" class="enlace-olvido">¿Olvidaste tu contraseña?</a>
              </div>

              <button type="submit" class="boton-login">
                <span>Ingresar al Portal</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </button>

            </form>

            <div class="footer-form">
              <p class="texto-ayuda">¿Necesitas ayuda? <a href="#contacto">Contáctanos</a></p>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.seccion-admin {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 4rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  font-family: 'Outfit', sans-serif;
}

.contenedor-admin {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.card-login {
  background: white;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 650px;
}

/* Lado Izquierdo - Ilustración */
.lado-ilustracion {
  background: linear-gradient(135deg, #4CAF50 0%, #388E3C 100%);
  position: relative;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-gradiente {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,0.3));
}

.contenido-ilustracion {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.logo-admin {
  height: 70px;
  width: auto;
  filter: brightness(0) invert(1);
  margin-bottom: 2.5rem;
}

.titulo-bienvenida {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
}

.descripcion-admin {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.7;
  margin: 0;
}

/* Lado Derecho - Formulario */
.lado-formulario {
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contenido-formulario {
  width: 100%;
  max-width: 400px;
}

.header-form {
  margin-bottom: 3rem;
}

.titulo-login {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.subtitulo-login {
  font-size: 0.975rem;
  color: #666;
  margin: 0;
}

/* Formulario */
.formulario-login {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.grupo-input {
  position: relative;
}

.label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.input-campo {
  width: 100%;
  padding: 1rem 1.25rem 1rem 3.25rem;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  font-size: 0.975rem;
  font-family: 'Outfit', sans-serif;
  transition: all 0.3s ease;
  background: #fafafa;
}

.input-campo:focus {
  outline: none;
  border-color: #4CAF50;
  background: white;
  box-shadow: 0 0 0 4px rgba(76, 175, 80, 0.1);
}

.icono-input {
  position: absolute;
  left: 1.25rem;
  bottom: 1rem;
  color: #999;
  pointer-events: none;
}

.input-campo:focus ~ .icono-input {
  color: #4CAF50;
}

/* Opciones Row */
.opciones-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #e5e5e5;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: #fafafa;
}

.checkbox-input:checked ~ .checkbox-custom {
  background: #4CAF50;
  border-color: #4CAF50;
}

.checkbox-input:checked ~ .checkbox-custom::after {
  content: '✓';
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
}

.checkbox-label {
  font-size: 0.9rem;
  color: #666;
}

.enlace-olvido {
  font-size: 0.9rem;
  color: #4CAF50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.enlace-olvido:hover {
  color: #388E3C;
  text-decoration: underline;
}

/* Botón Login */
.boton-login {
  width: 100%;
  padding: 1.125rem 2rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Outfit', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.boton-login:hover {
  background: #388E3C;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
}

.boton-login svg {
  transition: transform 0.3s ease;
}

.boton-login:hover svg {
  transform: translateX(4px);
}

/* Footer Form */
.footer-form {
  margin-top: 2rem;
  text-align: center;
}

.texto-ayuda {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.texto-ayuda a {
  color: #4CAF50;
  text-decoration: none;
  font-weight: 600;
}

.texto-ayuda a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 968px) {
  .card-login {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .lado-ilustracion {
    padding: 3rem 2rem;
    min-height: 300px;
  }

  .titulo-bienvenida {
    font-size: 2rem;
  }

  .lado-formulario {
    padding: 3rem 2rem;
  }
}

@media (max-width: 640px) {
  .seccion-admin {
    padding: 4rem 1rem 2rem;
  }

  .card-login {
    border-radius: 24px;
  }

  .lado-formulario {
    padding: 2rem 1.5rem;
  }

  .titulo-login {
    font-size: 1.75rem;
  }
}
</style>
