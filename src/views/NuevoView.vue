<template>
  <div class="nuevo-view">
    <h1>Página Nueva</h1>
    <p>Esta es una página de ejemplo con un diseño simple.</p>
    <button @click="goHome">Volver al inicio</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<style scoped>
.nuevo-view {
  max-width: 400px;
  margin: 60px auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
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
