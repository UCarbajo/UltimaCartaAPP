<template>
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
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goHome() {
  router.push("/");
}
</script>

<style scoped>
.nuevo-view {
  max-width: 400px;
  margin: 60px auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  text-align: center;
}
h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}
p {
  color: #555;
  margin-bottom: 2rem;
}
button {
  background: #2c3e50;
  color: #fff;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}
button:hover {
  background: #1a232c;
}
</style>
