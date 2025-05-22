<template>
  <main>
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form">
            <h2>
              {{ $t("contacto.subtitulo") }}
            </h2>
            <form id="contactForm">
              <div class="form-group">
                <label for="name">{{ $t("contacto.form.nombre") }}</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="email">{{ $t("contacto.form.correo") }}</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div class="form-group">
                <label for="phone">{{ $t("contacto.form.telefono") }}</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div class="form-group">
                <label for="subject">{{ $t("contacto.form.asunto") }}</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div class="form-group">
                <label for="message">{{ $t("contacto.form.mensaje") }}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn-primary">
                {{ $t("contacto.form.botonEnviar") }}
              </button>
            </form>
          </div>
          <div class="contact-info">
            <h2>
              {{ $t("contacto.informacion.titulo") }}
            </h2>
            <div class="info-item">
              <h3>
                {{ $t("contacto.informacion.direccion.label") }}
              </h3>
              <p>
                {{ $t("contacto.informacion.direccion.detalle") }}
              </p>
            </div>
            <div class="info-item">
              <h3>
                {{ $t("contacto.informacion.telefono.label") }}
              </h3>
              <p>
                {{ $t("contacto.informacion.telefono.detalle") }}
              </p>
            </div>
            <div class="info-item">
              <h3>
                {{ $t("contacto.informacion.email.label") }}
              </h3>
              <p>
                {{ $t("contacto.informacion.email.detalle") }}
              </p>
            </div>
            <div class="info-item">
              <h3>
                {{ $t("contacto.informacion.horario.label") }}
              </h3>
              <p>
                {{ $t("contacto.informacion.horario.detalle") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// Si necesitas lógica, puedes añadirla aquí
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  font-family: "Nunito", sans-serif;
}

.btn-primary {
  background-color: #1b19a5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0f0e73;
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.btn-tertiary {
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.btn-tertiary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
/* Contact Content */
.contact-content {
  padding: 120px 0 80px;
  background-color: #fff;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.contact-form h2,
.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #212529;
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form .form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #212529;
}

.contact-form .form-group input,
.contact-form .form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.contact-form .form-group input:focus,
.contact-form .form-group textarea:focus {
  outline: none;
  border-color: #1b19a5;
}

.info-item {
  margin-bottom: 25px;
}

.info-item h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #1b19a5;
}

.info-item p {
  color: #6c757d;
  line-height: 1.5;
}
</style>
