<script setup>
import "./css/FooterStyle.css";
</script>
<template>
  <!-- Footer Section -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <!-- Social Media Links -->
        <div class="social-links">
          <a href="https://www.instagram.com/dcdevelopment_" target="_blank"
            ><img class="IG" src="/src/assets/Img/igb.png" alt="Instagram"
          /></a>
          <a href="https://www.tiktok.com/@digitalcraftdevel" target="_blank"
            ><img class="TK" src="/src/assets/Img/tiktokb.png" alt="TikTok"
          /></a>
          <a href="https://x.com/Dcdevelopment_" target="_blank"
            ><img class="X" src="/src/assets/Img/Xb.png" alt="X"
          /></a>
        </div>

        <!-- Footer Text and Links -->
        <div class="footer-text">
          <a href="contacto">
            <p>{{ $t("headerFooter.footer.contacto") }}</p>
          </a>
          <p class="copyright">{{ $t("headerFooter.footer.derechos") }}</p>
        </div>

        <!-- Logos -->
        <div class="footer-logos">
          <a href="https://appstac.ebizkaia.eus/es/inicio" target="_blank"
            ><img
              class="diputacion"
              src="/src/assets/Img/DiputacionBZK.png"
              alt="Diputación"
          /></a>
          <a href="../Pagina/castellano/index.html" target="_blank"
            ><img class="logo" src="/src/assets/Img/DCDlogo.png" alt="DCD Logo"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>
