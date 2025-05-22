<template>
  <main>
    <div class="container">
      <div class="form-container">
        <h1>
          {{ $t("loginPage.iniciarSesion") }}
        </h1>
        <div class="form-content">
          <form
            action="inicioSesion"
            method="post"
            id="individual-form"
            class="form-fields"
          >
            <div class="form-group">
              <label for="email">
                {{ $t("registroIndividual.form.email") }}
              </label>
              <input
                type="email"
                id="email"
                name="correo"
                :placeholder="$t('registroIndividual.form.placeholders.email')"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">
                {{ $t("registroIndividual.form.contrasena") }}
              </label>
              <input
                type="password"
                id="password"
                name="contrasena"
                :placeholder="
                  $t('registroIndividual.form.placeholders.contrasena')
                "
                required
              />
            </div>
            <div class="form-group">
              <label class="checkbox-option">
                <input type="checkbox" id="recuerdame" name="recuerdame" />
                <span>{{ $t("registroIndividual.form.mantenerSesion") }}</span>
              </label>
            </div>
            <button type="submit" class="submit-btn">
              {{ $t("registroIndividual.form.botonEnviar") }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  padding-top: 100px;
}
.section-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 40px;
  margin-top: 50px;
  margin-bottom: 120px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
}

.user-type-selector {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.radio-option input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #1b19a5;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
}

.radio-option input[type="radio"]:checked {
  background-color: #1b19a5;
}

.radio-option input[type="radio"]:checked::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
}

.radio-option label {
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.6rem;
}

.form-content {
  display: flex;
  flex-direction: column;
}

.form-fields {
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

.message-container {
  padding: 5rem;
  text-align: center;
  border-radius: 8px 8px 0px 0px;
}
.container-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 2.5rem;
  width: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}
.container-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-text p {
  margin: 2rem;
  font-size: 1.5rem;
}

.container-text a {
  width: 40%;
  margin-bottom: 2rem;
}

.success-mode {
  background-color: #28a745;
  color: white;
}

.error-mode {
  background-color: #dc3545;
  color: white;
}

.success-btn,
.error-btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.success-btn {
  background-color: white;
  color: #28a745;
  border: 2px solid #28a745;
}

.success-btn:hover {
  background-color: #28a745;
  color: white;
}

.error-btn {
  background-color: white;
  color: #dc3545;
  border: 2px solid #dc3545;
}

.error-btn:hover {
  background-color: #dc3545;
  color: white;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Nunito", sans-serif;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #1b19a5;
}

fieldset {
  border: 2px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
}

legend {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0 10px;
  margin-bottom: 10px;
}

/* === Checkbox centrado y a juego con inputs === */
.checkbox-option {
  display: inline-flex !important;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.checkbox-option input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  position: relative;
  flex-shrink: 0;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.checkbox-option input[type="checkbox"]:hover {
  border-color: #1b19a5;
}

.checkbox-option input[type="checkbox"]:checked {
  background-color: #1b19a5;
  border-color: #1b19a5;
}

.checkbox-option input[type="checkbox"]:checked::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -60%) rotate(45deg);
}

.checkbox-option span {
  display: inline-block;
  font-weight: 600;
  margin: 0; /* evita márgenes inesperados */
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
</style>
