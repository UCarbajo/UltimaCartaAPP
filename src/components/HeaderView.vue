<script setup>
import { RouterLink, useRoute } from "vue-router";
import { watchEffect } from "vue";

export function useDynamicHeaderStyle() {
  const route = useRoute();

  watchEffect(async () => {
    // opcional: limpia estilos previos inyectados por import dinámico
    // (Vite no elimina automáticamente el <style> anterior, habría que llevar un tracking si quieres hacerlo)

    if (route.meta.headerStyle) {
      await import(/* @vite-ignore */ "../components/css/HeaderStyle2.css");
    } else {
      await import(/* @vite-ignore */ "../components/css/HeaderStyle.css");
    }
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
