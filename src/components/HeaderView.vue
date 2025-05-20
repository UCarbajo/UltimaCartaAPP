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
      ? "/src/components/css/HeaderStyle2.css"
      : "/src/components/css/HeaderStyle.css";
    styleEl = document.createElement("link");
    styleEl.rel = "stylesheet";
    styleEl.href = cssFile;
    document.head.appendChild(styleEl);
  });
}

useDynamicHeaderStyle();
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
              <a href="inicio#opinions">{{
                $t("headerFooter.menu.opiniones")
              }}</a>
            </li>
            <li>
              <a href="contacto">{{ $t("headerFooter.menu.contacto") }}</a>
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
              <a href="inicioSesion">{{
                $t("headerFooter.botones.iniciar")
              }}</a>
            </button>
            <button class="btn-secondary">
              <a href="registroEleccion">{{
                $t("headerFooter.botones.registrar")
              }}</a>
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
