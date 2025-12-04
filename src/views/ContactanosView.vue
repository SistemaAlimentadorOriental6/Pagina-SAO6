<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import imagenBus from '../assets/images/bussao6.jpg'

useHead({
  title: 'Contáctanos - SAO6',
  meta: [
    { name: 'description', content: 'Ponte en contacto con SAO6.' }
  ]
})

const form = ref({
  nombres: '',
  correo: '',
  asunto: '',
  mensaje: ''
})

const enviando = ref(false)
const enviado = ref(false)

const enviarFormulario = async () => {
  if (!form.value.nombres || !form.value.correo || !form.value.asunto || !form.value.mensaje) return

  enviando.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  enviado.value = true
  enviando.value = false
  form.value = { nombres: '', correo: '', asunto: '', mensaje: '' }
}
</script>

<template>
  <section class="seccion-contacto">
    <div class="contenedor-principal">
      
      <!-- Encabezado Centrado -->
      <div class="encabezado-seccion">
        <span class="tag-seccion">Contacto</span>
        <h2 class="titulo-principal">Contáctanos</h2>
      </div>

      <!-- Mensaje de éxito -->
      <div v-if="enviado" class="tarjeta-exito">
        <div class="exito-icono">✓</div>
        <h3>¡Mensaje enviado!</h3>
        <p>Gracias por escribirnos. Te responderemos pronto.</p>
        <button @click="enviado = false" class="boton-verde">
          <span>Enviar otro mensaje</span>
          <div class="circulo-flecha">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </button>
      </div>

      <!-- Tarjeta Formulario -->
      <div v-else class="tarjeta-unica">
        <div class="layout-interno">
          
          <!-- Columna Izquierda: Formulario -->
          <div class="columna-formulario">
            <form @submit.prevent="enviarFormulario" class="formulario">
              
              <div class="fila-doble">
                <div class="grupo-input floating-label">
                  <input 
                    type="text" 
                    id="nombres"
                    v-model="form.nombres" 
                    placeholder=" "
                    class="input-linea"
                    required
                  >
                  <label for="nombres">Nombres y apellidos <span class="required">*</span></label>
                </div>
                <div class="grupo-input floating-label">
                  <input 
                    type="email" 
                    id="correo"
                    v-model="form.correo" 
                    placeholder=" "
                    class="input-linea"
                    required
                  >
                  <label for="correo">Correo electrónico <span class="required">*</span></label>
                </div>
              </div>

              <div class="grupo-input floating-label">
                <input 
                  type="text" 
                  id="asunto"
                  v-model="form.asunto" 
                  placeholder=" "
                  class="input-linea"
                  required
                >
                <label for="asunto">Asunto <span class="required">*</span></label>
              </div>

              <div class="grupo-input floating-label">
                <textarea 
                  id="mensaje"
                  v-model="form.mensaje" 
                  placeholder=" "
                  rows="3"
                  class="input-linea textarea-auto"
                  required
                ></textarea>
                <label for="mensaje">Mensaje <span class="required">*</span></label>
              </div>

              <div class="footer-form">
                <button 
                  type="submit" 
                  class="boton-verde"
                  :disabled="enviando"
                >
                  <span>{{ enviando ? 'Enviando...' : 'Enviar mensaje' }}</span>
                  <div class="circulo-flecha">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>

          <!-- Columna Derecha: Imagen -->
          <div class="columna-imagen">
            <img :src="imagenBus" alt="Bus SAO6" />
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.seccion-contacto {
  padding: 8rem 2rem 6rem;
  background-color: #ffffff;
  font-family: 'Outfit', sans-serif;
  min-height: 100vh;
}

.contenedor-principal {
  max-width: 1200px;
  margin: 0 auto;
}

/* Encabezado */
.encabezado-seccion {
  text-align: center;
  margin-bottom: 4rem;
}

.tag-seccion {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 700;
  color: #2c5f5d;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 1rem;
  background: rgba(44, 95, 93, 0.1);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
}

.titulo-principal {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.1;
}

/* Tarjeta */
.tarjeta-unica {
  background: white;
  border-radius: 32px;
  padding: 3rem;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0,0,0,0.05);
}

.layout-interno {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.columna-formulario {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Formulario */
.formulario {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.fila-doble {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

/* Floating Labels */
.floating-label {
  position: relative;
}

.input-linea {
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 0.75rem 0;
  font-size: 1rem;
  color: #1a1a1a;
  background: transparent;
  transition: border-color 0.3s ease;
  font-family: 'Outfit', sans-serif;
}

.input-linea:focus {
  outline: none;
  border-bottom-color: #4CAF50;
}

.floating-label label {
  position: absolute;
  top: 0.75rem;
  left: 0;
  font-size: 0.95rem;
  color: #999;
  pointer-events: none;
  transition: all 0.3s ease;
}

.input-linea:focus ~ label,
.input-linea:not(:placeholder-shown) ~ label {
  top: -1.25rem;
  font-size: 0.8rem;
  color: #4CAF50;
  font-weight: 600;
}

.required {
  color: #4CAF50;
  margin-left: 2px;
}

.textarea-auto {
  resize: none;
  min-height: 80px;
}

/* Botón */
.boton-verde {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  font-family: 'Outfit', sans-serif;
}

.boton-verde:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4);
  background: #43A047;
}

.boton-verde:disabled {
  opacity: 0.7;
  cursor: wait;
}

.circulo-flecha {
  width: 36px;
  height: 36px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4CAF50;
  transition: transform 0.3s ease;
}

.boton-verde:hover .circulo-flecha {
  transform: translateX(2px);
}

/* Imagen */
.columna-imagen {
  border-radius: 24px;
  overflow: hidden;
}

.columna-imagen img {
  width: 100%;
  height: 100%;
  min-height: 400px;
  object-fit: cover;
  display: block;
}

/* Éxito */
.tarjeta-exito {
  background: white;
  border-radius: 32px;
  padding: 4rem;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0,0,0,0.05);
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.exito-icono {
  width: 80px;
  height: 80px;
  background: #4CAF50;
  color: white;
  font-size: 2.5rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.tarjeta-exito h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
}

.tarjeta-exito p {
  color: #666;
  margin: 0 0 2rem;
}

/* Responsive */
@media (max-width: 900px) {
  .layout-interno {
    grid-template-columns: 1fr;
  }

  .columna-imagen {
    order: -1;
  }

  .columna-imagen img {
    min-height: 300px;
  }

  .fila-doble {
    grid-template-columns: 1fr;
  }

  .titulo-principal {
    font-size: 2.5rem;
  }
}

@media (max-width: 600px) {
  .seccion-contacto {
    padding: 6rem 1rem 4rem;
  }

  .tarjeta-unica {
    padding: 2rem;
    border-radius: 20px;
  }

  .columna-imagen {
    border-radius: 16px;
  }
}
</style>
