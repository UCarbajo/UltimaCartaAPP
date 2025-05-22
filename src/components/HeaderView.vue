<script setup>
import { RouterLink, useRoute } from "vue-router";
import { watchEffect } from "vue";

const route = useRoute();

// Función para cargar y descargar CSS dinámicamente
function useDynamicHeaderStyle() {
  let styleEl = null;
  watchEffect(() => {
    // Elimina el anterior si existe
    if (styleEl) {
      document.head.removeChild(styleEl);
      styleEl = null;
    }
    // Decide qué CSS cargar según el meta
    const cssFile = route.meta.headerStyle
      ? "/css/HeaderStyle2.css"
      : "/css/HeaderStyle.css";
    styleEl = document.createElement("link");
    styleEl.rel = "stylesheet";
    styleEl.href = cssFile;
    document.head.appendChild(styleEl);
  });
}

useDynamicHeaderStyle();

// Scroll Header Effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
</script>
<!-- Header Section -->
<template>
  <header id="main-header">
    <div class="container">
      <RouterLink to="/" class="logo">{{
        $t("headerFooter.logo_bilbao_skp")
      }}</RouterLink>

      <!-- Hamburger Menu for Mobile -->
      <div class="hamburger-menu">
        <div class="hamburger-icon">
          <span></span> <span></span> <span></span>
        </div>
      </div>

      <div class="nav-container">
        <!-- Navigation Menu -->
        <nav>
          <ul>
            <li>
              <RouterLink to="/jugar">{{
                $t("headerFooter.menu.jugar")
              }}</RouterLink>
            </li>
            <li v-if="usuario">
              <a href="gestion">{{ $t("headerFooter.menu.gestion") }}</a>
            </li>
            <li v-if="usuario && usuario.rol && usuario.rol.id != 2">
              <a href="ranking">{{ $t("headerFooter.menu.ranking") }}</a>
            </li>
            <li>
              <RouterLink to="/#opinions">{{
                $t("headerFooter.menu.opiniones")
              }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/contacto">{{
                $t("headerFooter.menu.contacto")
              }}</RouterLink>
            </li>
          </ul>
        </nav>

        <!-- Header Buttons -->
        <div class="header-buttons">
          <template v-if="usuario">
            <button class="btn-primary">
              <a href="cerrarSesion">{{ $t("headerFooter.botones.cerrar") }}</a>
            </button>
          </template>
          <template v-else>
            <button class="btn-primary">
              <RouterLink to="/iniciarSesion">{{
                $t("headerFooter.botones.iniciar")
              }}</RouterLink>
            </button>
            <button class="btn-secondary">
              <RouterLink to="/registro">{{
                $t("headerFooter.botones.registrar")
              }}</RouterLink>
            </button>
          </template>
          <button class="btn-tertiary">
            <a :href="`?lang=${lang === 'en' ? 'es' : 'en'}`">
              {{ $t("headerFooter.botones.idioma") }}
            </a>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
