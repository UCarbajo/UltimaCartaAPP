<script setup>
import { ref } from "vue";
import "../components/css/HeaderStyle2.css";
const activeTab = ref("minimos");
</script>
<template>
  <div class="template">
    <div class="container">
      <div class="max-width">
        <div class="grid grid-cols-3" style="margin-bottom: 2rem">
          <div class="card">
            <div class="card-header">
              <div class="card-badge">
                <span class="icon icon-file"></span>
                <span>{{ $t("historia_interactiva") }}</span>
              </div>
              <h2 class="card-title">
                {{ $t("historia_marcos") }}
              </h2>
              <p class="card-description">
                {{ $t("descripcion_historia") }}
              </p>
            </div>
            <div class="card-content">
              <div class="section">
                <h3 class="section-title">
                  {{ $t("sinopsis") }}
                </h3>
                <p class="section-content">
                  {{ $t("sinopsis_texto") }}
                </p>
              </div>

              <div style="margin-bottom: 1.5rem">
                <h3 class="section-title" style="margin-bottom: 0.75rem">
                  {{ $t("dos_finales") }}
                </h3>
                <div class="endings-grid">
                  <div class="ending-card">
                    <span class="badge badge-green">{{ $t("final_a") }}</span>
                    <p class="section-content">
                      {{ $t("final_a_texto") }}
                    </p>
                  </div>
                  <div class="ending-card">
                    <span class="badge badge-amber">{{ $t("final_b") }}</span>
                    <p class="section-content">
                      {{ $t("final_b_texto") }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="section">
                <h3 class="section-title">
                  {{ $t("informacion_archivo") }}
                </h3>
                <ul class="info-list">
                  <li>
                    <span class="info-label">{{ $t("formato") }}:</span>
                    <span>{{ $t("formato_jar") }}</span>
                  </li>
                  <li>
                    <span class="info-label">{{ $t("tamano") }}:</span>
                    <span>{{ $t("tamano_valor") }}</span>
                  </li>
                  <li>
                    <span class="info-label">{{ $t("version") }}:</span>
                    <span>{{ $t("version_valor") }}</span>
                  </li>
                  <li>
                    <span class="info-label"
                      >{{ $t("ultima_actualizacion") }}:</span
                    >
                    <span>{{ $t("fecha_actualizacion") }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-footer">
              <a href="descargas/laUltimaCarta.jar" class="button">
                <span class="icon icon-download" style="color: white"></span>
                {{ $t("descargar_archivo") }}
              </a>
              <p class="text-center text-sm text-muted mt-4">
                {{ $t("aceptas_terminos") }}
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-header" style="padding: 1rem 1.5rem">
              <h3 class="card-title" style="font-size: 1.125rem">
                {{ $t("instrucciones") }}
              </h3>
            </div>
            <div class="card-content">
              <div class="instruction-step">
                <p>
                  {{ $t("paso_1") }}
                </p>
              </div>
              <div class="instruction-step">
                <p>
                  {{ $t("paso_2") }}
                </p>
              </div>
              <div class="instruction-step">
                <p>
                  {{ $t("paso_3") }}
                </p>
              </div>
              <div class="instruction-step">
                <p>
                  {{ $t("paso_4") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div style="display: flex; align-items: center; gap: 0.5rem">
              <span class="icon icon-laptop"></span>
              <h3
                class="card-title"
                style="margin-bottom: 0; font-size: 1.25rem"
              >
                {{ $t("requisitos_sistema") }}
              </h3>
            </div>
            <p class="card-description">
              {{ $t("verifica_requisitos") }}
            </p>
          </div>
          <div class="card-content">
            <div class="tabs">
              <div class="tabs-list">
                <button
                  class="tab-trigger"
                  :class="{ active: activeTab === 'minimos' }"
                  @click="activeTab = 'minimos'"
                >
                  {{ $t("requisitos_minimos") }}
                </button>
                <button
                  class="tab-trigger"
                  :class="{ active: activeTab === 'recomendados' }"
                  @click="activeTab = 'recomendados'"
                >
                  {{ $t("requisitos_recomendados") }}
                </button>
              </div>

              <div v-show="activeTab === 'minimos'" class="tab-content active">
                <table>
                  <thead>
                    <tr>
                      <th class="w-1-3">{{ $t("requisito") }}</th>
                      <th>{{ $t("especificacion") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-medium">
                        {{ $t("sistema_operativo") }}
                      </td>
                      <td>{{ $t("os_minimo") }}</td>
                    </tr>
                    <tr>
                      <td class="font-medium">
                        {{ $t("procesador") }}
                      </td>
                      <td>{{ $t("cpu_minimo") }}</td>
                    </tr>
                    <tr>
                      <td class="font-medium">
                        {{ $t("memoria_ram") }}
                      </td>
                      <td>{{ $t("ram_4gb") }}</td>
                    </tr>
                    <tr>
                      <td class="font-medium">
                        {{ $t("tarjeta_grafica") }}
                      </td>
                      <td>{{ $t("intel_amd_r5") }}</td>
                    </tr>
                    <tr>
                      <td class="font-medium">{{ $t("opengl") }}</td>
                      <td>{{ $t("opengl_4_4") }}</td>
                    </tr>
                    <tr>
                      <td class="font-medium">
                        {{ $t("espacio_disco") }}
                      </td>
                      <td>{{ $t("espacio_minimo") }}</td>
                    </tr>
                    <tr>
                      <td class="font-medium">{{ $t("java") }}</td>
                      <td>{{ $t("java_17") }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div v-show="activeTab === 'recomendados'" class="tab-content">
                <table>
                  <thead>
                    <tr>
                      <th class="w-1-3">{{ $t("requisito") }}</th>
                      <th>{{ $t("especificacion") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-medium">
                        {{ $t("sistema_operativo") }}
                      </td>
                      <td>{{ $t("os_minimo") }}</td>
                    </tr>
                    <tr>
                      <td class="font-medium">
                        {{ $t("procesador") }}
                      </td>
                      <td>{{ $t("cpu_recomendado") }}</td>
                    </tr>
                    <tr>
                      <td class="font-medium">
                        {{ $t("memoria_ram") }}
                      </td>
                      <td>{{ $t("ram_8gb") }}</td>
                    </tr>
                    <tr>
                      <td class="font-medium">
                        {{ $t("tarjeta_grafica") }}
                      </td>
                      <td>{{ $t("gpu_recomendada") }}</td>
                    </tr>
                    <tr>
                      <td class="font-medium">{{ $t("opengl") }}</td>
                      <td>{{ $t("opengl_4_4") }}</td>
                    </tr>
                    <tr>
                      <td class="font-medium">
                        {{ $t("espacio_disco") }}
                      </td>
                      <td>{{ $t("ssd_suficiente") }}</td>
                    </tr>
                    <tr>
                      <td class="font-medium">{{ $t("java") }}</td>
                      <td>{{ $t("java_17") }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.template {
  padding: 7rem 0 3rem;
}

.max-width {
  max-width: 64rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.grid-cols-3 {
  grid-template-columns: 2fr 1fr;
}

.card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 0.0625em solid #e2e8f0;
  box-shadow: 0 0.25em 0.375em -0.0625em rgba(0, 0, 0, 0.1),
    0 0.125em 0.25em -0.0625em rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.card-header {
  padding: 1.5rem;
  border-bottom: 0.0625em solid #e2e8f0;
  background: linear-gradient(to right, #f8fafc, #f1f5f9);
}

.card-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 0.875rem;
  color: #64748b;
}

.card-content {
  padding: 1.5rem;
}

.card-footer {
  padding: 1.5rem;
  border-top: 0.0625em solid #e2e8f0;
}

/* Sections */
.section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f8fafc;
  border-radius: 0.5rem;
  border: 0.0625em solid #e2e8f0;
}

.section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.section-content {
  font-size: 0.875rem;
  color: #334155;
}

/* Endings grid */
.endings-grid {
  display: grid;
  gap: 0.75rem;
}

.ending-card {
  padding: 0.75rem;
  background-color: #f8fafc;
  border-radius: 0.375rem;
  border: 0.0625em solid #e2e8f0;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.badge-green {
  background-color: #10b981;
}

.badge-amber {
  background-color: #f59e0b;
}

/* Info list */
.info-list {
  list-style: none;
}

.info-list li {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.info-list li:last-child {
  margin-bottom: 0;
}

.info-label {
  font-weight: 500;
}

/* Instructions */
.instruction-step {
  background-color: #f8fafc;
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.instruction-step:last-child {
  margin-bottom: 0;
}

/* Button */
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #1b19a5;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #0f0e73;
}

.text-center {
  text-align: center;
}

.text-sm {
  font-size: 0.75rem;
}

.text-muted {
  color: #64748b;
}

.mt-4 {
  margin-top: 1rem;
}

/* Tabs */
.tabs {
  width: 100%;
}

.tabs-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f1f5f9;
  padding: 0.25rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
}

.tab-trigger {
  padding: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  background: none;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.tab-trigger.active {
  background-color: #ffffff;
  color: #0f172a;
  box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.05);
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

th {
  text-align: left;
  padding: 0.75rem 1rem;
  font-weight: 500;
  color: #64748b;
  border-bottom: 0.0625em solid #e2e8f0;
}

td {
  padding: 0.75rem 1rem;
  border-bottom: 0.0625em solid #e2e8f0;
}

tr:last-child td {
  border-bottom: none;
}

.font-medium {
  font-weight: 500;
}

.w-1-3 {
  width: 33.333333%;
}

/* Icons */
.icon {
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  background-color: currentColor;
  -webkit-mask-size: cover;
  mask-size: cover;
}

.icon-file {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'/%3E%3Cpolyline points='14 2 14 8 20 8'/%3E%3Cline x1='16' y1='13' x2='8' y2='13'/%3E%3Cline x1='16' y1='17' x2='8' y2='17'/%3E%3Cline x1='10' y1='9' x2='8' y2='9'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'/%3E%3Cpolyline points='14 2 14 8 20 8'/%3E%3Cline x1='16' y1='13' x2='8' y2='13'/%3E%3Cline x1='16' y1='17' x2='8' y2='17'/%3E%3Cline x1='10' y1='9' x2='8' y2='9'/%3E%3C/svg%3E");
}

.icon-download {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width  width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/%3E%3Cpolyline points='7 10 12 15 17 10'/%3E%3Cline x1='12' y1='15' x2='12' y2='3'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/%3E%3Cpolyline points='7 10 12 15 17 10'/%3E%3Cline x1='12' y1='15' x2='12' y2='3'/%3E%3C/svg%3E");
}

.icon-laptop {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16'/%3E%3C/svg%3E");
}
</style>
