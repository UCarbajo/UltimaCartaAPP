<template>
  <main>
    <section class="section-container" v-if="exito === 'true'">
      <div class="container-success">
        <div class="message-container success-mode">
          <h1>
            {{ $t("registroCentro.mensajes.exito.titulo") }}
          </h1>
        </div>
        <div class="container-text">
          <p>
            {{ $t("registroCentro.mensajes.exito.texto") }}
          </p>
          <a href="inicio" class="success-btn">
            {{ $t("registroCentro.navegacion.inicio") }}
          </a>
        </div>
      </div>
    </section>

    <section class="section-container" v-else-if="exito === 'false'">
      <div class="container-success">
        <div class="message-container error-mode">
          <h1>
            {{ $t("registroCentro.mensajes.error.titulo") }}
          </h1>
        </div>
        <div class="container-text">
          <p>
            {{ $t("registroCentro.mensajes.error.texto") }}
          </p>
          <a href="registro/centro" class="error-btn">
            {{ $t("registroCentro.navegacion.registro") }}
          </a>
        </div>
      </div>
    </section>

    <section class="section-container" v-else>
      <div class="form-container">
        <h1>
          {{ $t("registroCentro.titulo") }}
        </h1>
        <form action="registro" method="post">
          <fieldset class="user-data">
            <legend>
              {{ $t("registroIndividual.secciones.datosAcceso") }}
            </legend>
            <input type="hidden" name="tipoSuscripcion" value="2" />
            <div class="form-group">
              <label for="email">{{
                $t("registroIndividual.form.email")
              }}</label>
              <input
                type="email"
                id="email"
                name="correo"
                :placeholder="$t('registroIndividual.form.placeholders.email')"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">{{
                $t("registroIndividual.form.contrasena")
              }}</label>
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
              <label for="repeat-password">{{
                $t("registroIndividual.form.repetirContrasena")
              }}</label>
              <input
                type="password"
                id="repeat-password"
                name="repetirContrasena"
                :placeholder="
                  $t('registroIndividual.form.placeholders.repetirContrasena')
                "
                required
              />
            </div>
          </fieldset>
          <fieldset class="personal-data">
            <legend>
              {{ $t("registroIndividual.secciones.datosPersonales") }}
            </legend>
            <div class="form-group">
              <label for="nombre">{{
                $t("registroIndividual.form.nombre")
              }}</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                :placeholder="$t('registroIndividual.form.placeholders.nombre')"
                required
              />
            </div>
            <div class="form-group">
              <label for="apellidos">{{
                $t("registroIndividual.form.apellidos")
              }}</label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                :placeholder="
                  $t('registroIndividual.form.placeholders.apellidos')
                "
                required
              />
            </div>
            <div class="form-group">
              <label for="dni">{{ $t("registroIndividual.form.dni") }}</label>
              <input
                type="text"
                id="dni"
                name="dni"
                minlength="9"
                maxlength="9"
                :placeholder="$t('registroIndividual.form.placeholders.dni')"
                required
                pattern="[A-Z0-9]{8}[A-Z]{1}"
              />
            </div>
            <div class="form-group">
              <label for="phone">{{
                $t("registroIndividual.form.telefono")
              }}</label>
              <input
                type="tel"
                id="phone"
                name="telefono"
                :placeholder="
                  $t('registroIndividual.form.placeholders.telefono')
                "
                required
                pattern="\d{9}"
              />
            </div>
          </fieldset>
          <fieldset class="school-data">
            <legend>{{ $t("registroCentro.titulo") }}</legend>
            <div class="form-group">
              <label for="school-cif">{{
                $t("registroCentro.form.cif")
              }}</label>
              <input
                type="text"
                id="school-cif"
                name="cif"
                :placeholder="$t('registroCentro.form.placeholders.cif')"
                required
              />
            </div>
            <div class="form-group">
              <label for="school-name">{{
                $t("registroCentro.form.nombreCentro")
              }}</label>
              <input
                type="text"
                id="school-name"
                name="nombreCentro"
                :placeholder="
                  $t('registroCentro.form.placeholders.nombreCentro')
                "
                required
              />
            </div>
            <div class="form-group">
              <label for="phoneCentro">{{
                $t("registroCentro.form.telefono")
              }}</label>
              <input
                type="tel"
                id="phoneCentro"
                name="telefonoCentro"
                :placeholder="$t('registroCentro.form.placeholders.telefono')"
                required
                pattern="\d{9}"
              />
            </div>
            <div class="form-group">
              <label for="correoCentro">{{
                $t("registroCentro.form.correo")
              }}</label>
              <input
                type="email"
                id="correoCentro"
                name="correoCentro"
                :placeholder="$t('registroCentro.form.placeholders.correo')"
                required
              />
            </div>
            <div class="form-group">
              <label for="school-city">{{
                $t("registroCentro.form.ciudad")
              }}</label>
              <input
                type="text"
                id="school-city"
                name="ciudad"
                :placeholder="$t('registroCentro.form.placeholders.ciudad')"
                required
              />
            </div>
            <div class="form-group">
              <label for="school-students">{{
                $t("registroCentro.form.numeroAlumnos")
              }}</label>
              <input
                type="number"
                id="school-students"
                name="numeroAlumnos"
                :placeholder="
                  $t('registroCentro.form.placeholders.numeroAlumnos')
                "
                required
              />
            </div>
            <div class="form-group">
              <label for="school-education-stage">{{
                $t("registroCentro.form.etapaEducativa")
              }}</label>
              <input
                type="text"
                id="school-education-stage"
                name="etapaEducativa"
                :placeholder="
                  $t('registroCentro.form.placeholders.etapaEducativa')
                "
                required
              />
            </div>
          </fieldset>
          <button type="submit" class="submit-btn">
            {{ $t("registroIndividual.form.botonEnviar") }}
          </button>
        </form>
      </div>
    </section>
  </main>
</template>
<style scoped>
main {
  padding-top: 100px;
}
h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
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
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
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
