<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="registration-selection">
    <div class="container">
      <h1 class="page-title">
        {{ $t("registroEleccion.titulo") }}
      </h1>

      <div class="registration-options">
        <RouterLink
          :to="{ name: 'RegistroIndividual' }"
          class="registration-option"
        >
          <div class="registration-box">
            <div class="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2>
              {{ $t("registroEleccion.opciones.individual.titulo") }}
            </h2>
            <p class="option-description">
              {{ $t("registroEleccion.opciones.individual.descripcion") }}
            </p>
          </div>
        </RouterLink>
        <RouterLink
          :to="{ name: 'RegistroCentro' }"
          class="registration-option"
        >
          <div class="registration-box">
            <div class="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h2>
              {{ $t("registroEleccion.opciones.centro.titulo") }}
            </h2>
            <p class="option-description">
              {{ $t("registroEleccion.opciones.centro.descripcion") }}
            </p>
          </div>
        </RouterLink>
      </div>
    </div>
  </main>
</template>
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
  text-align: center;
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
  text-align: center;
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

.hero .btn-primary {
  padding: 15px 30px;
  font-size: 0.9rem;
  letter-spacing: 0.15rem;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #1b19a5;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0f0e73;
}
.registration-selection {
  padding: 160px 0 100px;
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  background-image: linear-gradient(
    135deg,
    rgba(27, 25, 165, 0.03) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.page-title {
  text-align: center;
  font-weight: 700;
  margin-bottom: 60px;
  color: #212529;
  position: relative;
  padding-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.page-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #1b19a5;
}

.registration-options {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  margin-top: 40px;
}

.registration-option {
  flex: 0 0 400px;
  transition: all 0.4s ease;
  max-width: 100%;
}

.registration-option:hover {
  transform: translateY(-8px);
}

.registration-box {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #e9ecef;
  margin-top: 2.1rem;
  margin-bottom: 2.15rem;
}

.registration-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #1b19a5;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.registration-option:hover .registration-box {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.registration-option:hover .registration-box::before {
  transform: scaleX(1);
}

.icon-container {
  margin-bottom: 25px;
  color: #1b19a5;
  transition: all 0.3s ease;
}

.registration-option:hover .icon-container {
  transform: scale(1.1);
}

.registration-box h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #212529;
}

.option-description {
  color: #6c757d;
  font-size: 0.95rem;
  max-width: 280px;
  margin: 0 auto;
  line-height: 1.6;
}
</style>
