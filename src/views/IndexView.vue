<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <!-- Hero Section with Background Video -->
  <section class="hero">
    <video class="hero-video" autoplay loop muted playsinline>
      <source src="../assets/Img/Videofondo.mp4" type="video/mp4" />
      Tu navegador no soporta videos en HTML5.
    </video>
    <div class="hero-overlay"></div>
    <div class="container">
      <h1>{{ $t("index.ultimaCarta") }}</h1>
      <p>{{ $t("index.descripcion") }}</p>
      <button class="btn-primary">
        <RouterLink to="/jugar">{{ $t("headerFooter.menu.jugar") }}</RouterLink>
      </button>
    </div>
  </section>

  <!-- User Opinions Section -->
  <section class="opinions" id="opinions">
    <div class="container">
      <h2>{{ $t("index.opinionesUsuarios") }}</h2>
      <div
        class="opinion-cards"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="125"
      >
        <!-- Opinion Card 1 -->
        <div class="opinion-card">
          <h3>@ProfLaura_92</h3>
          <div class="stars">
            <img
              class="estrellas"
              src="../assets/Img/estrellas5.png"
              alt="5 estrellas"
            />
          </div>
          <p>{{ $t("index.opiniones.proflaura") }}</p>
        </div>

        <!-- Opinion Card 2 -->
        <div class="opinion-card">
          <h3>@CarlosGamer16</h3>
          <div class="stars">
            <img
              class="estrellas"
              src="../assets/Img/estrellas4.png"
              alt="4 estrellas"
            />
          </div>
          <p>{{ $t("index.opiniones.carlosgamer") }}</p>
        </div>

        <!-- Opinion Card 3 -->
        <div class="opinion-card">
          <h3>@CulturaJoven_88</h3>
          <div class="stars">
            <img
              class="estrellas"
              src="../assets/Img/estrellas5.png"
              alt="5 estrellas"
            />
          </div>
          <p>{{ $t("index.opiniones.culturajoven") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
